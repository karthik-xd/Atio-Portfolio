import type { Metadata } from "next";
import "./globals.css";
import { prisma } from '@/lib/prisma';

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "A showcase of my projects and research papers.",
};

export const dynamic = 'force-dynamic';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const profile = await prisma.profile.upsert({
    where: { id: 1 },
    update: {},
    create: { id: 1 },
  });

  const customStyles = {
    ...(profile.themeBgColor && { 
      '--bg-dark': profile.themeBgColor.includes('gradient') ? '#0b0d19' : profile.themeBgColor,
      '--bg-main': profile.themeBgColor
    }),
    ...(profile.themePrimaryColor && { '--primary-color': profile.themePrimaryColor }),
    ...(profile.themeSecondaryColor && { '--secondary-color': profile.themeSecondaryColor }),
    ...(profile.themeAccentColor && { '--accent-color': profile.themeAccentColor }),
    '--profile-size': `${profile.profileSize || 250}px`,
    '--glow-spread': `${profile.glowSpread || 30}px`,
    '--glow-opacity': `${profile.glowOpacity ?? 0.3}`,
    '--ambient-size': `${profile.ambientGlowSize || 400}px`,
    '--ambient-opacity': `${profile.ambientGlowOpacity ?? 0.15}`,
    ...(profile.ambientGlowColor && { '--ambient-color': profile.ambientGlowColor }),
    '--ring-padding': `${profile.ringPadding ?? 5}px`,
    '--photo-contrast': `${profile.photoContrast ?? 1.0}`,
    '--bg-media-opacity': `${profile.bgMediaOpacity ?? 0.6}`,
    '--bg-overlay-opacity': `${profile.bgOverlayOpacity ?? 1.0}`,
    ...(profile.heroPrimaryBtnBg && { '--hero-primary-bg': profile.heroPrimaryBtnBg }),
    ...(profile.heroPrimaryBtnHover && { '--hero-primary-hover': profile.heroPrimaryBtnHover }),
    ...(profile.heroPrimaryBtnText && { '--hero-primary-text': profile.heroPrimaryBtnText }),
    
    ...(profile.heroSecondaryBtnBg && { '--hero-secondary-bg': profile.heroSecondaryBtnBg }),
    ...(profile.heroSecondaryBtnHover && { '--hero-secondary-hover': profile.heroSecondaryBtnHover }),
    ...(profile.heroSecondaryBtnText && { '--hero-secondary-text': profile.heroSecondaryBtnText }),
    
    ...(profile.filterBtnBg && { '--filter-btn-bg': profile.filterBtnBg }),
    ...(profile.filterBtnText && { '--filter-btn-text': profile.filterBtnText }),
    ...(profile.filterBtnHoverBg && { '--filter-btn-hover-bg': profile.filterBtnHoverBg }),
    ...(profile.filterBtnHoverText && { '--filter-btn-hover-text': profile.filterBtnHoverText }),
    
    ...(profile.socialIconBg && { '--social-bg': profile.socialIconBg }),
    ...(profile.socialIconColor && { '--social-color': profile.socialIconColor }),
    ...(profile.socialIconHoverBg && { '--social-hover-bg': profile.socialIconHoverBg }),
    ...(profile.socialIconHoverColor && { '--social-hover-color': profile.socialIconHoverColor }),
  } as React.CSSProperties;

  const isVideoBg = profile.bgImageUrl?.match(/\.(mp4|webm|ogg)$/i);

  return (
    <html lang="en">
      <body style={customStyles}>
        {profile.bgImageUrl && (
          <div className="bg-media-container">
            {isVideoBg ? (
              <video 
                src={profile.bgImageUrl} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="bg-media"
              />
            ) : (
              <img 
                src={profile.bgImageUrl} 
                alt="Background" 
                className="bg-media"
              />
            )}
            {/* The fade-to-black vignette overlay */}
            <div className="bg-overlay"></div>
          </div>
        )}
        
        <div className="content-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
