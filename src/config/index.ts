import 'reflect-metadata';
import * as moduleAlias from 'module-alias';
import { getPathAliases } from '@utils/paths';
const sourcePath = process.env.NODE_ENV === 'development' ? 'src' : 'build';
moduleAlias.addAliases(getPathAliases(sourcePath));
