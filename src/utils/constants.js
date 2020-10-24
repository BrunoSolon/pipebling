import * as dotenv from 'dotenv';

dotenv.config();

export default class Constants {
  static port = process.env.PORT;

  static database = {
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  }

  static bling = {
    apikey: process.env.BLING_API_KEY,
    url: process.env.BLING_URL,
  }

  static pipedrive = {
    apikey: process.env.PIPEDRIVE_API_KEY,
    url: process.env.PIPEDRIVE_URL,
  }
}
