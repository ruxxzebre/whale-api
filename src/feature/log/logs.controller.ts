import { RequestHandler } from 'express';
import * as LogsService from '@feature/log/logs.service';

export const getAllLogs: RequestHandler = async (req, res) => {
  const encoding = req.query.encoding;
  const data =
    encoding && typeof encoding == 'string'
      ? await LogsService.getAllLogs(encoding)
      : await LogsService.getAllLogs();

  res.send(data);
};

export const getLogs: RequestHandler = async (req, res) => {
  const id = req.params.id;
  const encoding = req.query.encoding;
  const data =
    encoding && typeof encoding == 'string'
      ? await LogsService.getLogs(id, encoding)
      : await LogsService.getLogs(id);
  res.send(data);
};
