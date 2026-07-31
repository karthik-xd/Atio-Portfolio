import Link from 'next/link';

type LoginPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const { error } = await searchParams;

  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '1.5rem' }}>
      <form action="/api/admin/login" method="post" style={{ width: '100%', maxWidth: 360, display: 'grid', gap: '1rem' }}>
        <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>← Back to portfolio</Link>
        <h1 style={{ margin: 0 }}>Admin sign in</h1>
        <p style={{ margin: 0, opacity: 0.75 }}>Only the portfolio owner can access this area.</p>
        {error === '1' && <p role="alert" style={{ margin: 0, color: '#ff6b6b' }}>Incorrect username or password.</p>}
        <label>
          Username
          <input name="username" autoComplete="username" required style={{ display: 'block', width: '100%', marginTop: '0.4rem', padding: '0.75rem' }} />
        </label>
        <label>
          Password
          <input name="password" type="password" autoComplete="current-password" required style={{ display: 'block', width: '100%', marginTop: '0.4rem', padding: '0.75rem' }} />
        </label>
        <button type="submit" style={{ padding: '0.75rem', cursor: 'pointer' }}>Sign in</button>
      </form>
    </main>
  );
}
