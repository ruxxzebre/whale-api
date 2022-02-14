import * as Stream from 'stream';
import { logger } from '@config/logger';
import { injectable } from 'inversify';

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

@injectable()
export class DockerStreamStorage {
  private static instance: DockerStreamStorage;
  private static storage: ContainersAttachStreamsMap = {};

  static getInstance(): DockerStreamStorage {
    if (!DockerStreamStorage.instance) {
      DockerStreamStorage.instance = new DockerStreamStorage();
    }
    return DockerStreamStorage.instance;
  }

  addContainerStreamsToMap = (
    containerId: ContainerID,
    outStream: Stream.PassThrough,
    errStream: Stream.PassThrough,
    attachStream: NodeJS.ReadWriteStream,
  ): void => {
    DockerStreamStorage.storage[containerId] = {
      [ContainerStreamTypes.OUT]: outStream,
      [ContainerStreamTypes.ERR]: errStream,
      [ContainerStreamTypes.ATTACH]: attachStream,
    };
  };

  removeContainerFromStreamsMap = (containerId: ContainerID): void => {
    delete DockerStreamStorage.storage[containerId];
  };

  getContainerStreams = (containerId: ContainerID): ContainerStreams | null => {
    return DockerStreamStorage.storage[containerId] || null;
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
