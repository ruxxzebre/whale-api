// import { RequestHandler } from 'express';
import { IContainerService } from '@feature/container/container.service';
import status from 'http-status';
// import { inject } from 'inversify';

export class ContainerController {
  constructor(private containerService: IContainerService) {}

  async getContainerStatus(req, res) {
    const id = req.params.id;
    await this.containerService.inspectContainerByID(id);
    res.send('OK!');
  }

  async getContainerHealth(req, res) {
    const id = req.params.id;
    const data = await this.containerService.checkContainerHealth(id);
    res.send(data);
  }

  async getStatsOfContainerByID(req, res) {
    const id = req.params.id;
    await this.containerService.getContainerStatsByID(id);
    res.send('OK!');
  }

  async getListOfContainers(req, res) {
    const filter = req.query.filter as string[];
    const list = await this.containerService.getContainersList(filter);
    res.send(list);
  }

  async attachListenerToContainer(req, res) {
    const id = req.params.id;
    const container = await this.containerService.attachToContainer(id);
    res.send(container);
  }

  async detachListenerFromContainer(req, res) {
    const id = req.params.id;
    await this.containerService.detachFromContainer(id);
    res.send('OK!');
  }

  async getContainerBySource(req, res) {
    const id = req.params.id;
    const source = req.params.source;
    switch (source) {
      case 'storage': {
        const container = await this.containerService.getSavedContainer(id);
        if (container) return res.send(container);
        else break;
      }
      case 'docker': {
        const container = await this.containerService
          .inspectContainerByID(id)
          .catch(() => null);
        if (container) return res.send(container);
      }
    }
    return res
      .status(status.NOT_FOUND)
      .send(`Container not found in ${source}`);
  }
}
