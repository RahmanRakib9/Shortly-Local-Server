/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

export function generateUniqueRandomString(length: number = 8): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let uniqueString = '';

  for (let i = 0; i < length; i++) {
    uniqueString += characters.charAt(
      Math.floor(Math.random() * characters.length),
    );
  }

  return uniqueString;
}
