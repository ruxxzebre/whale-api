import tsConfig from '../../tsconfig.json';

/**
 * Returns map for module-alias.
 * created for tsconfig.json to be a single source of truth.
 */
export const getPathAliases = (sourcePath: string): Record<string, string> => {
  if (!tsConfig.compilerOptions.paths) {
    throw new Error('No paths provided in tsconfig.json');
  }
  const { paths } = tsConfig.compilerOptions;
  delete paths['@tests/*'];
  return Object.keys(paths).reduce((a, k) => {
    a[k.split('/')[0]] = paths[k][0]
      .replace('src', sourcePath)
      .replace('/*', '');
    return a;
  }, {});
};
