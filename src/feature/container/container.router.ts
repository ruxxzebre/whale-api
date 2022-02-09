import { Router } from 'express';
import { catchAsync } from '@utils/catchAsync';
import { ContainerController } from '@feature/container/container.controller';
import { PrismaContainerModel } from '@feature/container/container.model';
import { ContainerService } from '@feature/container/container.service';

const router = Router();
const containerModel = new PrismaContainerModel();
const containerService = new ContainerService(containerModel);
const containerController = new ContainerController(containerService);

/**
 * Retrieve list of running containers
 */
router.get('/list', catchAsync(containerController.getListOfContainers));

/**
 * Check stats of specified container
 */
router.get(
  '/stats/:id',
  catchAsync(containerController.getStatsOfContainerByID),
);

/**
 * Check is container is up and running
 */
router.get('/isAlive/:id', catchAsync(containerController.getContainerStatus));

/**
 * Health check
 */
router.get('/health/:id', catchAsync(containerController.getContainerHealth));

/**
 * Attach listener to container
 */
router.post(
  '/attach/:id',
  catchAsync(containerController.attachListenerToContainer),
);

router.post(
  '/detach/:id',
  catchAsync(containerController.detachListenerFromContainer),
);

/**
 * Get container data based on source (storage or straight from docker)
 */
router.get(
  '/:source/:id',
  catchAsync(containerController.getContainerBySource),
);

export default router;
