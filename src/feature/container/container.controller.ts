import { RequestHandler } from 'express';
import * as ContainerService from '@feature/container/container.service';

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
