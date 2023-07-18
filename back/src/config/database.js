import pgPromise from 'pg-promise';
import config from './config.js';

const configDb = config.database;

const dbConfig = {
  user: configDb.user,
  password: configDb.password,
  host: configDb.host,
  port: configDb.port,
  database: configDb.database
};

const pgp = pgPromise();
const db = pgp(dbConfig);

export default db;
