import { NextResponse } from 'next/server';
import {
  adminSessionMaxAge,
  createAdminSession,
  validateAdminCredentials,
} from '@/lib/admin-auth';

export async function POST(request: Request) {
  const formData = await request.formData();
  const username = String(formData.get('username') ?? '');
  const password = String(formData.get('password') ?? '');
  const origin = new URL(request.url).origin;

  if (!validateAdminCredentials(username, password)) {
    return NextResponse.redirect(new URL('/admin/login?error=1', origin), 303);
  }

  const response = NextResponse.redirect(new URL('/admin', origin), 303);
  response.cookies.set('admin_session', createAdminSession(), {
    httpOnly: true,
    maxAge: adminSessionMaxAge,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });
  return response;
}
