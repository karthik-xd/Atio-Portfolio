import { createHmac, timingSafeEqual } from 'node:crypto';

const sessionDurationSeconds = 60 * 60 * 8;

function secureEquals(value: string, expected: string) {
  const valueBuffer = Buffer.from(value);
  const expectedBuffer = Buffer.from(expected);

  return valueBuffer.length === expectedBuffer.length && timingSafeEqual(valueBuffer, expectedBuffer);
}

function sessionSecret() {
  return process.env.ADMIN_SESSION_SECRET ?? '';
}

function sign(value: string) {
  return createHmac('sha256', sessionSecret()).update(value).digest('base64url');
}

export function validateAdminCredentials(username: string, password: string) {
  const expectedUsername = process.env.ADMIN_USERNAME ?? '';
  const expectedPassword = process.env.ADMIN_PASSWORD ?? '';

  return Boolean(expectedUsername && expectedPassword) &&
    secureEquals(username, expectedUsername) &&
    secureEquals(password, expectedPassword);
}

export function createAdminSession() {
  const expiresAt = Math.floor(Date.now() / 1000) + sessionDurationSeconds;
  const value = String(expiresAt);
  return `${value}.${sign(value)}`;
}

export function isValidAdminSession(session: string | undefined) {
  if (!session || !sessionSecret()) return false;

  const [expiresAt, signature] = session.split('.');
  if (!expiresAt || !signature || Number(expiresAt) < Math.floor(Date.now() / 1000)) return false;

  return secureEquals(signature, sign(expiresAt));
}

export const adminSessionMaxAge = sessionDurationSeconds;
