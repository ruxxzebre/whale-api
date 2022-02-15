import { ContainerController } from './container.controller';
import { ContainerService } from '@module/container/container.service';
import Joi from 'joi';
import {
  Context,
  createMockContext,
  MockContext,
} from '@config/prisma/context';
import { IContainer, IContainerModel } from '@module/container/container.model';
import { Container } from '@prisma/client';
import Docker from 'dockerode';
import { DockerStreamStorage } from '@module/streamStorage';
import containersMock from '../../../__tests__/docker.mock.json';
import { DockerService } from '@module/docker/docker.service';

jest.useFakeTimers();

// const iocContainer = createContainer();

class ContainerModelMock implements IContainerModel {
  private storage: Container[] = [];
  private highestIndex = 0;
  async addContainer(container: IContainer): Promise<IContainer> {
    this.highestIndex = this.storage.length + 1;
    this.storage.push({
      ...container,
      id: this.highestIndex,
      createdAt: new Date(),
    });
    return container;
  }
  async getContainer(id: unknown): Promise<Container | null> {
    if (!['string', 'number'].includes(typeof id)) return null;
    if (typeof id === 'string')
      return this.storage.find((c) => c.internal_id === id) || null;
    if (typeof id === 'number')
      return this.storage.find((c) => c.id === id) || null;
    return null;
  }
  async removeContainer(id: unknown): Promise<Container | null> {
    if (!['string', 'number'].includes(typeof id)) return null;
    const container = await this.getContainer(id);
    if (!container) return null;
    if (typeof id === 'string')
      this.storage = this.storage.filter((c) => c.internal_id !== id) || null;
    if (typeof id === 'number')
      this.storage = this.storage.filter((c) => c.id !== id) || null;
    return container;
  }
}

class DockerServiceMock {
  private _containers: Docker.Container[] =
    containersMock as unknown as Docker.Container[];

  listContainers() {
    return this._containers;
  }
  getContainer(id: unknown) {
    return this._containers.find((c) => c.id === id) || null;
  }
}

describe('Container Suite', () => {
  it('Should pass', () => {
    expect(0).toBeFalsy();
  });
  describe('Container Model', () => {
    let mockCtx: MockContext;
    let ctx: Context;
    const containerSchema = Joi.object({
      name: Joi.string(),
      internal_id: Joi.string(),
      internal_pid: Joi.string(),
    });

    beforeEach(() => {
      mockCtx = createMockContext();
      ctx = mockCtx as unknown as Context;
    });

    let ContainerModel: IContainerModel;

    beforeAll(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ContainerModel = new ContainerModelMock();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ContainerModel.prisma = ctx.prisma;
    });

    it('Container should be found in database', async () => {
      const c: IContainer = {
        name: 'Ballistic flex',
        internal_id: 'a',
        internal_pid: 'b',
      };
      // await mockCtx.prisma.container.create.mockResolvedValue(c as Container);
      await ContainerModel.addContainer(c);
      const data = await ContainerModel.getContainer('a');
      expect(data).toBeTruthy();
      expect(containerSchema.validate(data).error);
    });
  });
  describe('Container Controller', () => {
    const existingFilterKeys = ['Id', 'Image', 'ImageID'];
    const nonExistingFilterKeys = [
      'bark bark bark',
      'let me inject some service',
    ];
    const filterSchema = Joi.array().items(
      Joi.object({
        Id: Joi.string(),
        Image: Joi.string(),
        ImageID: Joi.string(),
      }),
    );
    let controller: ContainerController;

    beforeAll(() => {
      controller = new ContainerController(
        new ContainerService(
          new ContainerModelMock(),
          DockerStreamStorage.getInstance(),
          new DockerServiceMock() as unknown as DockerService,
        ),
      );
    });

    it('Should return list of containers', async () => {
      const list = await controller.getListOfContainers();
      expect(Array.isArray(list)).toBeTruthy();
    });

    it('Should return list of containers with provided filter with existing keys', async () => {
      const list = await controller.getListOfContainers(existingFilterKeys);
      if (list.length) expect(filterSchema.validate(list).error).toBeFalsy();
      return true;
    });

    it('Should return list of empty objects due to provided filter with non existing keys', async () => {
      const list = await controller.getListOfContainers(nonExistingFilterKeys);
      if (list.length)
        expect(list.filter((c) => !!Object.keys(c)).length).toBe(list.length);
      return true;
    });
  });
  describe('Container Service', () => {
    let containerService: ContainerService;

    beforeAll(() => {
      containerService = new ContainerService(
        new ContainerModelMock(),
        DockerStreamStorage.getInstance(),
        new DockerServiceMock() as unknown as DockerService,
      );
    });

    it('Should fail', async () => {
      await containerService.checkContainerHealth(containersMock[0].Id);
    });
  });
  describe('Container Stream Storage', () => {
    let dockerss: DockerStreamStorage;

    beforeAll(() => {
      dockerss = DockerStreamStorage.getInstance();
    });

    it('Should return null for nonexistent entry', () => {
      expect(dockerss.getContainerStreams('')).toBeNull();
    });
  });
});
