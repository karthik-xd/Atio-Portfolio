import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const profile = await prisma.profile.upsert({
      where: { id: 1 },
      update: {},
      create: { id: 1 },
    });
    return NextResponse.json(profile);
  } catch (error) {
    console.error('Error fetching profile:', error);
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Build partial update — only include fields that were actually provided
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updates: Record<string, any> = {};

    const name = (formData.get('name') as string)?.trim();
    const subtitle = (formData.get('subtitle') as string)?.trim();
    const linkedinUrl = (formData.get('linkedinUrl') as string)?.trim();
    const githubUrl = (formData.get('githubUrl') as string)?.trim();
    const twitterUrl = (formData.get('twitterUrl') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const themeBgColor = (formData.get('themeBgColor') as string)?.trim();
    const themePrimaryColor = (formData.get('themePrimaryColor') as string)?.trim();

    if (name)     updates.name     = name;
    if (subtitle) updates.subtitle = subtitle;

    if (linkedinUrl !== undefined && linkedinUrl !== '') updates.linkedinUrl = linkedinUrl;
    else if (formData.has('linkedinUrl') && linkedinUrl === '') updates.linkedinUrl = null;

    if (githubUrl !== undefined && githubUrl !== '') updates.githubUrl = githubUrl;
    else if (formData.has('githubUrl') && githubUrl === '') updates.githubUrl = null;

    if (twitterUrl !== undefined && twitterUrl !== '') updates.twitterUrl = twitterUrl;
    else if (formData.has('twitterUrl') && twitterUrl === '') updates.twitterUrl = null;

    if (email !== undefined && email !== '') updates.email = email;
    else if (formData.has('email') && email === '') updates.email = null;

    if (themeBgColor !== undefined && themeBgColor !== '') updates.themeBgColor = themeBgColor;
    else if (formData.has('themeBgColor') && themeBgColor === '') updates.themeBgColor = null;

    if (themePrimaryColor !== undefined && themePrimaryColor !== '') updates.themePrimaryColor = themePrimaryColor;
    else if (formData.has('themePrimaryColor') && themePrimaryColor === '') updates.themePrimaryColor = null;

    const profileSize = formData.get('profileSize');
    if (profileSize !== null) updates.profileSize = parseInt(profileSize as string, 10);

    const glowSpread = formData.get('glowSpread');
    if (glowSpread !== null) updates.glowSpread = parseInt(glowSpread as string, 10);

    const glowOpacity = formData.get('glowOpacity');
    if (glowOpacity !== null) updates.glowOpacity = parseFloat(glowOpacity as string);

    const themeSecondaryColor = (formData.get('themeSecondaryColor') as string)?.trim();
    if (themeSecondaryColor !== undefined && themeSecondaryColor !== '') updates.themeSecondaryColor = themeSecondaryColor;
    else if (formData.has('themeSecondaryColor') && themeSecondaryColor === '') updates.themeSecondaryColor = null;

    const themeAccentColor = (formData.get('themeAccentColor') as string)?.trim();
    if (themeAccentColor !== undefined && themeAccentColor !== '') updates.themeAccentColor = themeAccentColor;
    else if (formData.has('themeAccentColor') && themeAccentColor === '') updates.themeAccentColor = null;

    const ambientGlowColor = (formData.get('ambientGlowColor') as string)?.trim();
    if (ambientGlowColor !== undefined && ambientGlowColor !== '') updates.ambientGlowColor = ambientGlowColor;
    else if (formData.has('ambientGlowColor') && ambientGlowColor === '') updates.ambientGlowColor = null;

    const ambientGlowSize = formData.get('ambientGlowSize');
    if (ambientGlowSize !== null) updates.ambientGlowSize = parseInt(ambientGlowSize as string, 10);

    const ambientGlowOpacity = formData.get('ambientGlowOpacity');
    if (ambientGlowOpacity !== null) updates.ambientGlowOpacity = parseFloat(ambientGlowOpacity as string);

    const ringPadding = formData.get('ringPadding');
    if (ringPadding !== null) updates.ringPadding = parseInt(ringPadding as string, 10);

    const photoContrast = formData.get('photoContrast');
    if (photoContrast !== null) updates.photoContrast = parseFloat(photoContrast as string);

    const bgMediaOpacity = formData.get('bgMediaOpacity');
    if (bgMediaOpacity !== null) updates.bgMediaOpacity = parseFloat(bgMediaOpacity as string);

    const bgOverlayOpacity = formData.get('bgOverlayOpacity');
    if (bgOverlayOpacity !== null) updates.bgOverlayOpacity = parseFloat(bgOverlayOpacity as string);

    const heroPrimaryBtnBg = (formData.get('heroPrimaryBtnBg') as string)?.trim();
    if (heroPrimaryBtnBg !== undefined && heroPrimaryBtnBg !== '') updates.heroPrimaryBtnBg = heroPrimaryBtnBg;
    else if (formData.has('heroPrimaryBtnBg') && heroPrimaryBtnBg === '') updates.heroPrimaryBtnBg = null;

    const heroPrimaryBtnHover = (formData.get('heroPrimaryBtnHover') as string)?.trim();
    if (heroPrimaryBtnHover !== undefined && heroPrimaryBtnHover !== '') updates.heroPrimaryBtnHover = heroPrimaryBtnHover;
    else if (formData.has('heroPrimaryBtnHover') && heroPrimaryBtnHover === '') updates.heroPrimaryBtnHover = null;

    const heroPrimaryBtnText = (formData.get('heroPrimaryBtnText') as string)?.trim();
    if (heroPrimaryBtnText !== undefined && heroPrimaryBtnText !== '') updates.heroPrimaryBtnText = heroPrimaryBtnText;
    else if (formData.has('heroPrimaryBtnText') && heroPrimaryBtnText === '') updates.heroPrimaryBtnText = null;

    const heroSecondaryBtnBg = (formData.get('heroSecondaryBtnBg') as string)?.trim();
    if (heroSecondaryBtnBg !== undefined && heroSecondaryBtnBg !== '') updates.heroSecondaryBtnBg = heroSecondaryBtnBg;
    else if (formData.has('heroSecondaryBtnBg') && heroSecondaryBtnBg === '') updates.heroSecondaryBtnBg = null;

    const heroSecondaryBtnHover = (formData.get('heroSecondaryBtnHover') as string)?.trim();
    if (heroSecondaryBtnHover !== undefined && heroSecondaryBtnHover !== '') updates.heroSecondaryBtnHover = heroSecondaryBtnHover;
    else if (formData.has('heroSecondaryBtnHover') && heroSecondaryBtnHover === '') updates.heroSecondaryBtnHover = null;

    const heroSecondaryBtnText = (formData.get('heroSecondaryBtnText') as string)?.trim();
    if (heroSecondaryBtnText !== undefined && heroSecondaryBtnText !== '') updates.heroSecondaryBtnText = heroSecondaryBtnText;
    else if (formData.has('heroSecondaryBtnText') && heroSecondaryBtnText === '') updates.heroSecondaryBtnText = null;

    const filterBtnBg = (formData.get('filterBtnBg') as string)?.trim();
    if (filterBtnBg !== undefined && filterBtnBg !== '') updates.filterBtnBg = filterBtnBg;
    else if (formData.has('filterBtnBg') && filterBtnBg === '') updates.filterBtnBg = null;

    const filterBtnText = (formData.get('filterBtnText') as string)?.trim();
    if (filterBtnText !== undefined && filterBtnText !== '') updates.filterBtnText = filterBtnText;
    else if (formData.has('filterBtnText') && filterBtnText === '') updates.filterBtnText = null;

    const filterBtnHoverBg = (formData.get('filterBtnHoverBg') as string)?.trim();
    if (filterBtnHoverBg !== undefined && filterBtnHoverBg !== '') updates.filterBtnHoverBg = filterBtnHoverBg;
    else if (formData.has('filterBtnHoverBg') && filterBtnHoverBg === '') updates.filterBtnHoverBg = null;

    const filterBtnHoverText = (formData.get('filterBtnHoverText') as string)?.trim();
    if (filterBtnHoverText !== undefined && filterBtnHoverText !== '') updates.filterBtnHoverText = filterBtnHoverText;
    else if (formData.has('filterBtnHoverText') && filterBtnHoverText === '') updates.filterBtnHoverText = null;

    const socialIconBg = (formData.get('socialIconBg') as string)?.trim();
    if (socialIconBg !== undefined && socialIconBg !== '') updates.socialIconBg = socialIconBg;
    else if (formData.has('socialIconBg') && socialIconBg === '') updates.socialIconBg = null;

    const socialIconColor = (formData.get('socialIconColor') as string)?.trim();
    if (socialIconColor !== undefined && socialIconColor !== '') updates.socialIconColor = socialIconColor;
    else if (formData.has('socialIconColor') && socialIconColor === '') updates.socialIconColor = null;

    const socialIconHoverBg = (formData.get('socialIconHoverBg') as string)?.trim();
    if (socialIconHoverBg !== undefined && socialIconHoverBg !== '') updates.socialIconHoverBg = socialIconHoverBg;
    else if (formData.has('socialIconHoverBg') && socialIconHoverBg === '') updates.socialIconHoverBg = null;

    const socialIconHoverColor = (formData.get('socialIconHoverColor') as string)?.trim();
    if (socialIconHoverColor !== undefined && socialIconHoverColor !== '') updates.socialIconHoverColor = socialIconHoverColor;
    else if (formData.has('socialIconHoverColor') && socialIconHoverColor === '') updates.socialIconHoverColor = null;

    // File uploads to Vercel Blob
    const { put } = await import('@vercel/blob');

    const photo = formData.get('photo') as File | null;
    if (photo && photo.size > 0 && photo.name !== 'undefined') {
      const blob = await put(`photo-${Date.now()}-${photo.name.replace(/\s+/g, '-')}`, photo, {
        access: 'public',
      });
      updates.photoUrl = blob.url;
    }

    const resume = formData.get('resume') as File | null;
    if (resume && resume.size > 0 && resume.name !== 'undefined') {
      const blob = await put(`resume-${Date.now()}-${resume.name.replace(/\s+/g, '-')}`, resume, {
        access: 'public',
        addRandomSuffix: true,
      });
      updates.resumeUrl = blob.url;
    }

    const bgImage = formData.get('bgImage') as File | null;
    if (bgImage && bgImage.size > 0 && bgImage.name !== 'undefined') {
      const blob = await put(`bg-${Date.now()}-${bgImage.name.replace(/\s+/g, '-')}`, bgImage, {
        access: 'public',
      });
      updates.bgImageUrl = blob.url;
    } else if (formData.has('removeBgImage') && formData.get('removeBgImage') === 'true') {
      updates.bgImageUrl = null;
    }

    // Upsert: create with defaults on first run, then only patch what changed
    const profile = await prisma.profile.upsert({
      where: { id: 1 },
      update: updates,
      create: { id: 1, ...updates },
    });

    return NextResponse.json(profile);
  } catch (error) {
    console.error('Error updating profile:', error);
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
  }
}
