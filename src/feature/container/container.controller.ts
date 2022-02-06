import { RequestHandler } from 'express';
import * as ContainerService from '@feature/container/container.service';
import status from 'http-status';

export const getContainerStatus: RequestHandler = async (req, res) => {
  const id = req.params.id;
  await ContainerService.inspectContainerByID(id);
  res.send('OK!');
};

export const getContainerHealth: RequestHandler = async (req, res) => {
  const id = req.params.id;
  const data = await ContainerService.checkContainerHealth(id);
  res.send(data);
};

export const getStatsOfContainerByID: RequestHandler = async (req, res) => {
  const id = req.params.id;
  await ContainerService.getContainerStatsByID(id);
  res.send('OK!');
};

export const getListOfContainers: RequestHandler = async (req, res) => {
  const filter = req.query.filter as string[];
  const list = await ContainerService.getContainersList(filter);
  res.send(list);
};

export const attachListenerToContainer: RequestHandler = async (req, res) => {
  const id = req.params.id;
  const container = await ContainerService.attachToContainer(id);
  res.send(container);
};

export const detachListenerFromContainer: RequestHandler = async (req, res) => {
  const id = req.params.id;
  await ContainerService.detachFromContainer(id);
  res.send('OK!');
};

export const getContainerBySource: RequestHandler = async (req, res) => {
  const id = req.params.id;
  const source = req.params.source;
  switch (source) {
    case 'storage': {
      const container = await ContainerService.getSavedContainer(id);
      if (container) return res.send(container);
      else break;
    }
    case 'docker': {
      const container = await ContainerService.inspectContainerByID(id).catch(
        () => null,
      );
      if (container) return res.send(container);
    }
  }
  return res.status(status.NOT_FOUND).send(`Container not found in ${source}`);
};
