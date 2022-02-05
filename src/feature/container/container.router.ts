import { Router } from 'express';
import {
  attachListenerToContainer,
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
router.post('/attach/:id', attachListenerToContainer);

/**
 * Retrieve logs of specified container
 */
router.get('/logs', async (_req, res) => {
  res.json({ check: 'this' });
});

export default router;
