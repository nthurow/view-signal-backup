import {deriveKeyFromPassword, deriveAesKeys, decrypt} from './crypto';

describe('deriveKeyFromPassword', () => {
  it('should derive the key from the password', async () => {
    const expectedResult = 'c996f5b52d80d5053af9d1f6fded9c2f227f9000408637c4450ba15442b3e8a9';
    const actualResult = await deriveKeyFromPassword('password');

    expect(Buffer.from(actualResult).toString('hex')).toEqual(expectedResult);
  });

  it('should derive the key from the password and salt', async () => {
    const expectedResult = '648c165f7981d0505ddf3b6c79bc5437b61edccfcef7077e08ebaf6d3c82e538';
    const salt = Uint8Array.from([0, 1, 2, 3]);
    const actualResult = await deriveKeyFromPassword('password', salt);

    expect(Buffer.from(actualResult).toString('hex')).toEqual(expectedResult);
  });
});

describe('deriveAesKeys', () => {
  it('should derive the AES keys', async () => {
    const inputKey = Buffer.from('648c165f7981d0505ddf3b6c79bc5437b61edccfcef7077e08ebaf6d3c82e538', 'hex');
    const expectedResult =
      '44fc12038815ea4842285567353dc78574a161301af6918e04b3f2fe155a138a4412ded40b40145fdd2d31e8a5149cefefe672196666905f50b2c00472473b5b';

    const actualResult = await deriveAesKeys(inputKey, 'Backup Export');

    expect(actualResult.toString('hex')).toEqual(expectedResult);
  });
});

describe('decrypt', () => {
  it('should decrypt the bytes and return a new IV', (done) => {
    const cipherKey = Buffer.from('4436a6134b758258a3099bb0c83ba490524993d3fe15b324307552bd2c7eacd9', 'hex');
    const inputIv = Buffer.from('a176653d37cf20f73aed10a68ea750c4', 'hex');
    const inputBytes = Buffer.from(
      'dca96a85c4c13397c7e8dee64aab467b081a20ea44ed3e1043bfffb892629f81dfb79e71ba07c7acb47dd1860865e507091216fbbb18f3a4c7fa477c3f98371b9c0f507f46fd4da2f22e58ed19cc633023fa48205bdca755506df56c9e032936974aeaae201b5abc291a2fd1a41618c00f7ad132d13f5eaac23ed9d13478e4547c69e85f9c37f411e8be61871f0d7ec965f360e5eb4e11ee8c1e4307dc754d308b7b3fc4b025184acebe8bf9d84b845a0efe23e74038294d2bfd26541fc240a9b56ef8bd3c16dc19a2ca739542d5bf29732d4c62e812f10bed46d09c24c95432bb885fa63301f77e39f093d5e6cf9b8122324705345b1a3a18c4a83ba6e5889dd93d98826337bb5525cc5810f021270a29fa42cc4260c8e57cae33a944eed3a9b84d1103bd73499040589fe52d5c3ab21de36d6088e5f344',
      'hex'
    );

    const expectedDecryptedBytes = Buffer.from(
      '12b5020a46494e5345525420494e544f20736d732056414c55455320283f2c3f2c3f2c3f2c3f2c3f2c3f2c3f2c3f2c3f2c3f2c3f2c3f2c3f2c3f2c3f2c3f2c3f2c3f2c3f2c3f2c3f2c3f29120310b10112021001120e0a0c2b31393230363135373232321202100112022801120710d9f9c6aded2c120710ddf4c6aded2c120410e9f40112021001120b10ffffffffffffffffff011205109480800512021001120210001202280112620a604d616e21204974277320746f6f206261642077652063616e277420736c65657020766572792077656c6c2c206576656e207768656e207765206861766520736c656570207765206e65656420746f206361746368207570206f6e2120f09f98b01202280112050a0347434d120b10ffffffffffffffffff011202100012021000120210001202100012021000',
      'hex'
    );
    const expectedNewIv = Buffer.from('a176653e37cf20f73aed10a68ea750c4', 'hex');

    const actualNewIv = decrypt(inputBytes, cipherKey, inputIv, (actualDecryptedBytes) => {
      expect(actualNewIv.toString('hex')).toEqual(expectedNewIv.toString('hex'));
      expect(actualDecryptedBytes.toString('hex')).toEqual(expectedDecryptedBytes.toString('hex'));
      done();
    });
  });
});
