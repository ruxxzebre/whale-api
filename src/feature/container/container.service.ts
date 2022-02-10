import Docker, { ContainerInfo } from 'dockerode';
import Stream, { PassThrough } from 'stream';
import {
  addContainerStreamsToMap,
  attachEventListenerToStream,
  ContainerStreamTypes,
  detachEventListenerFromStream,
  removeContainerFromStreamsMap,
} from '@feature/container/container.utils';
import { Container } from '@prisma/client';
import { addLog } from '@feature/log/logs.model';
import { inject, injectable } from 'inversify';
import { IContainerModel } from '@feature/container/container.model';
import { DockerService } from '@feature/docker/docker.service';

type ContainerHealthStatus =
  | {
      Status: string;
      FailingStreak: number;
      Log: Array<{
        Start: string;
        End: string;
        ExitCode: number;
        Output: string;
      }>;
    }
  | undefined;

export interface IContainerService {
  getContainerByID(id: string): Docker.Container;
  inspectContainerByID(id: string): Promise<Docker.ContainerInspectInfo>;
  getContainerStatsByID(id: string): Promise<Docker.ContainerStats>;
  checkContainerHealth(id: string): Promise<ContainerHealthStatus>;
  getContainersList(
    filter?: string[],
  ): Promise<Partial<Docker.ContainerInfo>[]>;
  passStreamsToContainer(
    id: string,
    stdOutStream: PassThrough,
    stdErrStream: PassThrough,
  ): Promise<NodeJS.ReadWriteStream>;
  getSavedContainer(id): Promise<Container>;
  addContainerToStorage(id: string): Promise<Container>;
  detachFromContainer(id: string): Promise<null>;
  attachToContainer(id: string): Promise<Container>;
  removeContainerByID(id: string): Promise<Container>;
}

@injectable()
export class ContainerService implements IContainerService {
  constructor(
    @inject('ContainerModel')
    private containerModel: IContainerModel,
    @inject('DockerService')
    private dockerService: DockerService,
  ) {}

  getContainerByID(id: string): Docker.Container {
    return this.dockerService.getContainer(id);
  }

  removeContainerByID(id: string): Promise<any> {
    return this.containerModel.removeContainer(id);
  }

  inspectContainerByID(id: string): Promise<Docker.ContainerInspectInfo> {
    return this.getContainerByID(id).inspect();
  }

  getContainerStatsByID(_id: string): Promise<Docker.ContainerStats> {
    // Dockerrode returns some mystery, but not an actual stats
    // inspect works fine though.
    /* getContainerByID(id)
      .stats({})
      .then(async (e) => e);
    return Promise.resolve({} as Docker.ContainerStats); */
    throw new Error('Deprecated');
  }

  async checkContainerHealth(id: string): Promise<any> {
    return this.getContainerByID(id)
      .inspect()
      .then((cinfo) => {
        return cinfo.State.Status;
      });
  }

  async getContainersList(
    filter?: string[],
  ): Promise<Partial<Docker.ContainerInfo>[]> {
    const list: Partial<ContainerInfo>[] =
      await this.dockerService.listContainers();
    if (!filter) return list;
    return list.map((li) =>
      filter.reduce((a, c) => {
        if (li[c]) a[c] = li[c];
        return a;
      }, {}),
    );
  }

  async passStreamsToContainer(
    id: string,
    stdOutStream: PassThrough,
    stdErrStream: PassThrough,
  ): Promise<NodeJS.ReadWriteStream> {
    const container = this.getContainerByID(id);
    const stream = await container.attach({
      stream: true,
      stdout: true,
      stderr: true,
    });
    container.modem.demuxStream(stream, stdOutStream, stdErrStream);
    stream.on('end', () => {
      stdOutStream.end('!stop!');
      stdErrStream.end('!stop!');
    });
    return stream;
  }

  async getSavedContainer(id): Promise<Container> {
    return this.containerModel.getContainer(id);
  }

  async addContainerToStorage(id: string): Promise<Container> {
    const container = await this.inspectContainerByID(id);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.containerModel.addContainer({
      name: container.Name,
      internal_id: id,
      internal_pid: container.State.Pid.toString(),
    });
  }

  async attachToContainer(id: string): Promise<Container> {
    const stdOutStream = new Stream.PassThrough();
    const stdErrStream = new Stream.PassThrough();
    const saved = await this.addContainerToStorage(id);
    const logChunkOut = async (chunk: Buffer) => {
      await addLog(id, chunk, false);
    };
    const logChunkErr = async (chunk: Buffer) => {
      await addLog(id, chunk, false);
    };

    const stream = await this.passStreamsToContainer(
      id,
      stdOutStream,
      stdErrStream,
    );
    addContainerStreamsToMap(id, stdOutStream, stdErrStream, stream);
    attachEventListenerToStream(
      id,
      ContainerStreamTypes.OUT,
      'data',
      logChunkOut,
    );
    attachEventListenerToStream(
      id,
      ContainerStreamTypes.ERR,
      'data',
      logChunkErr,
    );
    return saved;
  }

  async detachFromContainer(id: string): Promise<null> {
    detachEventListenerFromStream(id, ContainerStreamTypes.OUT, 'data');
    detachEventListenerFromStream(id, ContainerStreamTypes.ERR, 'data');
    removeContainerFromStreamsMap(id);
    return null;
  }
}
