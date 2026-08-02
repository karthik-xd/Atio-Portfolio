import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    // Accept any category string (freeform: Project, Hackathon, Research Paper, etc.)
    const category = (formData.get('category') as string)?.trim() || 'Project';
    const externalLink = formData.get('externalLink') as string | null;
    
    // Combine image URLs (comma-separated) + video URL into one mediaUrl field
    const imageUrlsRaw = formData.get('imageUrls');
    const videoUrlRaw = formData.get('videoUrl');
    const parts: string[] = [];
    if (typeof imageUrlsRaw === 'string' && imageUrlsRaw.trim()) {
      parts.push(...imageUrlsRaw.split(',').map(u => u.trim()).filter(Boolean));
    }
    if (typeof videoUrlRaw === 'string' && videoUrlRaw.trim() && videoUrlRaw !== 'undefined') {
      parts.push(videoUrlRaw.trim());
    }
    // Also support legacy single 'media' field
    const mediaRaw = formData.get('media');
    if (typeof mediaRaw === 'string' && mediaRaw !== '' && mediaRaw !== 'undefined') {
      parts.push(mediaRaw);
    }
    const mediaUrl = parts.length > 0 ? parts.join(',') : null;
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const item = await (prisma.item as any).create({
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
