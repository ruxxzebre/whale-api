import '@config/index';
import { createServer } from '@config/express';
import { logger } from '@config/logger';
import { checkDockerAvailability } from '@config/dockerConfig';

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '5000';

async function startServer() {
  checkDockerAvailability();
  const app = createServer();
  const server = app.listen({ host, port }, () => {
    const addressInfo = server.address();
    logger.info(addressInfo);
    if (!addressInfo || typeof addressInfo === 'string') {
      logger.error(`AddressInfo is empty.`);
      return;
    }
    logger.info(
      `Server ready at http://${addressInfo?.address}:${addressInfo?.port}`,
    );
  });

  const signalTraps: NodeJS.Signals[] = ['SIGTERM', 'SIGINT', 'SIGUSR2'];
  signalTraps.forEach((type) => {
    process.once(type, async () => {
      logger.info(`process.once ${type}`);

      server.close(() => {
        logger.debug('HTTP server closed');
      });
    });
  });
}

startServer();
