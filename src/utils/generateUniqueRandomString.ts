import config from '../app/config/config';

export function generateUniqueRandomString(length: number = 8): string {
  const characters = config.characters as string;
  let uniqueString = '';

  for (let i = 0; i < length; i++) {
    uniqueString += characters.charAt(
      Math.floor(Math.random() * characters.length),
    );
  }

  return uniqueString;
}
