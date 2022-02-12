import 'reflect-metadata';
// import { matchers } from 'jest-joi';
//
// expect.extend(matchers);

process.env = {
  ...process.env,
  HOST: 'localhost',
  PORT: '5000',
};
