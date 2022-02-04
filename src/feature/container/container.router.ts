import { Router } from 'express';
import {
  getContainerStatus,
  getListOfContainers,
  getStatsOfContainerByID,
} from '@feature/container/container.controller';

const router = Router();

/**
 * Retrieve list of running containers
 */
router.get('/list', getListOfContainers);

/**
 * Check stats of specified container
 */
router.get('/stats/:id', getStatsOfContainerByID);

/**
 * Check is container is up and running
 */
router.get('/isAlive/:id', getContainerStatus);

/**
 * Attach listener to container
 */
router.post('/attach/:id');

/**
 * Retrieve logs of specified container
 */
router.get('/logs/:id');

export default router;
