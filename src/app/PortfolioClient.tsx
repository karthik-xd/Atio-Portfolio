'use client';
import { useState } from 'react';

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

  const categories = ['All', ...Array.from(new Set(initialItems.map(item => item.category)))];

  const filteredItems = initialItems.filter(item => 
    filter === 'All' ? true : item.category === filter
  );

  return (
    <section className="showcase-section">
      <div className="filter-controls">
        {categories.map((cat) => {
          return (
            <button 
              key={cat}
              className={filter === cat ? 'active filter-btn glow-on-hover' : 'filter-btn'}
              onClick={() => setFilter(cat)}
            >
              {cat === 'All' ? 'All' : cat + 's'}
            </button>
          );
        })}
      </div>

      <div className="grid">
        {filteredItems.map(item => (
          <div key={item.id} className="card glassmorphism">
            {item.mediaUrl && (
              <div className="media-container">
                {item.mediaUrl.match(/\.(mp4|webm|ogg)$/i) ? (
                  <video src={item.mediaUrl} controls className="media" />
                ) : item.mediaUrl.match(/\.pdf$/i) ? (
                  <iframe src={item.mediaUrl} className="media" style={{ width: '100%', minHeight: '300px', border: 'none', background: 'white' }} title={item.title} />
                ) : (
                  <img src={item.mediaUrl} alt={item.title} className="media" />
                )}
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
        ))}
        {filteredItems.length === 0 && (
          <div className="empty-state">
            <p>No items found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
