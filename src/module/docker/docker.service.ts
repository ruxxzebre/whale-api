import Docker, { DockerOptions } from 'dockerode';
import { inject, injectable } from 'inversify';

@injectable()
export class DockerService extends Docker {
  constructor(@inject('DockerOptions') dockerOptions: DockerOptions) {
    super(dockerOptions);
  }
}

export interface IDockerConstructor {
  new (opts: Docker.DockerOptions): DockerService;
}
