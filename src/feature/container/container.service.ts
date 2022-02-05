import Docker, { ContainerInfo } from 'dockerode';
import { docker } from '@feature/docker/docker.service';
import Stream, { PassThrough } from 'stream';
import {
  addContainerStreamsToMap,
  attachEventListenerToStream,
  ContainerStreamTypes,
} from '@feature/container/container.utils';
import { addContainer, addLog } from '@feature/container/container.model';
import { Container } from '@prisma/client';

export const getContainerByID = (id: string): Docker.Container => {
  return docker.getContainer(id);
};

export const inspectContainerByID = (
  id: string,
): Promise<Docker.ContainerInspectInfo> => {
  return getContainerByID(id).inspect();
};

export const getContainerStatsByID = (
  _id: string,
): Promise<Docker.ContainerStats> => {
  // Dockerrode returns some mystery, but not an actual stats
  // inspect works fine though.
  /* getContainerByID(id)
    .stats({})
    .then(async (e) => e);
  return Promise.resolve({} as Docker.ContainerStats); */
  throw new Error('Deprecated');
};

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
export const checkContainerHealth = (
  id: string,
): Promise<ContainerHealthStatus> => {
  return getContainerByID(id)
    .inspect()
    .then((cinfo) => cinfo.State.Health);
};

export const getAllLogs = () => null;

export const getContainersList = async (
  filter?: string[],
): Promise<Partial<Docker.ContainerInfo>[]> => {
  const list: Partial<ContainerInfo>[] = await docker.listContainers();
  if (!filter) return list;
  return list.map((li) =>
    filter.reduce((a, c) => {
      if (li[c]) a[c] = li[c];
      return a;
    }, {}),
  );
};

export const passStreamsToContainer = async (
  id: string,
  stdOutStream: PassThrough,
  stdErrStream: PassThrough,
): Promise<NodeJS.ReadWriteStream> => {
  const container = getContainerByID(id);
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
};

export const addContainerToStorage = async (id: string): Promise<Container> => {
  const container = await inspectContainerByID(id);
  return addContainer({
    name: container.Name,
    internal_id: id,
    internal_pid: container.State.Pid.toString(),
  });
};

export const attachToContainer = async (id: string): Promise<Container> => {
  const stdOutStream = new Stream.PassThrough();
  const stdErrStream = new Stream.PassThrough();
  const saved = await addContainerToStorage(id);
  const logChunkOut = async (chunk: Buffer) => {
    await addLog(id, chunk, false);
  };
  const logChunkErr = async (chunk: Buffer) => {
    await addLog(id, chunk, false);
  };

  const stream = await passStreamsToContainer(id, stdOutStream, stdErrStream);
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
};
