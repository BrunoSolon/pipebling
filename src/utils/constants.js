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
}
