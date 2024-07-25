import { randomBytes } from 'crypto';

export const generateRandomString = (length: number): string => {
  const buffer = randomBytes(Math.ceil(length / 2));
  return buffer.toString('hex').slice(0, length);
};
