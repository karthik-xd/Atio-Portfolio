'use client';

import { useState } from 'react';
import { FaSmile, FaTimes } from 'react-icons/fa';

export default function BioModal({ fullBio }: { fullBio: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className="social-icon"
        title="View Full Bio"
        style={{ cursor: 'pointer', width: 'auto', padding: '0 1.25rem', borderRadius: '30px', gap: '0.5rem', fontWeight: 600, fontFamily: 'inherit' }}
      >
        <FaSmile size={16} /> View Bio
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content glassmorphism" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>About Me</h2>
              <button className="icon-btn cancel" onClick={() => setIsOpen(false)}>
                <FaTimes size={20} />
              </button>
            </div>
            <div className="modal-body">
              <p style={{ whiteSpace: 'pre-wrap', color: 'var(--text-main)', lineHeight: '1.8' }}>
                {fullBio}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
