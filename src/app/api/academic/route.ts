import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { AcademicType } from '@/generated/prisma';

export async function GET() {
  try {
    const items = await prisma.academicItem.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch academic items' }, { status: 500 });
  }
}

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const title = formData.get('title') as string;
    const institution = formData.get('institution') as string;
    const date = formData.get('date') as string;
    const description = formData.get('description') as string;
    const type = formData.get('type') as AcademicType;
    const link = formData.get('link') as string | null;
    const authors = formData.get('authors') as string | null;
    
    const item = await prisma.academicItem.create({
      data: {
        title,
        institution,
        date,
        description,
        type,
        link: link || null,
        authors: authors || null,
      },
    });
    
    return NextResponse.json(item);
  } catch (error) {
    console.error('Error creating academic item:', error);
    return NextResponse.json({ error: 'Failed to create academic item' }, { status: 500 });
  }
}
