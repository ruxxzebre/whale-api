import {
  Container as InversifyContainer,
  decorate,
  injectable,
} from 'inversify';
import 'reflect-metadata';
// import {
//   // interfaces,
//   InversifyExpressServer,
//   // TYPE,
// } from 'inversify-express-utils';

import './container/container.controller';
import {
  ContainerService,
  IContainerService,
} from '@feature/container/container.service';
import {
  IContainerModel,
  PrismaContainerModel,
} from '@feature/container/container.model';
import { DockerService } from '@feature/docker/docker.service';
import Docker from 'dockerode';
import { dockerOptions } from '@config/docker';

export const createContainer = (): InversifyContainer => {
  const container = new InversifyContainer();
  decorate(injectable(), Docker);
  container.bind<IContainerService>('ContainerService').to(ContainerService);
  container.bind<IContainerModel>('ContainerModel').to(PrismaContainerModel);

  container
    .bind<Docker.DockerOptions>('DockerOptions')
    .toConstantValue(dockerOptions);
  container.bind<Docker>('DockerService').to(DockerService);
  return container;
};
