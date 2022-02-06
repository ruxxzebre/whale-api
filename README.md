# Whale API

[![TypeScript version][ts-badge]][typescript-4-3]
[![Node.js version][nodejs-badge]][nodejs]

## Getting Started

This project is intended to be used with the latest Active LTS release of [Node.js][nodejs].
```Also be sure to check REQUIREMENTS.md```

Steps needed for running this project:
1. ```npm i``` or ```yarn``` (if using yarn, be sure to run ```yarn postinstall```,
   because yarn has troubles with postinstall hooks)
2. ```yarn dev``` to run the API
3. Explore routers in feature/logs and feature/container  
Try ```localhost:6060/container/list``` to list all containers
```localhost:6060/container/attach/:id``` to attach log listener to certain container
```localhost:6060/logs/:id``` to retrieve logs from storage

## Available Scripts

- `start` - using nodemon to watch changes
- `clean` - remove coverage data, Jest cache and transpiled files,
- `prebuild` - lint source files and tests before building,
- `build` - transpile TypeScript based on configuration in tsconfig.build.json,
- `build:watch` - interactive watch mode to automatically transpile source files,
- `lint` - lint source files and tests,
- `test` - run tests

[ts-badge]: https://img.shields.io/badge/TypeScript-4.3-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2014.16-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v14.x/docs/api/
[typescript]: https://www.typescriptlang.org/
[typescript-4-3]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-3.html
[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[prettier]: https://prettier.io
[repo-template-action]: https://github.com/Maithanhdanh/express-typescript-biolerplate.git
