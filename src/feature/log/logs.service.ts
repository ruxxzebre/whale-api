import * as LogsModel from '@feature/log/logs.model';

export const getAllLogs = (
  encoding?: string,
): ReturnType<typeof LogsModel.retrieveAllLogs> =>
  encoding ? LogsModel.retrieveAllLogs(encoding) : LogsModel.retrieveAllLogs();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getLogs = (id: string | number) => LogsModel.getLogsByID(id);
