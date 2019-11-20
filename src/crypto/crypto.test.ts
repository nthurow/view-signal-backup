import {deriveKeyFromPassword} from './crypto';

describe('deriveKeyFromPassword', () => {
  it('should derive the key from the password', async () => {
    const expectedResult = 'c996f5b52d80d5053af9d1f6fded9c2f227f9000408637c4450ba15442b3e8a9';
    const actualResult = await deriveKeyFromPassword('password');

    expect(Buffer.from(actualResult).toString('hex')).toEqual(expectedResult);
  });

  it('should derive the key from the password and salt', async () => {
    const expectedResult = '648c165f7981d0505ddf3b6c79bc5437b61edccfcef7077e08ebaf6d3c82e538';
    const salt = Uint8Array.from([0, 1, 2, 3]);
    const saltAsHex = Buffer.from(salt).toString('hex');
    const actualResult = await deriveKeyFromPassword('password', salt);

    expect(Buffer.from(actualResult).toString('hex')).toEqual(expectedResult);
  });
});
