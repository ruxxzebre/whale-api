import { PrismaClient, Container } from '@prisma/client';
import { injectable } from 'inversify';

export interface IContainer {
  name: string;
  internal_id: string;
  internal_pid: string;
}

export interface IContainerModel {
  addContainer(container: IContainer): Promise<IContainer>;
  getContainer(id: string): Promise<Container | null>;
  getContainer(id: number): Promise<Container | null>;
}

const prisma = new PrismaClient();

@injectable()
export class PrismaContainerModel implements IContainerModel {
  async addContainer(container: IContainer): Promise<Container> {
    const addedContainer = await prisma.container.create({ data: container });
    return addedContainer;
  }

  async getContainer(id) {
    let container: Container | null = null;
    if (typeof id === 'string') {
      container = await prisma.container.findFirst({
        where: {
          internal_id: id,
        },
      });
    }
    if (typeof id === 'number') {
      container = await prisma.container.findFirst({
        where: {
          id,
        },
      });
    }
    return container;
  }
}

/**
 * TODO
 * [PRISMA] Make container fields unique
 * Check if container is in db
 * Check is listeners attached to container
 */
