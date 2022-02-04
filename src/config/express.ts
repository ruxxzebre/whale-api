import express from 'express';
import cors from 'cors';
import errorHandler from '@middleware/errorHandler';
import containerRouter from '@feature/container/container.router';

const createServer = (): express.Application => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors('*'));

  app.disable('x-powered-by');

  app.get('/health', (_req, res) => {
    res.send('UP');
  });

  app.use(errorHandler);

  /**
   * Connect routers
   */
  app.use('/container', containerRouter);

  return app;
};

export { createServer };
