import {copy} from '@do-while-for-each/fs';
import {extname, join} from 'path';

const BASE_DIR: Readonly<string> = process.cwd();
const SRC_DIR: Readonly<string> = join(BASE_DIR, 'src');
const DIST_DIR: Readonly<string> = join(BASE_DIR, 'dist/cjs');

copy(SRC_DIR, DIST_DIR, {
  allowedToCopyFilter: args => {
    switch (extname(args.iSrcFileName)) {
      case '.css':
      case '.png':
      case '.svg':
        return true;
    }
    return false;
  }
})
