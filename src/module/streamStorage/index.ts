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

export class DockerStreamStorage {
  private storage: ContainersAttachStreamsMap = {};

  addContainerStreamsToMap = (
    containerId: ContainerID,
    outStream: Stream.PassThrough,
    errStream: Stream.PassThrough,
    attachStream: NodeJS.ReadWriteStream,
  ): void => {
    this.storage[containerId] = {
      [ContainerStreamTypes.OUT]: outStream,
      [ContainerStreamTypes.ERR]: errStream,
      [ContainerStreamTypes.ATTACH]: attachStream,
    };
  };

  removeContainerFromStreamsMap = (containerId: ContainerID): void => {
    delete this.storage[containerId];
  };

  getContainerStreams = (containerId: ContainerID): ContainerStreams | null => {
    return this.storage[containerId] || null;
  };

  isAttached = (containerId: ContainerID): boolean => {
    return !!this.getContainerStreams(containerId);
  };

  detachEventListenerFromStream = (
    containerId: ContainerID,
    streamType: ContainerStreamTypes,
    eventType: string,
    callback?: () => void,
  ): void => {
    const streams = this.getContainerStreams(containerId);
    if (!this.isAttached(containerId) || !streams) return;
    const stream = streams[streamType];
    stream.removeAllListeners(eventType);
    logger.warn(
      `Detached event listener on '${eventType}' from ${streamType} of ${containerId}.`,
    );
    if (callback) callback();
  };

  attachEventListenerToStream = (
    containerId: ContainerID,
    streamType: ContainerStreamTypes,
    eventType: string,
    listener: (...args: any[]) => void,
    callback?: () => void, // TODO: pass success code
  ): void => {
    const streams = this.getContainerStreams(containerId);
    if (!this.isAttached(containerId) || !streams) return;
    const stream = streams[streamType];
    this.detachEventListenerFromStream(
      containerId,
      streamType,
      eventType,
      () => {
        logger.info(
          `Attached event listener on '${eventType}' from ${streamType} of ${containerId}.`,
        );
        stream.on(eventType, listener);
        if (callback) callback();
      },
    );
  };
}
