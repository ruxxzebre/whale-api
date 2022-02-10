import * as LogsModel from '@server/module/log/logs.model';
import { EncodedLog } from '@server/module/log/logs.model';
import { injectable } from 'inversify';

export interface ILogsService {
  getAllLogs(encoding?: string): ReturnType<typeof LogsModel.retrieveAllLogs>;
  getLogs(id: string, encoding?: string): Promise<EncodedLog[] | null>;
  getLogs(id: number, encoding?: string): Promise<EncodedLog[] | null>;
}

@injectable()
export class LogsService implements ILogsService {
  getAllLogs(encoding = undefined) {
    return LogsModel.retrieveAllLogs(encoding);
  }

  getLogs(id, encoding = undefined) {
    return LogsModel.getLogsByID(id, encoding);
  }
}
