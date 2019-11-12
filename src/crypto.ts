import {/*TextDecoder,*/ TextEncoder} from 'util';
import {createHash, createDecipheriv} from 'crypto';
const Hkdf = require('hkdf');

export async function deriveKeyFromPassword(password: string, salt?: Uint8Array) {
  const textEncoder = new TextEncoder();
  //const textDecoder = new TextDecoder();
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

export function decrypt(
  bytes: Buffer,
  counter: number,
  cipherKey: Buffer,
  iv: Uint8Array,
  cb: (decrypted: Buffer) => void
) {
  const decipher = createDecipheriv('AES-256-CTR', cipherKey, iv);
  //let decrypted = '';
  let decryptedBytes = Buffer.alloc(0);

  decipher.on('readable', () => {
    let chunk;
    while (null !== (chunk = decipher.read())) {
      //decrypted += chunk.toString('utf8');
      decryptedBytes = Buffer.concat([decryptedBytes, chunk]);
    }
  });
  decipher.on('end', () => {
    //console.log(decrypted);
    cb(decryptedBytes);
    // Prints: e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa
  });

  decipher.write(bytes);
  decipher.end();
}
