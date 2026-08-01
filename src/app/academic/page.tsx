import { prisma } from '@/lib/prisma';
import { AcademicType, type AcademicItem } from '@/generated/prisma';
import Link from 'next/link';
import { FaSmile, FaExternalLinkAlt } from 'react-icons/fa';
import './academic.css';

export const dynamic = 'force-dynamic';

export default async function AcademicProfile() {
  const academicItems: AcademicItem[] = await prisma.academicItem.findMany({
    orderBy: { createdAt: 'desc' },
  });

  const education = academicItems.filter((i: AcademicItem) => i.type === AcademicType.EDUCATION);
  const publications = academicItems.filter((i: AcademicItem) => i.type === AcademicType.PUBLICATION);

  return (
    <main className="academic-main">
      <div className="academic-header">
        <Link href="/" className="back-link">
          <FaSmile size={18} /> Back to Home
        </Link>
        <h1><span className="gradient-text">Academic</span> Profile</h1>
        <p className="hero-subtitle" style={{ marginTop: '1rem' }}>
          My educational background and research contributions.
        </p>
      </div>

      {/* Education */}
      <section className="academic-section">
        <h2 className="section-title">Education</h2>
        {education.length === 0 ? (
          <p className="empty-academic">No education entries yet. Add them from the admin panel.</p>
        ) : (
          <div className="timeline">
            {education.map((item: AcademicItem) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-content glassmorphism">
                  <div className="timeline-date">{item.date}</div>
                  <h3>{item.title}</h3>
                  <p style={{ marginBottom: '0.5rem' }}>{item.institution}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', whiteSpace: 'pre-wrap' }}>{item.description}</p>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="pub-link" style={{ marginTop: '0.75rem' }}>
                      View <FaExternalLinkAlt size={13} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Publications */}
      <section className="academic-section" style={{ marginTop: '4rem' }}>
        <h2 className="section-title" style={{ textAlign: 'center', borderBottom: 'none' }}>
          Highlighted Publications
        </h2>
        {publications.length === 0 ? (
          <p className="empty-academic" style={{ textAlign: 'center' }}>No publications yet. Add them from the admin panel.</p>
        ) : (
          <div className="publications-grid">
            {publications.map((item: AcademicItem) => (
              <div key={item.id} className="pub-card glassmorphism glow-on-hover">
                <h4>{item.title}</h4>
                <div className="pub-meta">
                  {item.institution && <>Published in: {item.institution}<br /></>}
                  {item.date && <>{item.date}<br /></>}
                  {item.authors && <><br />Authors: {item.authors}</>}
                  {item.description && <div style={{marginTop: '1rem', whiteSpace: 'pre-wrap'}}>{item.description}</div>}
                </div>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="pub-link">
                    Read Paper <FaExternalLinkAlt size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
