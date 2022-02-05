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
    const data = await getContainerStatsByID(id);
    console.log(data);
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

export const attachListenerToContainer: RequestHandler = (req, res, _next) => {
  const id = req.params.id;
  attachToContainer(id).then(() => console.log('ATTACHED'));
  res.send('Attached!');
};
