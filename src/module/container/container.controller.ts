import { ContainerService } from '@server/module/container/container.service';
import status from 'http-status';
import 'reflect-metadata';
import {
  BaseHttpController,
  controller,
  httpDelete,
  httpGet,
  httpPost,
  queryParam,
} from 'inversify-express-utils';
import { inject } from 'inversify';
import { requestParam } from 'inversify-express-utils/lib/decorators';

@controller('/container')
export class ContainerController extends BaseHttpController {
  constructor(
    @inject('ContainerService') private containerService: ContainerService,
  ) {
    super();
  }

  @httpGet('/list')
  getListOfContainers(@requestParam('filter') filter?: string[]) {
    return this.containerService.getContainersList(filter);
  }

  @httpGet('/:id/:source?')
  async getContainerBySource(
    @requestParam('id') id: string,
    @queryParam('source') source: 'storage' | 'docker' = 'docker',
  ) {
    switch (source) {
      case 'storage': {
        const container = await this.containerService.getSavedContainer(id);
        if (container) return container;
        else break;
      }
      case 'docker': {
        const container = await this.containerService
          .inspectContainerByID(id)
          .catch(() => null);
        if (container) return container;
      }
    }

    return this.json(
      `Container not found in ${source || 'specified source'}`,
      status.NOT_FOUND,
    );
  }

  @httpDelete('/:id')
  removeContainer(@requestParam('id') id: string) {
    return this.containerService.removeContainerByID(id);
  }

  @httpGet('/:id/health')
  getContainerHealth(@requestParam('id') id: string) {
    return this.containerService.checkContainerHealth(id);
  }

  @httpGet('/:id/stats')
  getStatsOfContainerByID(@requestParam('id') id: string) {
    return this.containerService.getContainerStatsByID(id);
  }

  @httpPost('/:id/attach')
  attachListenerToContainer(@requestParam('id') id: string) {
    return this.containerService.attachToContainer(id);
  }

  @httpPost('/:id/detach')
  detachListenerFromContainer(@requestParam('id') id: string) {
    return this.containerService.detachFromContainer(id);
  }
}
