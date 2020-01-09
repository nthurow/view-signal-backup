import {createReadStream} from 'fs';
import {Readable} from 'stream';

import {FrameReaderAdapter} from '../FrameReader';

export class FileStreamAdapter implements FrameReaderAdapter {
  fileStream: Readable;

  constructor(pathToFile: string) {
    this.fileStream = createReadStream(pathToFile);
    this.fileStream.resume();
  }

  readBytes(numBytesToRead: number) {
    return this.fileStream.read(numBytesToRead);
  }
}
