import {signal} from './signal';

export function nextFrame(file: Buffer, offset: number) {
  const frameLengthBuffer = file.slice(offset, offset + 4);
  const frameLength = frameLengthBuffer.readUIntBE(0, 4);
  const frame = file.slice(offset + 4, offset + 4 + frameLength);
  const newOffset = offset + 4 + frameLength + 1;
  const isDone = newOffset >= +file.byteLength;

  return [signal.BackupFrame.decode(frame), newOffset, isDone] as const;
}
