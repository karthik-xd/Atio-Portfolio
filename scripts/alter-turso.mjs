import { createClient } from '@libsql/client';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.production' });

const url = process.env.DATABASE_URL;
const authToken = process.env.DATABASE_AUTH_TOKEN;

const client = createClient({ url, authToken });

async function main() {
  try {
    await client.execute('ALTER TABLE Profile ADD COLUMN phoneNumber TEXT');
    console.log('Added phoneNumber');
  } catch (e) {
    console.log('Ignored:', e.message);
  }
}
main();
