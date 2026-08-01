import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { ItemCategory } from '@/generated/prisma';
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
    const media = formData.get('media') as File | null;
    
    let mediaUrl = null;
    
    if (media && media.size > 0 && media.name !== 'undefined') {
      const bytes = await media.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      const uploadDir = join(process.cwd(), 'public', 'uploads');
      try {
        await mkdir(uploadDir, { recursive: true });
      } catch (e) {
        // Ignore if exists
      }
      
      const fileName = `${Date.now()}-${media.name.replace(/\s+/g, '-')}`;
      const filePath = join(uploadDir, fileName);
      await writeFile(filePath, buffer);
      mediaUrl = `/uploads/${fileName}`;
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
