import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { ItemCategory } from '@/generated/prisma/client';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const category = formData.get('category') as ItemCategory;
    const externalLink = formData.get('externalLink') as string | null;
    
    let mediaUrl = formData.get('media') as string | null;
    if (mediaUrl === 'undefined' || mediaUrl === '') {
      mediaUrl = null;
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
