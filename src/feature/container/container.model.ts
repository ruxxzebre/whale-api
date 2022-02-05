import { PrismaClient, Container, Logs } from '@prisma/client';

const prisma = new PrismaClient();

export const addContainer = async (
  container: Omit<Container, 'id' | 'createdAt'>,
): Promise<Container> => {
  const addedContainer = await prisma.container.create({ data: container });
  return addedContainer;
};

export const addLog = async (
  containerId: string,
  log: Buffer,
  error: boolean,
): Promise<Logs | null> => {
  const container = await prisma.container.findFirst({
    where: {
      internal_id: containerId,
    },
  });
  if (!container) return null;
  const addedLog = await prisma.logs.create({
    data: {
      containerId: container.id,
      data: log,
      error,
    },
  });
  return addedLog;
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
