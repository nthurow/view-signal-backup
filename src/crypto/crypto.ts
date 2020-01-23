import {/*TextDecoder,*/ TextEncoder} from 'util';
import {createHash, createDecipheriv} from 'crypto';
const Hkdf = require('hkdf');

const logLevel = process.env.LOG_LEVEL;

function log(...message: any[]) {
  if (logLevel === 'DEBUG') {
    console.log(...message);
  }
}

export async function deriveKeyFromPassword(password: string, salt?: Uint8Array) {
  const textEncoder = new TextEncoder();
  const normalizedPassword = textEncoder.encode(password.trim().replace(/\s/g, ''));
  let previousHash = normalizedPassword;

  let hash = createHash('sha512');

  if (salt) {
    hash.update(salt);
  }

  for (let i = 0; i < 250000; i++) {
    hash.update(previousHash);
    hash.update(normalizedPassword);
    previousHash = hash.digest();
    hash = createHash('sha512');
  }

  return previousHash.slice(0, 32);
}

export function deriveAesKeys(baseKey: Uint8Array, info: string): Promise<Buffer> {
  const hkdf = new Hkdf('sha256', '', baseKey);

  return new Promise((resolve) => {
    hkdf.derive(info, 64, (key: Buffer) => {
      resolve(key);
    });
  });
}

// TODO: Handle errors
export function decrypt(bytes: Buffer, cipherKey: Buffer, iv: Uint8Array, cb: (decrypted: Buffer) => void) {
  log('Decrypting Bytes Start:', bytes.slice(0, 10));
  log('Decrypting Bytes End:', bytes.slice(bytes.length - 10));
  log('IV:', iv);

  const decipher = createDecipheriv('AES-256-CTR', cipherKey, iv);
  let decryptedBytes = Buffer.alloc(0);

  decipher.on('readable', () => {
    let chunk;
    while (null !== (chunk = decipher.read())) {
      decryptedBytes = Buffer.concat([decryptedBytes, chunk]);
    }
  });

  decipher.on('end', () => {
    console.log('decrypted bytes:');
    console.log(decryptedBytes.toString('hex'));
    cb(decryptedBytes);
  });

  decipher.write(bytes);
  decipher.end();

  const ivInt = Buffer.from(iv).readUInt32BE(0) + 1;
  const newIv = Buffer.from(iv);

  const firstByte = ivInt >>> 24;
  const secondByte = (ivInt >>> 16) & 255;
  const thirdByte = (ivInt >>> 8) & 255;
  const fourthByte = ivInt & 255;

  newIv.writeUInt8(firstByte, 0);
  newIv.writeUInt8(secondByte, 1);
  newIv.writeUInt8(thirdByte, 2);
  newIv.writeUInt8(fourthByte, 3);

  log('New IV:', newIv);

  return newIv;
}
