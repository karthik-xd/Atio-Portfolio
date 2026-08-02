import { createClient } from '@libsql/client';
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.DATABASE_URL;
const authToken = process.env.DATABASE_AUTH_TOKEN;

if (!url || url.startsWith('file:')) {
  console.error('Error: Please set DATABASE_URL (e.g. libsql://...) and DATABASE_AUTH_TOKEN');
  process.exit(1);
}

const client = createClient({ url, authToken });

const statements = [
  `CREATE TABLE IF NOT EXISTS "Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'PROJECT',
    "externalLink" TEXT,
    "mediaUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
  );`,
  `CREATE TABLE IF NOT EXISTS "Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT DEFAULT 1,
    "name" TEXT NOT NULL DEFAULT 'Creator',
    "subtitle" TEXT NOT NULL DEFAULT 'Welcome to my digital workspace. Explore my latest projects and research papers.',
    "photoUrl" TEXT,
    "linkedinUrl" TEXT,
    "githubUrl" TEXT,
    "twitterUrl" TEXT,
    "email" TEXT,
    "phoneNumber" TEXT,
    "resumeUrl" TEXT,
    "themeBgColor" TEXT,
    "themePrimaryColor" TEXT,
    "greetingColor" TEXT,
    "bgImageUrl" TEXT,
    "profileSize" INTEGER DEFAULT 250,
    "glowSpread" INTEGER DEFAULT 30,
    "glowOpacity" REAL DEFAULT 0.3,
    "themeSecondaryColor" TEXT,
    "themeAccentColor" TEXT,
    "ambientGlowSize" INTEGER DEFAULT 400,
    "ambientGlowOpacity" REAL DEFAULT 0.15,
    "ambientGlowColor" TEXT,
    "ringPadding" INTEGER DEFAULT 5,
    "photoContrast" REAL DEFAULT 1.0,
    "bgMediaOpacity" REAL DEFAULT 0.6,
    "bgOverlayOpacity" REAL DEFAULT 1.0,
    "heroPrimaryBtnBg" TEXT,
    "heroPrimaryBtnHover" TEXT,
    "heroPrimaryBtnText" TEXT,
    "heroSecondaryBtnBg" TEXT,
    "heroSecondaryBtnHover" TEXT,
    "heroSecondaryBtnText" TEXT,
    "filterBtnBg" TEXT,
    "filterBtnText" TEXT,
    "filterBtnHoverBg" TEXT,
    "filterBtnHoverText" TEXT,
    "socialIconBg" TEXT,
    "socialIconColor" TEXT,
    "socialIconHoverBg" TEXT,
    "socialIconHoverColor" TEXT
  );`,
  `CREATE TABLE IF NOT EXISTS "AcademicItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'EDUCATION',
    "link" TEXT,
    "authors" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
  );`
];

async function main() {
  console.log('Connecting to Turso database at:', url);
  for (const stmt of statements) {
    await client.execute(stmt);
  }
  console.log('✅ Successfully created all tables on your Turso database!');
}

main().catch((err) => {
  console.error('❌ Failed to push schema to Turso:', err);
  process.exit(1);
});
