import {
  Container as InversifyContainer,
  decorate,
  injectable,
} from 'inversify';
import Docker from 'dockerode';
import 'reflect-metadata';
import { dockerOptions } from '@config/docker';
import { buildProviderModule } from 'inversify-binding-decorators';
import {
  ContainerService,
  IContainerService,
} from './/container/container.service';
import {
  IContainerModel,
  PrismaContainerModel,
} from './/container/container.model';
import { ILogsService, LogsService } from './log/logs.service';
import { DockerService } from './docker/docker.service';
import { TokenService } from './token/token.service';

import './container/container.controller';
import './log/logs.controller';
import './token/token.controller';

// import {
//   // interfaces,
//   InversifyExpressServer,
//   // TYPE,
// } from 'inversify-express-utils';

/**
 * Creating IOC container
 */
export const createContainer = (): InversifyContainer => {
  const container = new InversifyContainer();
  decorate(injectable(), Docker);
  container.bind<IContainerService>('ContainerService').to(ContainerService);
  container.bind<IContainerModel>('ContainerModel').to(PrismaContainerModel);
  container.bind<ILogsService>('LogsService').to(LogsService);
  container.bind<TokenService>('TokenService').to(TokenService);
  container.load(buildProviderModule());

  container
    .bind<Docker.DockerOptions>('DockerOptions')
    .toConstantValue(dockerOptions);
  container.bind<Docker>('DockerService').to(DockerService);
  return container;
};
