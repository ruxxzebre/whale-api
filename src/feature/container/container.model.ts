import { PrismaClient, Container } from '@prisma/client';

const prisma = new PrismaClient();

export const addContainer = async (
  container: Omit<Container, 'id' | 'createdAt'>,
): Promise<Container> => {
  const addedContainer = await prisma.container.create({ data: container });
  return addedContainer;
};

type GetContainer = {
  (id: string): Promise<Container | null>;
  (id: number): Promise<Container | null>;
};
export const getContainer: GetContainer = async (id: unknown) => {
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
};

/**
 * TODO
 * [PRISMA] Make container fields unique
 * Get all logs
 * Get logs of container by id
 * Get container from db
 * Check if container is in db
 * Check is listeners attached to container
 */
