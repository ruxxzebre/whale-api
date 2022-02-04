import Docker, { ContainerInfo } from 'dockerode';
import { docker } from '@feature/docker/docker.service';

export const getContainerByID = (id: string): Docker.Container => {
  return docker.getContainer(id);
};

export const inspectContainerByID = (
  id: string,
): Promise<Docker.ContainerInspectInfo> => {
  return getContainerByID(id).inspect();
};

export const getContainerStatsByID = (
  id: string,
): Promise<Docker.ContainerStats> => {
  return getContainerByID(id).stats();
};

export const getContainersList = async (
  filter?: string[],
): Promise<Partial<Docker.ContainerInfo>[]> => {
  const list: Partial<ContainerInfo>[] = await docker.listContainers();
  if (!filter) return list;
  return list.map((li) => {
    return filter.reduce((a, c) => {
      if (li[c]) a[c] = li[c];
      return a;
    }, {});
  });
};
