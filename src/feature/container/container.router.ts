import { Router } from 'express';
import * as ContainerController from '@feature/container/container.controller';
import { catchAsync } from '@utils/catchAsync';

const router = Router();

/**
 * Retrieve list of running containers
 */
router.get('/list', catchAsync(ContainerController.getListOfContainers));

/**
 * Check stats of specified container
 */
router.get(
  '/stats/:id',
  catchAsync(ContainerController.getStatsOfContainerByID),
);

/**
 * Check is container is up and running
 */
router.get('/isAlive/:id', catchAsync(ContainerController.getContainerStatus));

/**
 * Health check
 */
router.get('/health/:id', catchAsync(ContainerController.getContainerHealth));

/**
 * Attach listener to container
 */
router.post(
  '/attach/:id',
  catchAsync(ContainerController.attachListenerToContainer),
);

/**
 * Get container data based on source (storage or straight from docker)
 */
router.get(
  '/:source/:id',
  catchAsync(ContainerController.getContainerBySource),
);

export default router;
