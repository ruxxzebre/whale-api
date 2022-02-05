import { Router } from 'express';
import {
  attachListenerToContainer,
  getContainerHealth,
  getContainerStatus,
  getListOfContainers,
  getStatsOfContainerByID,
} from '@feature/container/container.controller';
import { catchAsync } from '@utils/catchAsync';

const router = Router();

/**
 * Retrieve list of running containers
 */
router.get('/list', catchAsync(getListOfContainers));

/**
 * Check stats of specified container
 */
router.get('/stats/:id', catchAsync(getStatsOfContainerByID));

/**
 * Check is container is up and running
 */
router.get('/isAlive/:id', catchAsync(getContainerStatus));

/**
 * Health check
 */
router.get('/health/:id', catchAsync(getContainerHealth));

/**
 * Attach listener to container
 */
router.post('/attach/:id', catchAsync(attachListenerToContainer));

export default router;
