import Docker from 'dockerode';

export const createDockerInstance = (): Docker =>
  new Docker({
    // protocol: "http",
    // host: "localhost",
    // port: 3000,
    socketPath: '/var/run/docker.sock',
  });
