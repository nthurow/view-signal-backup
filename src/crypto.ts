import {TextDecoder, TextEncoder} from 'util';
import {createHash} from 'crypto';

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

export function deriveAesKeys(baseKey: Buffer, info: string) {}
