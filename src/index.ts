import {readFileSync} from 'fs';
import {join} from 'path';

import {nextFrame} from './frame';
import {deriveKeyFromPassword} from './crypto';

const file = readFileSync(join(__dirname, '../../signal-2019-11-06-13-00-54.backup'));
const password = '';

let [backupFrame] = nextFrame(file, 0);

async function getBaseKey() {
  if (!backupFrame.header || !backupFrame.header.salt) {
    throw new Error('Salt value not found');
  }

  const baseKey = await deriveKeyFromPassword(password, backupFrame.header.salt);

  console.log('The base key is ', baseKey);
}

getBaseKey();

/*

if (backupFrame) {
  if (backupFrame.header) {
    console.log('IV value: ', backupFrame.header.iv);
  } else {
    console.log('No header found');
  }
} else {
  console.log('Invalid data');
}
*/
