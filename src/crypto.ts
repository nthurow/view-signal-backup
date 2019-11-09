import {TextDecoder, TextEncoder} from 'util';
import {createHash} from 'crypto';
const Hkdf = require('hkdf');

export async function deriveKeyFromPassword(password: string, salt: ArrayBuffer) {
  const textEncoder = new TextEncoder();
  const textDecoder = new TextDecoder();
  const normalizedPassword = password.trim().replace(/\s/g, '');
  let previousHash = `${salt}${normalizedPassword}`;

  for (let i = 0; i < 250000; i++) {
    const hash = createHash('sha512');
    const digestValue = await hash.update(textEncoder.encode(`${previousHash}${normalizedPassword}`));
    previousHash = textDecoder.decode(digestValue.digest());
  }

  return textEncoder.encode(previousHash).slice(0, 32);
}

export function deriveAesKeys(baseKey: Uint8Array, info: string): Promise<Buffer> {
  const hkdf = new Hkdf('sha256', '', baseKey);

  return new Promise((resolve) => {
    hkdf.derive(info, 64, (key: Buffer) => {
      resolve(key);
    });
  });
}
