import { PrismaClient, Logs } from '@prisma/client';
import { getContainer } from '@feature/container/container.model';

const prisma = new PrismaClient();

export const addLog = async (
  containerId: string,
  log: Buffer,
  error: boolean,
): Promise<Logs | null> => {
  const container = await getContainer(containerId);
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

type EncodedLog = Logs & { data: any };
export const retrieveAllLogs = (encoding?: string): Promise<EncodedLog[]> => {
  return prisma.logs.findMany().then((logs: EncodedLog[]) => {
    if (encoding)
      logs.forEach((log) => (log.data = log.data.toString(encoding)));
    return logs;
  });
};

type GetLogs = {
  (id: string): Promise<Logs[] | null>;
  (id: number): Promise<Logs[] | null>;
};
export const getLogsByID: GetLogs = async (id: unknown) => {
  let logs: Logs[] | null = null;
  if (typeof id === 'string') {
    const container = await getContainer(id);
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
  return logs;
};
