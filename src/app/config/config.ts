import path from 'path';
import dotenv from 'dotenv';

// join cwd and .env file
const envPath = path.join(process.cwd(), '.env');

// Load environment variables from the .env file
dotenv.config({ path: envPath });

// now we can access our environment variables from this file and to access those variables from anywhere in our application we have to export that variables from here

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  jwt_access_token_secret_key: process.env.JWT_ACCESS_TOKEN_SECRET_KEY,
  jwt_refresh_token_secret_key: process.env.JWT_REFRESH_TOKEN_SECRET_KEY,
  characters: process.env.CHARACTERS,
  bcrypt_salt_round: process.env.BCRYPT_SALT_ROUND,
};
