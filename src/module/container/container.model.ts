import { Container, PrismaClient } from '@prisma/client';
import { inject, injectable } from 'inversify';

export interface IContainer {
  name: string;
  internal_id: string;
  internal_pid: string;
}

export interface IContainerModel {
  addContainer(container: IContainer): Promise<IContainer>;
  getContainer(id: string): Promise<Container | null>;
  getContainer(id: number): Promise<Container | null>;
  removeContainer(id: string): Promise<Container | null>;
  removeContainer(id: number): Promise<Container | null>;
}

@injectable()
export class PrismaContainerModel implements IContainerModel {
  constructor(@inject('PrismaClient') private prisma: PrismaClient) {}

  addContainer(container: IContainer): Promise<Container> {
    return this.prisma.container.create({ data: container });
  }

  async removeContainer(id: unknown): Promise<Container> {
    let container: Container | null = null;
    if (typeof id === 'string') {
      const tempContainer = await this.prisma.container.findFirst({
        where: {
          internal_id: id,
        },
      });
      container = await this.prisma.container.delete({
        where: {
          id: tempContainer?.id,
        },
      });
    } else if (typeof id === 'number') {
      container = await this.prisma.container.delete({
        where: {
          id,
        },
      });
    }
    if (!container) throw new Error('Container not found in DB.');

    return container;
  }

  async getContainer(id: unknown): Promise<Container> {
    let container: Container | null = null;
    if (typeof id === 'string') {
      container = await this.prisma.container.findFirst({
        where: {
          internal_id: id,
        },
      });
    }
    if (typeof id === 'number') {
      container = await this.prisma.container.findFirst({
        where: {
          id,
        },
      });
    }
    if (!container) throw new Error('Container not found in DB.');
    return container;
  }
}

/**
 * TODO
 * [PRISMA] Make container fields unique
 * Check is listeners attached to container
 */
