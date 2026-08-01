import "dotenv/config";
import { defineConfig } from "prisma/config";

const rawUrl = process.env.DATABASE_URL ?? "file:./dev.db";
// Convert libsql:// scheme to https:// so Prisma CLI validator accepts it
const url = rawUrl.startsWith("libsql://")
  ? rawUrl.replace("libsql://", "https://")
  : rawUrl;

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url,
  },
});
