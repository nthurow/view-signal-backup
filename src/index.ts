import {readFileSync} from 'fs';
import {join} from 'path';

import {decodeBytesToFrame, nextFrameBytes} from './frame';
import {deriveKeyFromPassword, deriveAesKeys} from './crypto';

const file = readFileSync(join(__dirname, '../../signal-2019-11-06-13-00-54.backup'));
const password = '';

let [backupFrameBytes] = nextFrameBytes(file, 0);
const backupFrame = decodeBytesToFrame(backupFrameBytes);

async function getBaseKey() {
  if (!backupFrame.header || !backupFrame.header.salt) {
    throw new Error('Salt value not found');
  }

  const baseKey = await deriveKeyFromPassword(password, backupFrame.header.salt);
  const derivedKey = await deriveAesKeys(baseKey, 'Backup Export');

  const cipherKey = derivedKey.slice(0, 32);
  const macKey = derivedKey.slice(32);

  console.log('The base key is ', baseKey);
  console.log('The derived key is', derivedKey);
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
