import {FrameReaderAdapter} from './FrameReaderAdapter';

export class FrameReader {
  constructor(private stream: FrameReaderAdapter) {}

  next() {
    const nextFrameLengthBuffer = this.stream.readBytes(4);

    if (!nextFrameLengthBuffer) {
      return null;
    }

    const frameLength = nextFrameLengthBuffer.readUIntBE(0, 4);

    return this.stream.readBytes(frameLength);
  }
}
