import { prisma } from '@/lib/prisma';
import PortfolioClient from './PortfolioClient';
import './portfolio.css';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaEye, FaPhone } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import BioModal from './BioModal';

// Ensure the page renders dynamically to get fresh data
export const dynamic = 'force-dynamic';

export default async function Home() {
  const [items, profile] = await Promise.all([
    prisma.item.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.profile.upsert({
      where: { id: 1 },
      update: {},
      create: { id: 1 },
    }),
  ]);

  const photoSrc = profile.photoUrl || '/profile.jpg';

  return (
    <main className="portfolio-main">
      <section className="hero">
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h1 className="hero-title">
              {profile.name
                ? <>
                    <span style={{ color: profile.greetingColor || 'inherit' }}>Hi, I&apos;m</span>
                    <br />
                    <span className="gradient-text">{profile.name}</span>
                  </>
                : <span className="gradient-text">Welcome</span>
              }
            </h1>
            <p className="hero-subtitle">
              {profile.subtitle.split('\n')[0]} {/* Show only first line/paragraph */}
            </p>

            <div className="social-links" style={{ marginTop: '2rem' }}>
              {profile.subtitle.includes('\n') && (
                <BioModal fullBio={profile.subtitle} />
              )}
              {profile.linkedinUrl && (
                <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <FaLinkedin size={22} />
                </a>
              )}
              {profile.githubUrl && (
                <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                  <FaGithub size={22} />
                </a>
              )}
              {profile.twitterUrl && (
                <a href={profile.twitterUrl} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X (Twitter)">
                  <FaXTwitter size={22} />
                </a>
              )}
              {profile.email && (
                <a 
                  href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(profile.email.trim())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon" 
                  aria-label="Email" 
                  title={`Send email to ${profile.email}`}
                >
                  <FaEnvelope size={22} />
                </a>
              )}
              {profile.phoneNumber && (() => {
                const raw = profile.phoneNumber.trim();
                // If it's already a URL (WhatsApp link etc.), use it directly
                const href = raw.startsWith('http')
                  ? raw
                  : `https://wa.me/${raw.replace(/\D/g, '')}`;
                return (
                  <a 
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon" 
                    aria-label="Phone / WhatsApp"
                    title={raw}
                  >
                    <FaPhone size={20} />
                  </a>
                );
              })()}
            </div>

            <div className="hero-actions">
              <Link href="/academic" className="btn-primary glow-on-hover">
                View Academic Profile
              </Link>
              {profile.resumeUrl && (
                <>
                  <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary glow-on-hover">
                    <FaEye size={16} /> View Resume
                  </a>
                  <a href={profile.resumeUrl} download className="btn-secondary glow-on-hover">
                    <FaDownload size={16} /> Download
                  </a>
                </>
              )}
            </div>
          </div>

          <div className="profile-container">
            <Image
              src={photoSrc}
              alt={`${profile.name} profile photo`}
              width={260}
              height={260}
              className="profile-image"
              priority
              unoptimized
            />
          </div>
        </div>
        <div className="hero-glow"></div>
      </section>

      <PortfolioClient initialItems={items} />
    </main>
  );
}
