import { MongoClient } from 'mongodb';

let cachedClient = null;
let cachedDb = null;

export const connect = async () => {
  if (cachedClient && cachedDb) return { client: cachedClient, db: cachedDb };

  const client = await MongoClient.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await client.db(process.env.DATABASE_NAME);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
};
