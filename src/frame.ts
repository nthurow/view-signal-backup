import {signal} from './signal';

export function nextFrameBytes(file: Buffer, offset: number) {
  const frameLengthBuffer = file.slice(offset, offset + 4);
  const frameLength = frameLengthBuffer.readUIntBE(0, 4);
  const frame = file.slice(offset + 4, offset + 4 + frameLength);
  const newOffset = offset + 4 + frameLength;
  const isDone = newOffset >= +file.byteLength;

  return [frame, newOffset, isDone] as const;
}

export function decodeBytesToFrame(frameBytes: Buffer) {
  return signal.BackupFrame.decode(frameBytes);
}
