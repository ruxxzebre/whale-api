import * as LogsModel from '@feature/log/logs.model';
import { GetLogs } from '@feature/log/logs.model';

export const getAllLogs = (
  encoding?: string,
): ReturnType<typeof LogsModel.retrieveAllLogs> =>
  LogsModel.retrieveAllLogs(encoding);

export const getLogs: GetLogs = (id, encoding) =>
  LogsModel.getLogsByID(id, encoding);
