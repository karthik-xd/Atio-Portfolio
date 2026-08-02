'use client';
import { useState } from 'react';
import { FaDownload, FaChevronLeft, FaChevronRight, FaTimes, FaExpand } from 'react-icons/fa';

type Item = {
  id: number;
  title: string;
  description: string;
  category: string;
  externalLink: string | null;
  mediaUrl: string | null;
  createdAt: Date;
};

export default function PortfolioClient({ initialItems }: { initialItems: Item[] }) {
  const [filter, setFilter] = useState<string>('All');
  const [activeSlideshowIndex, setActiveSlideshowIndex] = useState<number | null>(null);

  const categories = ['All', ...Array.from(new Set(initialItems.map(item => item.category)))];

  const filteredItems = initialItems.filter(item => 
    filter === 'All' ? true : item.category === filter
  );

  // Collect all photos across filtered items for slideshow
  const photoSlides: { url: string; title: string; category: string }[] = [];
  filteredItems.forEach(item => {
    if (item.mediaUrl && !item.mediaUrl.match(/\.(mp4|webm|ogg|pdf)$/i)) {
      const urls = item.mediaUrl.split(/[\s,]+/).filter(Boolean);
      urls.forEach(url => {
        photoSlides.push({ url, title: item.title, category: item.category });
      });
    }
  });

  const openSlideshowForUrl = (url: string) => {
    const idx = photoSlides.findIndex(slide => slide.url === url);
    if (idx !== -1) {
      setActiveSlideshowIndex(idx);
    } else if (photoSlides.length > 0) {
      setActiveSlideshowIndex(0);
    }
  };

  const nextSlide = () => {
    if (activeSlideshowIndex !== null && photoSlides.length > 0) {
      setActiveSlideshowIndex((activeSlideshowIndex + 1) % photoSlides.length);
    }
  };

  const prevSlide = () => {
    if (activeSlideshowIndex !== null && photoSlides.length > 0) {
      setActiveSlideshowIndex((activeSlideshowIndex - 1 + photoSlides.length) % photoSlides.length);
    }
  };

  return (
    <section className="showcase-section">
      <div className="filter-controls">
        {categories.map((cat) => (
          <button 
            key={cat}
            className={filter === cat ? 'active filter-btn glow-on-hover' : 'filter-btn'}
            onClick={() => setFilter(cat)}
          >
            {cat === 'All' ? 'All' : cat + 's'}
          </button>
        ))}

        {photoSlides.length > 0 && (
          <button 
            className="filter-btn glow-on-hover"
            style={{ marginLeft: 'auto', background: 'var(--primary-color)', color: '#000', fontWeight: 'bold' }}
            onClick={() => setActiveSlideshowIndex(0)}
          >
            🖼️ View Slideshow ({photoSlides.length})
          </button>
        )}
      </div>

      <div className="grid">
        {filteredItems.map(item => {
          const mediaUrls = item.mediaUrl ? item.mediaUrl.split(/[\s,]+/).filter(Boolean) : [];
          return (
            <div key={item.id} className="card glassmorphism">
              {mediaUrls.length > 0 && (
                <div className="media-container" style={{ position: 'relative' }}>
                  {mediaUrls.map((url, idx) => {
                    const isVideo = url.match(/\.(mp4|webm|ogg)$/i);
                    const isPdf = url.match(/\.pdf$/i);

                    if (isVideo) {
                      return (
                        <div key={idx} className="video-wrapper">
                          <video src={url} controls className="media" />
                          <a 
                            href={url} 
                            download 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="video-download-btn"
                            title="Download Video"
                          >
                            <FaDownload size={13} /> Download Video
                          </a>
                        </div>
                      );
                    } else if (isPdf) {
                      return (
                        <iframe 
                          key={idx}
                          src={url} 
                          className="media" 
                          style={{ width: '100%', minHeight: '300px', border: 'none', background: 'white' }} 
                          title={item.title} 
                        />
                      );
                    } else {
                      return (
                        <div key={idx} className="image-wrapper" onClick={() => openSlideshowForUrl(url)}>
                          <img src={url} alt={item.title} className="media" />
                          <div className="image-hover-overlay">
                            <FaExpand size={20} /> <span>Slideshow</span>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              )}
              <div className="card-content">
                <div className="card-badge">{item.category}</div>
                <h3>{item.title}</h3>
                <p style={{ whiteSpace: 'pre-wrap' }}>{item.description}</p>
                {item.externalLink && (
                  <a href={item.externalLink} target="_blank" rel="noopener noreferrer" className="card-link">
                    View {item.category} &rarr;
                  </a>
                )}
              </div>
            </div>
          );
        })}
        {filteredItems.length === 0 && (
          <div className="empty-state">
            <p>No items found in this category.</p>
          </div>
        )}
      </div>

      {/* ── PHOTO SLIDESHOW LIGHTBOX MODAL ── */}
      {activeSlideshowIndex !== null && photoSlides[activeSlideshowIndex] && (
        <div className="modal-overlay" onClick={() => setActiveSlideshowIndex(null)}>
          <div className="slideshow-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="slideshow-close-btn" onClick={() => setActiveSlideshowIndex(null)}>
              <FaTimes size={20} />
            </button>

            <div className="slideshow-body">
              {photoSlides.length > 1 && (
                <button className="slideshow-nav-btn prev" onClick={prevSlide}>
                  <FaChevronLeft size={24} />
                </button>
              )}

              <div className="slideshow-image-container">
                <img 
                  src={photoSlides[activeSlideshowIndex].url} 
                  alt={photoSlides[activeSlideshowIndex].title} 
                  className="slideshow-image"
                />
              </div>

              {photoSlides.length > 1 && (
                <button className="slideshow-nav-btn next" onClick={nextSlide}>
                  <FaChevronRight size={24} />
                </button>
              )}
            </div>

            <div className="slideshow-footer">
              <div className="slideshow-info">
                <h4>{photoSlides[activeSlideshowIndex].title}</h4>
                <span className="card-badge">{photoSlides[activeSlideshowIndex].category}</span>
              </div>
              <div className="slideshow-counter">
                {activeSlideshowIndex + 1} / {photoSlides.length}
              </div>
              <a 
                href={photoSlides[activeSlideshowIndex].url} 
                download 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary"
                style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
              >
                <FaDownload size={14} /> Download Photo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
