import * as Stream from 'stream';
import { logger } from '@config/logger';

type ContainerID = string;
export enum ContainerStreamTypes {
  OUT = 'outStream',
  ERR = 'errStream',
  ATTACH = 'attachStream',
}
type ContainerStreams = {
  [ContainerStreamTypes.OUT]: Stream.PassThrough;
  [ContainerStreamTypes.ERR]: Stream.PassThrough;
  [ContainerStreamTypes.ATTACH]: NodeJS.ReadWriteStream;
};
type ContainersAttachStreamsMap = Record<ContainerID, ContainerStreams>;
export const containersAttachStreamsMap: ContainersAttachStreamsMap = {};

export const addContainerStreamsToMap = (
  containerId: ContainerID,
  outStream: Stream.PassThrough,
  errStream: Stream.PassThrough,
  attachStream: NodeJS.ReadWriteStream,
): void => {
  containersAttachStreamsMap[containerId] = {
    [ContainerStreamTypes.OUT]: outStream,
    [ContainerStreamTypes.ERR]: errStream,
    [ContainerStreamTypes.ATTACH]: attachStream,
  };
};

export const removeContainerFromStreamsMap = (
  containerId: ContainerID,
): void => {
  delete containersAttachStreamsMap[containerId];
};

export const getContainerStreams = (
  containerId: ContainerID,
): ContainerStreams | null => {
  return containersAttachStreamsMap[containerId] || null;
};

export const isAttached = (containerId: ContainerID): boolean => {
  return !!containersAttachStreamsMap[containerId];
};

export const detachEventListenerFromStream = (
  containerId: ContainerID,
  streamType: ContainerStreamTypes,
  eventType: string,
  callback?: () => void,
): void => {
  const streams = getContainerStreams(containerId);
  if (!isAttached(containerId) || !streams) return;
  const stream = streams[streamType];
  stream.removeAllListeners(eventType);
  logger.warn(
    `Detached event listener on '${eventType}' from ${streamType} of ${containerId}.`,
  );
  if (callback) callback();
};

export const attachEventListenerToStream = (
  containerId: ContainerID,
  streamType: ContainerStreamTypes,
  eventType: string,
  listener: (...args: any[]) => void,
  callback?: () => void, // TODO: pass success code
): void => {
  const streams = getContainerStreams(containerId);
  if (!isAttached(containerId) || !streams) return;
  const stream = streams[streamType];
  detachEventListenerFromStream(containerId, streamType, eventType, () => {
    logger.info(
      `Attached event listener on '${eventType}' from ${streamType} of ${containerId}.`,
    );
    stream.on(eventType, listener);
    if (callback) callback();
  });
};
