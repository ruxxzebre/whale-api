import Docker from 'dockerode';
import supertest from 'supertest';
import { createServer } from '@config/express';

describe('Docker connectivity', () => {
  let dockerInstance: Docker;

  it('Should connect to Docker and perform simple request', () => {
    dockerInstance = new Docker();
    return dockerInstance.listContainers().then((data) => {
      expect(Array.isArray(data)).toBeTruthy();
    });
  });
});

describe('Container Router', () => {
  const app = createServer();

  it('should pass', (done) => {
    supertest(app).get('/health').expect('UP', done);
  });
});
