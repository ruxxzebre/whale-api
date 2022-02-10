import { Logs, PrismaClient } from '@prisma/client';
import { PrismaContainerModel } from '@server/module/container/container.model';

const containerModel = new PrismaContainerModel();

const prisma = new PrismaClient();

export const addLog = async (
  containerId: string,
  log: Buffer,
  error: boolean,
): Promise<Logs | null> => {
  const container = await containerModel.getContainer(containerId);
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

export type EncodedLog = Logs & { data: any };
export const retrieveAllLogs = (encoding?: string): Promise<EncodedLog[]> => {
  return prisma.logs.findMany().then((logs: EncodedLog[]) => {
    if (encoding)
      logs.forEach((log) => (log.data = log.data.toString(encoding)));
    return logs;
  });
};

export type GetLogs = {
  (id: string, encoding?: string): Promise<EncodedLog[] | null>;
  (id: number, encoding?: string): Promise<EncodedLog[] | null>;
};
export const getLogsByID: GetLogs = async (id, encoding) => {
  let logs: EncodedLog[] | null = null;
  if (typeof id === 'string') {
    const container = await containerModel.getContainer(id);
    if (!container) {
      return null;
    }
    id = container.id;
  }
  logs = await prisma.logs.findMany({
    where: {
      containerId: id,
    },
  });
  if (logs && encoding)
    logs.forEach((log) => (log.data = log.data.toString(encoding)));
  return logs;
};
