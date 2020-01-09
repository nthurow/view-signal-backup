import {join} from 'path';

import {signal} from './signal';
import {deriveKeyFromPassword, deriveAesKeys, decrypt} from './crypto';
import {FileStreamAdapter, FrameReader} from './streams';

const backupFileStreamAdapter = new FileStreamAdapter(join(__dirname, '../../signal-2019-11-06-13-00-54.backup'));
const frameReader = new FrameReader(backupFileStreamAdapter);

async function main() {
  const password = '773833201388556275077355922518';

  const backupFrameBytes = frameReader.next();

  if (!backupFrameBytes) {
    throw new Error('No backup frame found');
  }

  const backupFrame = signal.BackupFrame.decode(backupFrameBytes);

  if (!backupFrame.header || !backupFrame.header.salt) {
    throw new Error('Salt value not found');
  }

  if (!backupFrame.header.iv) {
    throw new Error('IV value not found');
  }

  const baseKey = await deriveKeyFromPassword(password, backupFrame.header.salt);
  const derivedKey = await deriveAesKeys(baseKey, 'Backup Export');
  const cipherKey = derivedKey.slice(0, 32);

  const nextFrame = frameReader.next();

  if (!nextFrame) {
    throw new Error('Next frame not found');
  }

  decrypt(nextFrame.slice(0, nextFrame.length - 10), 0, cipherKey, backupFrame.header.iv, (decrypted) => {
    const decryptedFrame = signal.BackupFrame.decode(decrypted);
    console.log(decryptedFrame);
  });
}

backupFileStreamAdapter.fileStream.once('readable', () => {
  main();
});
