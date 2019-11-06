import {readFileSync} from 'fs';
import {join} from 'path';

import {signal} from './signal';

const file = readFileSync(join(__dirname, '../../signal-2019-11-06-13-00-54.backup'));
const headerLengthBytes = file.slice(0, 4);
const headerLength = headerLengthBytes.readUIntBE(0, 4);
const headerFrame = file.slice(4, 4 + headerLength);

const backupFrame = signal.BackupFrame.decode(headerFrame);

if (backupFrame) {
  if (backupFrame.header) {
    console.log('IV value: ', backupFrame.header.iv);
  } else {
    console.log('No header found');
  }
} else {
  console.log('Invalid data');
}
