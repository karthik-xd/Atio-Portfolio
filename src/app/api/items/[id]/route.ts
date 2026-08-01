import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

// DELETE /api/items/[id]
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.item.delete({ where: { id: parseInt(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting item:', error);
    return NextResponse.json({ error: 'Failed to delete item' }, { status: 500 });
  }
}

// GET /api/items/[id]
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const item = await prisma.item.findUnique({ where: { id: parseInt(id) } });
    if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(item);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch item' }, { status: 500 });
  }
}

// PATCH /api/items/[id]
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
    const description = (formData.get('description') as string)?.trim();
    const category = (formData.get('category') as string)?.trim();
    const externalLink = (formData.get('externalLink') as string)?.trim();

    if (title) updates.title = title;
    if (description) updates.description = description;
    if (category) updates.category = category;
    if (externalLink !== undefined) updates.externalLink = externalLink || null;

    const mediaUrl = formData.get('media') as string | null;
    if (mediaUrl !== null && mediaUrl !== 'undefined' && mediaUrl !== '') {
      updates.mediaUrl = mediaUrl;
    }

    const item = await prisma.item.update({
      where: { id: parseInt(id) },
      data: updates,
    });

    return NextResponse.json(item);
  } catch (error) {
    console.error('Error updating item:', error);
    return NextResponse.json({ error: 'Failed to update item' }, { status: 500 });
  }
}
