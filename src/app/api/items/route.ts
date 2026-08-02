import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { ItemCategory } from '@/generated/prisma/client';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const category = formData.get('category') as ItemCategory;
    const externalLink = formData.get('externalLink') as string | null;
    
    // Only accept string URLs (uploaded via Vercel Blob client). Reject File/Blob objects.
    const mediaRaw = formData.get('media');
    let mediaUrl: string | null = null;
    if (typeof mediaRaw === 'string' && mediaRaw !== '' && mediaRaw !== 'undefined') {
      mediaUrl = mediaRaw;
    }
    
    const item = await prisma.item.create({
      data: {
        title,
        description,
        category,
        externalLink: externalLink || null,
        mediaUrl,
      },
    });
    
    return NextResponse.json(item);
  } catch (error) {
    console.error('Error creating item:', error);
    return NextResponse.json({ error: 'Failed to create item' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const items = await prisma.item.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch items' }, { status: 500 });
  }
}
