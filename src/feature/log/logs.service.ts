import * as LogsModel from '@feature/log/logs.model';

export const getAllLogs = (): ReturnType<typeof LogsModel.retrieveAllLogs> =>
  LogsModel.retrieveAllLogs();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getLogs = (id: string | number) => LogsModel.getLogsByID(id);
