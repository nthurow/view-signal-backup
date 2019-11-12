import {readFileSync} from 'fs';
import {join} from 'path';
//import {createHmac} from 'crypto';

import {decodeBytesToFrame, nextFrameBytes} from './frame';
import {deriveKeyFromPassword, deriveAesKeys, decrypt} from './crypto';

const file = readFileSync(join(__dirname, '../../signal-2019-11-06-13-00-54.backup'));
//const password = '773833201388556275077355922518';

let [backupFrameBytes, newOffset] = nextFrameBytes(file, 0);
const backupFrame = decodeBytesToFrame(backupFrameBytes);

async function getBaseKey() {
  if (!backupFrame.header || !backupFrame.header.salt) {
    throw new Error('Salt value not found');
  }

  if (!backupFrame.header.iv) {
    throw new Error('IV value not found');
  }

  //const baseKey = await deriveKeyFromPassword(password, backupFrame.header.salt);
  const baseKey = await deriveKeyFromPassword('password');
  const derivedKey = await deriveAesKeys(baseKey, 'Backup Export');

  const cipherKey = derivedKey.slice(0, 32);
  //const macKey = derivedKey.slice(32);
  //const mac = createHmac('sha256', macKey);
  //const counter = Buffer.from(backupFrame.header.iv).readUInt32BE(0);
  let [nextFrame] = nextFrameBytes(file, newOffset);

  decrypt(nextFrame.slice(0, nextFrame.length - 10), 0, cipherKey, backupFrame.header.iv, (decrypted) => {
    //const decryptedFrame = decodeBytesToFrame(decrypted);
    //console.log(decryptedFrame);
  });

  console.log('The base key is ', Buffer.from(baseKey).map((num, index) => Buffer.from(baseKey).readUInt8(index)));
  //console.log('The derived key is', derivedKey);
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
