import { createClient } from '@libsql/client';
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.DATABASE_URL;
const authToken = process.env.DATABASE_AUTH_TOKEN;

if (!url) {
  process.exit(1);
}

const client = createClient({ url, authToken });

async function seed() {
  const result = await client.execute('SELECT COUNT(*) as count FROM Profile');
  const count = Number(result.rows[0].count);
  if (count === 0) {
    await client.execute(`
      INSERT INTO Profile (id, name, subtitle) 
      VALUES (1, 'Karthik', 'Welcome to my digital workspace. Explore my latest projects and research papers.')
    `);
    console.log('✅ Default profile row inserted!');
  } else {
    console.log('Profile row already exists.');
  }
}

seed().catch(console.error);
