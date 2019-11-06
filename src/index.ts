import {readFileSync} from 'fs';
import {join} from 'path';

import {signal} from './signal';

const file = readFileSync(join(__dirname, '../signal-2019-11-06-10-36-45.backup'));

const backupFrame = signal.BackupFrame.fromObject(file);

if (backupFrame) {
  if (backupFrame.header) {
    console.log(backupFrame.header.iv);
  } else {
    console.log('No header found');
  }
} else {
  console.log('Invalid data');
}
