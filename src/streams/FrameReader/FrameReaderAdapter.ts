export interface FrameReaderAdapter {
  readBytes(numToRead: number): Buffer | null;
}


