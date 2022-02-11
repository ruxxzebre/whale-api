import { ContainerController } from './container.controller';
import { ContainerService } from '@module/container/container.service';
import { DockerService } from '@module/docker/docker.service';
import { dockerOptions } from '@config/docker';
import Joi from 'joi';
import { createContainer } from '@module/ioc';

const iocContainer = createContainer();

describe('Container Suite', () => {
  it('Should pass', () => {
    expect(0).toBeFalsy();
  });
  /* describe('Container Model', () => {
    let ContainerModel: IContainerModel;

    beforeEach(() => {
      ContainerModel = iocContainer.get('ContainerModel');
    });
  });
   */
  // describe('Container Service', () => {});
  describe('Container Controller', () => {
    const existingFilterKeys = ['Id', 'Image', 'ImageID'];
    const nonExistingFilterKeys = [
      'bark bark bark',
      'let me inject some service',
    ];
    const containerArrayWithExistingFilterKeysSchema = Joi.array().items(
      Joi.object({
        ...existingFilterKeys.reduce((a, c) => {
          a[c] = Joi.string();
          return a;
        }, {}),
      }),
    );

    let controller: ContainerController;

    beforeEach(() => {
      controller = new ContainerController(
        new ContainerService(
          iocContainer.get('ContainerModel'),
          new DockerService(dockerOptions),
        ),
      );
    });

    it('Should return list of containers with empty filter', () => {
      controller.getListOfContainers().then((containers) => {
        expect(Array.isArray(containers)).toBeTruthy();
      });
    });

    it('Should return list of containers with provided filter with existing keys', () => {
      controller.getListOfContainers(existingFilterKeys).then((containers) => {
        expect(containers).toMatchSchema(
          containerArrayWithExistingFilterKeysSchema,
        );
      });
    });

    it('Should return list of empty objects due to provided filter with non existing keys', () => {
      controller
        .getListOfContainers(nonExistingFilterKeys)
        .then((containers) => {
          expect(containers.filter((c) => !!Object.keys(c)).length).toBe(0);
        });
    });
  });
  /* describe('Container Utilities', () => {
    it('Should add streams to a map', () => {

    });
  });
   */
});
