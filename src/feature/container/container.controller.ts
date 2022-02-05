import { RequestHandler } from 'express';
import {
  attachToContainer,
  getContainersList,
  getContainerStatsByID,
  inspectContainerByID,
} from '@feature/container/container.service';

export const getContainerStatus: RequestHandler = async (req, res, next) => {
  const id = req.params.id;
  try {
    await inspectContainerByID(id);
  } catch (e) {
    return next(e);
  }
  res.send('OK!');
};

export const getStatsOfContainerByID: RequestHandler = async (
  req,
  res,
  next,
) => {
  const id = req.params.id;
  try {
    await getContainerStatsByID(id);
    res.send('OK!');
  } catch (e) {
    next(e);
  }
};

export const getListOfContainers: RequestHandler = async (req, res) => {
  const filter = req.query.filter as string[];
  const list = await getContainersList(filter);
  res.send(list);
};

export const attachListenerToContainer: RequestHandler = async (
  req,
  res,
  _next,
) => {
  const id = req.params.id;
  const container = await attachToContainer(id);
  res.send(container);
};
