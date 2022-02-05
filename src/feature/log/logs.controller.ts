import { RequestHandler } from 'express';
import * as LogsService from '@feature/log/logs.service';

export const getAllLogs: RequestHandler = async (_req, res) => {
  const data = await LogsService.getAllLogs();
  res.send(data);
};

export const getLogs: RequestHandler = async (req, res) => {
  const id = req.params.id;
  const data = await LogsService.getLogs(id);
  console.log(data);
  res.send(data);
};
