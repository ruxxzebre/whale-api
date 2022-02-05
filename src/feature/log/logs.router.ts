import { Router } from 'express';
import { catchAsync } from '@utils/catchAsync';
import * as LogsController from '@feature/log/logs.controller';

const router = Router();

/**
 * Retrieve all logs
 */
// TODO: resolve buffer query
router.get('/', catchAsync(LogsController.getAllLogs));

/**
 * Retrieve logs of specified container
 */
router.get('/:id', catchAsync(LogsController.getLogs));

export default router;
