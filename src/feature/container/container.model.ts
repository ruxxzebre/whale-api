import { PrismaClient, Container, Logs } from '@generated/client';

const prisma = new PrismaClient();

export const addContainer = async (
  container: Omit<Container, 'id' | 'createdAt'>,
): Promise<Container> => {
  const addedContainer = await prisma.container.create({ data: container });
  return addedContainer;
};

export const addLog = async (
  containerId: number,
  log: Buffer,
  error: boolean,
): Promise<Logs> => {
  const addedLog = await prisma.logs.create({
    data: {
      containerId,
      data: log,
      error,
    },
  });
  return addedLog;
};
