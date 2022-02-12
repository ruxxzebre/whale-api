import { ContainerController } from './container.controller';
import { ContainerService } from '@module/container/container.service';
import { DockerService } from '@module/docker/docker.service';
import { dockerOptions } from '@config/dockerConfig';
import Joi from 'joi';
import { createContainer } from '@module/ioc';
import {
  Context,
  createMockContext,
  MockContext,
} from '@config/prisma/context';
import {
  IContainer,
  IContainerModel,
  PrismaContainerModel,
} from '@module/container/container.model';
import { Container } from '@prisma/client';

jest.useFakeTimers();

const iocContainer = createContainer();

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

    beforeEach(() => {
      ContainerModel = new PrismaContainerModel(ctx.prisma);
    });

    it('Container should be found in database', () => {
      const c: IContainer = {
        name: 'Ballistic flex',
        internal_id: 'a',
        internal_pid: 'b',
      };
      mockCtx.prisma.container.create.mockResolvedValue(c as Container);
      ContainerModel.getContainer('a').then((data) => {
        expect(containerSchema.validate(data).error).toBeFalsy();
      });
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

    beforeEach(() => {
      controller = new ContainerController(
        new ContainerService(
          iocContainer.get('ContainerModel'),
          new DockerService(dockerOptions),
        ),
      );
    });

    it('Should return list of containers', (done) => {
      controller
        .getListOfContainers()
        .then((containers) => {
          expect(Array.isArray(containers)).toBeTruthy();
        })
        .catch((e) => done(e));
    });

    it('Should return list of containers with provided filter with existing keys', async (done) => {
      controller
        .getListOfContainers(existingFilterKeys)
        .then((containers) => {
          expect(filterSchema.validate(containers).error).toBeFalsy();
        })
        .catch((e) => done(e));
    });

    it('Should return list of empty objects due to provided filter with non existing keys', (done) => {
      controller
        .getListOfContainers(nonExistingFilterKeys)
        .then((containers) => {
          expect(containers.filter((c) => !!Object.keys(c)).length).toBe(0);
        })
        .catch((e) => done(e));
    });
  });
  // describe('Container Service', () => {});
  /* describe('Container Utilities', () => {
      it('Should add streams to a map', () => {

      });
    });
     */
});
