import { RequestHandler } from 'express';
import {
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

export const getStatsOfContainerByID: RequestHandler = async (req, res) => {
  const id = req.params.id;
  // TODO: handle error
  const data = await getContainerStatsByID(id);
  res.send(data);
};

export const getListOfContainers: RequestHandler = async (req, res) => {
  const filter = req.query.filter as string[];
  const list = await getContainersList(filter);
  res.send(list);
};
