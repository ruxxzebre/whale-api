import { RequestHandler } from 'express';
import { logger } from '@config/logger';

export const expressLogger: RequestHandler = (req, _res, next) => {
  logger.info(`HTTP ${req.method} ${req.url}`);
  next();
};
