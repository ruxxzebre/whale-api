import express from 'express';
import cors from 'cors';
import errorHandler from '@middleware/errorHandler';
import { expressLogger } from '@middleware/expressLogger';
import { createContainer } from '@module/ioc';
import { InversifyExpressServer } from 'inversify-express-utils';

const createServer = (): express.Application => {
  const iocContainer = createContainer();
  const server = new InversifyExpressServer(iocContainer);
  server.setConfig((app) => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors('*'));

    app.disable('x-powered-by');

    app.get('/health', (_req, res) => {
      res.send('UP');
    });

    app.use(expressLogger);
    app.use(errorHandler);
  });

  return server.build();
};

export { createServer };
