import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// DELETE /api/academic/[id]
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.academicItem.delete({ where: { id: parseInt(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting academic item:', error);
    return NextResponse.json({ error: 'Failed to delete item' }, { status: 500 });
  }
}

// PATCH /api/academic/[id]
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const formData = await request.formData();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updates: Record<string, any> = {};

    const title = (formData.get('title') as string)?.trim();
    const institution = (formData.get('institution') as string)?.trim();
    const date = (formData.get('date') as string)?.trim();
    const description = (formData.get('description') as string)?.trim();
    const type = (formData.get('type') as string)?.trim();
    const authors = (formData.get('authors') as string)?.trim();
    const link = (formData.get('link') as string)?.trim();

    if (title) updates.title = title;
    if (institution) updates.institution = institution;
    if (date) updates.date = date;
    if (description) updates.description = description;
    if (type) updates.type = type;
    if (authors !== undefined) updates.authors = authors || null;
    if (link !== undefined) updates.link = link || null;

    const item = await prisma.academicItem.update({
      where: { id: parseInt(id) },
      data: updates,
    });

    return NextResponse.json(item);
  } catch (error) {
    console.error('Error updating academic item:', error);
    return NextResponse.json({ error: 'Failed to update item' }, { status: 500 });
  }
}
