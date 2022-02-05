import Docker, { ContainerInfo } from 'dockerode';
import { docker } from '@feature/docker/docker.service';
import Stream from 'stream';

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

export const attachToContainer = async (id: string): Promise<void> => {
  const stdOutStream = new Stream.PassThrough();
  const stdErrStream = new Stream.PassThrough();
  const logChunk = (chunk: Buffer) => {
    console.log(chunk.toString('utf8'));
  };
  stdOutStream.on('data', logChunk);
  stdErrStream.on('data', logChunk);
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
};
