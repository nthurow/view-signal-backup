import {readFileSync} from 'fs';
import {join} from 'path';
//import {createHmac} from 'crypto';

import {decodeBytesToFrame, nextFrameBytes} from './frame';
import {deriveKeyFromPassword, deriveAesKeys, decrypt} from './crypto';

const file = readFileSync(join(__dirname, '../../signal-2019-11-06-13-00-54.backup'));
const password = '773833201388556275077355922518';

let [backupFrameBytes, newOffset] = nextFrameBytes(file, 0);
const backupFrame = decodeBytesToFrame(backupFrameBytes);

console.log('Backup frame bytes begin: ', backupFrameBytes.slice(0, 10));
console.log('Backup frame bytes end: ', backupFrameBytes.slice(backupFrameBytes.length - 10, backupFrameBytes.length));

async function getBaseKey() {
  if (!backupFrame.header || !backupFrame.header.salt) {
    throw new Error('Salt value not found');
  }

  if (!backupFrame.header.iv) {
    throw new Error('IV value not found');
  }

  const baseKey = await deriveKeyFromPassword(password, backupFrame.header.salt);
  //const baseKey = await deriveKeyFromPassword('password');
  const derivedKey = await deriveAesKeys(baseKey, 'Backup Export');

  const cipherKey = derivedKey.slice(0, 32);

  console.log(
    'The base key is ',
    Buffer.from(baseKey).map((num, index) => Buffer.from(baseKey).readUInt8(index))
  );
  console.log('The derived key is', derivedKey);
  console.log('The cipher key is', cipherKey);

  //const macKey = derivedKey.slice(32);
  //const mac = createHmac('sha256', macKey);
  //const counter = Buffer.from(backupFrame.header.iv).readUInt32BE(0);
  let [nextFrame] = nextFrameBytes(file, newOffset);

  console.log('Next frame length: ', nextFrame.length);
  console.log('Next frame bytes begin: ', nextFrame.slice(0, 10));
  console.log('Next frame bytes end: ', nextFrame.slice(nextFrame.length - 10, nextFrame.length));

  decrypt(nextFrame.slice(0, nextFrame.length - 10), 0, cipherKey, backupFrame.header.iv, (decrypted) => {
    const decryptedFrame = decodeBytesToFrame(decrypted);
    console.log(decryptedFrame);
  });
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
