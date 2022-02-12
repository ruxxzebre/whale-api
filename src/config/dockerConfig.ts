import path from 'path';
import Docker from 'dockerode';
import JSON5 from 'json5';
import { logger } from './logger';
import * as fs from 'fs';

export let dockerOptions: Docker.DockerOptions;
try {
  dockerOptions = JSON5.parse(
    fs.readFileSync(path.resolve('.dockerrode.json5'), {
      encoding: 'utf-8',
    }),
  );
  logger.info('Docker configuration resolved...');
} catch (e) {
  logger.error('Invalid dockerrode configuration error: ' + e.message);
  process.exit(1);
}

export const checkDockerAvailability = (): void => {
  try {
    new Docker(dockerOptions);
    logger.info('Docker is available...');
  } catch (e) {
    logger.error(e);
  }
};
