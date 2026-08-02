'use client';
import { useState, useEffect, useRef } from 'react';
import { FaTrash, FaEdit, FaCheck, FaTimes, FaCamera, FaImage, FaPalette } from 'react-icons/fa';
import { upload } from '@vercel/blob/client';
import './admin.css';

type Profile = {
  name: string;
  subtitle: string;
  linkedinUrl: string | null;
  githubUrl: string | null;
  twitterUrl: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoUrl: string | null;
  resumeUrl: string | null;
  themeBgColor: string | null;
  themePrimaryColor: string | null;
  greetingColor: string | null;
  themeSecondaryColor: string | null;
  themeAccentColor: string | null;
  bgImageUrl: string | null;
  profileSize: number;
  glowSpread: number;
  glowOpacity: number;
  ambientGlowSize: number;
  ambientGlowOpacity: number;
  ambientGlowColor: string | null;
  ringPadding: number;
  photoContrast: number;
  bgMediaOpacity: number;
  bgOverlayOpacity: number;
  heroPrimaryBtnBg: string | null;
  heroPrimaryBtnHover: string | null;
  heroPrimaryBtnText: string | null;
  heroSecondaryBtnBg: string | null;
  heroSecondaryBtnHover: string | null;
  heroSecondaryBtnText: string | null;
  filterBtnBg: string | null;
  filterBtnText: string | null;
  filterBtnHoverBg: string | null;
  filterBtnHoverText: string | null;
  socialIconBg: string | null;
  socialIconColor: string | null;
  socialIconHoverBg: string | null;
  socialIconHoverColor: string | null;
};

type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  category: string;
  externalLink: string | null;
  mediaUrl: string | null;
};

type AcademicItem = {
  id: number;
  title: string;
  institution: string;
  date: string;
  description: string;
  type: string;
  authors: string | null;
  link: string | null;
};

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'profile' | 'portfolio' | 'academic' | 'graphics'>('profile');
  const [loading, setLoading] = useState(false);
  const [profileLoading, setProfileLoading] = useState(true);

  // Profile state
  const [profile, setProfile] = useState<Profile>({
    name: '', subtitle: '', linkedinUrl: '', githubUrl: '',
    twitterUrl: '', email: '', phoneNumber: '', photoUrl: null, resumeUrl: null,
    themeBgColor: null, themePrimaryColor: null, greetingColor: null, themeSecondaryColor: null, themeAccentColor: null, bgImageUrl: null,
    profileSize: 250, glowSpread: 30, glowOpacity: 0.3, ambientGlowSize: 400, ambientGlowOpacity: 0.15, ambientGlowColor: null, ringPadding: 5, photoContrast: 1.0, bgMediaOpacity: 0.6, bgOverlayOpacity: 1.0,
    heroPrimaryBtnBg: null, heroPrimaryBtnHover: null, heroPrimaryBtnText: null,
    heroSecondaryBtnBg: null, heroSecondaryBtnHover: null, heroSecondaryBtnText: null,
    filterBtnBg: null, filterBtnText: null, filterBtnHoverBg: null, filterBtnHoverText: null,
    socialIconBg: null, socialIconColor: null, socialIconHoverBg: null, socialIconHoverColor: null,
  });

  // Inline editing state for Profile
  const [editingField, setEditingField] = useState<keyof Profile | null>(null);
  const [editValue, setEditValue] = useState('');
  
  // File inputs references
  const photoInputRef = useRef<HTMLInputElement>(null);
  const bgImageInputRef = useRef<HTMLInputElement>(null);

  const sanitizeFilename = (name: string) => {
    return name
      .replace(/[^a-zA-Z0-9.-]/g, '_') // Replace spaces and special characters with underscore
      .replace(/_{2,}/g, '_');         // Collapse multiple underscores
  };
  const resumeInputRef = useRef<HTMLInputElement>(null);

  // Data lists
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [academicItems, setAcademicItems] = useState<AcademicItem[]>([]);

  // Editing state for lists
  const [editingPortfolioItem, setEditingPortfolioItem] = useState<PortfolioItem | null>(null);
  const [editingAcademicItem, setEditingAcademicItem] = useState<AcademicItem | null>(null);

  // Load data on mount
  useEffect(() => {
    fetchProfile();
    fetchPortfolio();
    fetchAcademic();
  }, []);

  async function fetchProfile() {
    try {
      const res = await fetch('/api/profile');
      const data: Profile = await res.json();
      setProfile({
        name: data.name || '',
        subtitle: data.subtitle || '',
        linkedinUrl: data.linkedinUrl || '',
        githubUrl: data.githubUrl || '',
        twitterUrl: data.twitterUrl || '',
        email: data.email || '',
        phoneNumber: data.phoneNumber || '',
        photoUrl: data.photoUrl || null,
        resumeUrl: data.resumeUrl || null,
        themeBgColor: data.themeBgColor || null,
        themePrimaryColor: data.themePrimaryColor || null,
        greetingColor: data.greetingColor || null,
        themeSecondaryColor: data.themeSecondaryColor || null,
        themeAccentColor: data.themeAccentColor || null,
        bgImageUrl: data.bgImageUrl || null,
        profileSize: data.profileSize ?? 250,
        glowSpread: data.glowSpread ?? 30,
        glowOpacity: data.glowOpacity ?? 0.3,
        ambientGlowSize: data.ambientGlowSize ?? 400,
        ambientGlowOpacity: data.ambientGlowOpacity ?? 0.15,
        ambientGlowColor: data.ambientGlowColor || null,
        ringPadding: data.ringPadding ?? 5,
        photoContrast: data.photoContrast ?? 1.0,
        bgMediaOpacity: data.bgMediaOpacity ?? 0.6,
        bgOverlayOpacity: data.bgOverlayOpacity ?? 1.0,
        heroPrimaryBtnBg: data.heroPrimaryBtnBg || null,
        heroPrimaryBtnHover: data.heroPrimaryBtnHover || null,
        heroPrimaryBtnText: data.heroPrimaryBtnText || null,
        heroSecondaryBtnBg: data.heroSecondaryBtnBg || null,
        heroSecondaryBtnHover: data.heroSecondaryBtnHover || null,
        heroSecondaryBtnText: data.heroSecondaryBtnText || null,
        filterBtnBg: data.filterBtnBg || null,
        filterBtnText: data.filterBtnText || null,
        filterBtnHoverBg: data.filterBtnHoverBg || null,
        filterBtnHoverText: data.filterBtnHoverText || null,
        socialIconBg: data.socialIconBg || null,
        socialIconColor: data.socialIconColor || null,
        socialIconHoverBg: data.socialIconHoverBg || null,
        socialIconHoverColor: data.socialIconHoverColor || null,
      });
    } catch (err) {
      console.error("Failed to load profile", err);
    } finally {
      setProfileLoading(false);
    }
  }

  async function fetchPortfolio() {
    const res = await fetch('/api/items');
    if (res.ok) setPortfolioItems(await res.json());
  }

  async function fetchAcademic() {
    const res = await fetch('/api/academic');
    if (res.ok) setAcademicItems(await res.json());
  }

  // Handle single field update for Profile
  async function saveProfileField(field: keyof Profile | 'photo' | 'bgImage' | 'resume', value: string | null | File) {
    setLoading(true);
    const formData = new FormData();
    
    if (value instanceof File) {
      try {
        const sanitizedName = sanitizeFilename(value.name);
        const newBlob = await upload(sanitizedName, value, {
          access: 'public',
          handleUploadUrl: '/api/upload',
        });
        
        // Map the file upload to its database field name
        const dbField = field === 'photo' ? 'photoUrl' : field === 'bgImage' ? 'bgImageUrl' : 'resumeUrl';
        formData.append(dbField, newBlob.url);
      } catch (error) {
        alert(`File upload failed: ${(error as Error).message}`);
        setLoading(false);
        setEditingField(null);
        return;
      }
    } else {
      formData.append(field, value || '');
    }

    // Special flag for removing bg image
    if (field === 'bgImageUrl' && value === null) {
      formData.append('removeBgImage', 'true');
    }

    try {
      const res = await fetch('/api/profile', { method: 'POST', body: formData });
      if (res.ok) {
        await fetchProfile(); // Reload the whole profile to get the updated URL if it was a file
      } else {
        alert('Failed to update field.');
      }
    } catch {
      alert('Error updating profile.');
    } finally {
      setLoading(false);
      setEditingField(null);
    }
  }

  // Trigger file upload for photo
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      saveProfileField('photo', e.target.files[0]);
    }
  };

  // Trigger file upload for bg image
  const handleBgImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      saveProfileField('bgImage', e.target.files[0]);
    }
  };

  // Render an inline editable field
  const renderEditableField = (field: keyof Profile, label: string, type: 'text' | 'textarea' | 'url' | 'email' | 'color' = 'text', placeholder: string = '') => {
    const isEditing = editingField === field;
    const value = (profile[field] as string) || '';

    if (isEditing) {
      const isTextarea = type === 'textarea';
      return (
        <div 
          className="inline-edit-container" 
          style={{ 
            flexDirection: isTextarea ? 'column' : 'row', 
            alignItems: isTextarea ? 'stretch' : 'center',
            gap: isTextarea ? '1rem' : '0'
          }}
        >
          {isTextarea ? (
            <textarea
              className="inline-input"
              rows={4}
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              placeholder={placeholder}
              autoFocus
              style={{ width: '100%', resize: 'vertical' }}
            />
          ) : type === 'color' ? (
             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                   <input
                     type="color"
                     className="inline-input"
                     value={editValue.startsWith('#') && editValue.length <= 9 ? editValue.slice(0, 7) : '#000000'}
                     onChange={(e) => {
                       // Maintain current alpha if present
                       const currentAlpha = editValue.startsWith('#') && editValue.length === 9 ? editValue.slice(7, 9) : '';
                       setEditValue(e.target.value + currentAlpha);
                     }}
                     style={{ width: '40px', padding: '0 2px', cursor: 'pointer', flexShrink: 0 }}
                     title="Pick a solid color"
                   />
                   <input
                     type="text"
                     className="inline-input"
                     value={editValue}
                     onChange={(e) => setEditValue(e.target.value)}
                     placeholder="#HEX, transparent, or gradient"
                     autoFocus
                     style={{ flex: 1, minWidth: 0 }}
                   />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                   <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Opacity:</span>
                   <input
                     type="range"
                     min="0"
                     max="100"
                     value={
                       editValue === 'transparent' ? 0 :
                       editValue.startsWith('rgba') ? 
                         Math.round(parseFloat(editValue.split(',')[3] || '1') * 100) : 
                       editValue.startsWith('#') && editValue.length === 9 ? 
                         Math.round(parseInt(editValue.slice(7, 9), 16) / 255 * 100) : 100
                     }
                     onChange={(e) => {
                        const alpha = parseInt(e.target.value);
                        if (alpha === 0) {
                           setEditValue('transparent');
                        } else if (alpha === 100 && editValue.startsWith('#') && editValue.length === 9) {
                           setEditValue(editValue.slice(0, 7));
                        } else {
                           const baseHex = editValue.startsWith('#') ? editValue.slice(0, 7) : '#000000';
                           const alphaHex = Math.round((alpha / 100) * 255).toString(16).padStart(2, '0');
                           setEditValue(baseHex + alphaHex);
                        }
                     }}
                     style={{ flex: 1, accentColor: 'var(--primary-color)' }}
                   />
                </div>
             </div>
          ) : (
            <input
              type={type}
              className="inline-input"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              placeholder={placeholder}
              autoFocus
            />
          )}
          <div className="inline-edit-actions" style={{ alignSelf: isTextarea ? 'flex-end' : 'auto', margin: 0 }}>
            <button className="icon-btn save" onClick={() => saveProfileField(field, editValue)} disabled={loading}>
              <FaCheck />
            </button>
            <button className="icon-btn cancel" onClick={() => setEditingField(null)} disabled={loading}>
              <FaTimes />
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="whatsapp-list-item">
        <div className="whatsapp-list-content">
          <span className="whatsapp-list-label">{label}</span>
          <span className="whatsapp-list-value">{type === 'color' ? (
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: value || 'transparent', border: '1px solid #fff' }} />
                {value || 'Default'}
             </div>
          ) : (value || <em style={{color: '#888'}}>Not set</em>)}</span>
        </div>
        <button 
          className="icon-btn edit" 
          onClick={() => { setEditingField(field); setEditValue(value); }}
        >
          <FaEdit />
        </button>
      </div>
    );
  };

  const renderSliderField = (field: keyof Profile, label: string, min: number, max: number, step: number = 1) => {
    const value = profile[field] as number;
    
    return (
      <div className="whatsapp-list-item" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '0.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="whatsapp-list-label">{label}</span>
          <span className="whatsapp-list-value" style={{ fontSize: '0.9rem', color: 'var(--primary-color)' }}>{value}</span>
        </div>
        <input 
          type="range" 
          min={min} 
          max={max} 
          step={step} 
          value={value} 
          onChange={(e) => setProfile({ ...profile, [field]: parseFloat(e.target.value) })}
          onMouseUp={(e) => saveProfileField(field, (e.target as HTMLInputElement).value)}
          onTouchEnd={(e) => saveProfileField(field, (e.target as HTMLInputElement).value)}
          style={{ width: '100%', accentColor: 'var(--primary-color)' }}
        />
      </div>
    );
  };

  async function handleSubmitPortfolio(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    // Intercept image files and upload to Vercel Blob
    const imageFiles = formData.getAll('imageFiles') as File[];
    const imageUrls: string[] = [];
    for (const file of imageFiles) {
      if (file && file.size > 0 && file.name) {
        try {
          const sanitizedName = sanitizeFilename(file.name);
          const newBlob = await upload(sanitizedName, file, {
            access: 'public',
            handleUploadUrl: '/api/upload',
          });
          imageUrls.push(newBlob.url);
        } catch (error) {
          alert(`Image upload failed for ${file.name}: ${(error as Error).message}`);
          setLoading(false);
          return;
        }
      }
    }
    if (imageUrls.length > 0) {
      formData.set('imageUrls', imageUrls.join(','));
    }

    // Intercept video file and upload to Vercel Blob
    const videoFile = formData.get('videoFile') as File | null;
    if (videoFile && videoFile.size > 0 && videoFile.name) {
      try {
        const sanitizedName = sanitizeFilename(videoFile.name);
        const newBlob = await upload(sanitizedName, videoFile, {
          access: 'public',
          handleUploadUrl: '/api/upload',
        });
        formData.set('videoUrl', newBlob.url);
      } catch (error) {
        alert(`Video upload failed for ${videoFile.name}: ${(error as Error).message}`);
        setLoading(false);
        return;
      }
    }

    // Clean up file objects so we don't send raw files to Next API routes (bypasses payload limit)
    formData.delete('imageFiles');
    formData.delete('videoFile');
    formData.delete('media');

    try {
      const url = editingPortfolioItem ? `/api/items/${editingPortfolioItem.id}` : '/api/items';
      const method = editingPortfolioItem ? 'PATCH' : 'POST';
      
      const res = await fetch(url, { method, body: formData });
      if (res.ok) {
        alert(editingPortfolioItem ? 'Item updated successfully!' : 'Item uploaded successfully!');
        (e.target as HTMLFormElement).reset();
        setEditingPortfolioItem(null);
        fetchPortfolio();
      } else alert('Failed to save item.');
    } catch {
      alert('Error saving item.');
    } finally {
      setLoading(false);
    }
  }

  async function deletePortfolio(id: number) {
    if (!confirm('Are you sure you want to delete this item?')) return;
    try {
      const res = await fetch(`/api/items/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchPortfolio();
      } else {
        alert('Failed to delete item');
      }
    } catch {
      alert('Error deleting item');
    }
  }

  async function handleSubmitAcademic(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    try {
      // Intercept file upload for Academic Link
      const linkFile = formData.get('linkFile') as File | null;
      if (linkFile && linkFile.size > 0 && linkFile.name) {
        try {
          const sanitizedName = sanitizeFilename(linkFile.name);
          const newBlob = await upload(sanitizedName, linkFile, {
            access: 'public',
            handleUploadUrl: '/api/upload',
          });
          formData.set('link', newBlob.url);
        } catch (error) {
          alert(`File upload failed: ${(error as Error).message}`);
          setLoading(false);
          return;
        }
      }

      const url = editingAcademicItem ? `/api/academic/${editingAcademicItem.id}` : '/api/academic';
      const method = editingAcademicItem ? 'PATCH' : 'POST';
      
      const res = await fetch(url, { method, body: formData });
      if (res.ok) {
        alert(editingAcademicItem ? 'Academic item updated successfully!' : 'Academic item added successfully!');
        (e.target as HTMLFormElement).reset();
        setEditingAcademicItem(null);
        fetchAcademic();
      } else alert('Failed to save academic item.');
    } catch {
      alert('Error saving academic item.');
    } finally {
      setLoading(false);
    }
  }

  async function deleteAcademic(id: number) {
    if (!confirm('Are you sure you want to delete this item?')) return;
    try {
      const res = await fetch(`/api/academic/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchAcademic();
      } else {
        alert('Failed to delete item');
      }
    } catch {
      alert('Error deleting item');
    }
  }

  return (
    <div className="admin-container">
      <div className="admin-card glassmorphism" style={{ maxWidth: '800px' }}>
        <h1 className="gradient-text" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Admin Dashboard
        </h1>

        <div className="admin-tabs">
          <button className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>Profile</button>
          <button className={`tab-btn ${activeTab === 'portfolio' ? 'active' : ''}`} onClick={() => setActiveTab('portfolio')}>Portfolio</button>
          <button className={`tab-btn ${activeTab === 'academic' ? 'active' : ''}`} onClick={() => setActiveTab('academic')}>Academic</button>
          <button className={`tab-btn ${activeTab === 'graphics' ? 'active' : ''}`} onClick={() => setActiveTab('graphics')}>Graphics</button>
        </div>

        {/* ── PROFILE TAB (WhatsApp Style) ── */}
        {activeTab === 'profile' && (
          profileLoading ? (
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '2rem' }}>Loading current profile...</p>
          ) : (
            <div className="whatsapp-profile-container">
              {/* Profile Avatar */}
              <div className="avatar-section">
                <div className="avatar-wrapper" onClick={() => photoInputRef.current?.click()}>
                  <img 
                    src={profile.photoUrl || '/profile.jpg'} 
                    alt="Profile" 
                    className="avatar-image" 
                  />
                  <div className="avatar-overlay">
                    <FaCamera size={24} />
                    <span>Change</span>
                  </div>
                </div>
                <input 
                  type="file" 
                  ref={photoInputRef} 
                  style={{ display: 'none' }} 
                  accept="image/*" 
                  onChange={handlePhotoUpload}
                />
                {loading && <p style={{fontSize: '0.8rem', color: 'var(--primary-color)', marginTop: '0.5rem'}}>Saving...</p>}
              </div>

              {/* Editable Fields */}
              <div className="whatsapp-fields-list">
                {renderEditableField('name', 'Name', 'text', 'Enter your name')}
                {renderEditableField('subtitle', 'About', 'textarea', 'Tell us about yourself')}
                
                <div className="section-divider">Contact & Links</div>
                {renderEditableField('email', 'Email', 'email', 'contact@example.com')}
                {renderEditableField('phoneNumber', 'Phone / WhatsApp Number', 'text', '+1234567890')}
                {renderEditableField('linkedinUrl', 'LinkedIn', 'url', 'https://linkedin.com/in/...')}
                {renderEditableField('githubUrl', 'GitHub', 'url', 'https://github.com/...')}
                {renderEditableField('twitterUrl', 'Twitter', 'url', 'https://twitter.com/...')}
                
                <div className="section-divider">Resume</div>
                <div className="whatsapp-list-item">
                  <div className="whatsapp-list-content">
                    <span className="whatsapp-list-label">PDF Resume</span>
                    <span className="whatsapp-list-value">
                      {profile.resumeUrl ? <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">View Current</a> : <em style={{color: '#888'}}>Not uploaded</em>}
                    </span>
                  </div>
                  <button 
                    className="icon-btn edit" 
                    onClick={() => resumeInputRef.current?.click()}
                    title="Upload Resume"
                  >
                    <FaCamera /> 
                  </button>
                  <input 
                    type="file" 
                    ref={resumeInputRef} 
                    style={{ display: 'none' }} 
                    accept=".pdf" 
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        saveProfileField('resume', e.target.files[0]);
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          )
        )}

        {/* ── GRAPHICS TAB ── */}
        {activeTab === 'graphics' && (
          <div className="whatsapp-profile-container">
            <div className="whatsapp-fields-list">
              <div className="section-divider"><FaPalette /> Tri-Color Theme Sandbox</div>
              {renderEditableField('themeBgColor', 'Background (Dark)', 'color')}
              {renderEditableField('greetingColor', 'Greeting Text Color', 'color')}
              {renderEditableField('themePrimaryColor', 'Primary Color', 'color')}
              {renderEditableField('themeSecondaryColor', 'Secondary Color (Gradient Texts)', 'color')}
              {renderEditableField('themeAccentColor', 'Accent Color (Photo Ring Gradient)', 'color')}
              
              <div className="section-divider" style={{ marginTop: '2rem' }}>
                <FaPalette style={{ marginRight: '0.5rem' }} /> Hero Action Buttons
              </div>
              <p className="admin-hint" style={{margin: '1rem'}}>
                Customize "View Academic Profile", "View Resume", etc.
              </p>
              {renderEditableField('heroPrimaryBtnBg', 'Primary Btn - Normal Background', 'color')}
              {renderEditableField('heroPrimaryBtnHover', 'Primary Btn - Hover Background', 'color')}
              {renderEditableField('heroPrimaryBtnText', 'Primary Btn - Text Color', 'color')}
              {renderEditableField('heroSecondaryBtnBg', 'Secondary Btn - Normal Background', 'color')}
              {renderEditableField('heroSecondaryBtnHover', 'Secondary Btn - Hover Background', 'color')}
              {renderEditableField('heroSecondaryBtnText', 'Secondary Btn - Text/Border Color', 'color')}

              <div className="section-divider" style={{ marginTop: '2rem' }}>
                <FaPalette style={{ marginRight: '0.5rem' }} /> Portfolio Filter Buttons
              </div>
              <p className="admin-hint" style={{margin: '1rem'}}>
                Customize the category filters (e.g. All, Projects, Hackathons).
              </p>
              {renderEditableField('filterBtnBg', 'Normal Background', 'color')}
              {renderEditableField('filterBtnText', 'Normal Text', 'color')}
              {renderEditableField('filterBtnHoverBg', 'Active/Hover Background', 'color')}
              {renderEditableField('filterBtnHoverText', 'Active/Hover Text', 'color')}

              <div className="section-divider" style={{ marginTop: '2rem' }}>
                <FaPalette style={{ marginRight: '0.5rem' }} /> Social & Bio Buttons
              </div>
              <p className="admin-hint" style={{margin: '1rem'}}>
                Customize the "View Bio" button and the social media icons.
              </p>
              {renderEditableField('socialIconBg', 'Normal Background', 'color')}
              {renderEditableField('socialIconColor', 'Normal Icon/Text Color', 'color')}
              {renderEditableField('socialIconHoverBg', 'Hover Background', 'color')}
              {renderEditableField('socialIconHoverColor', 'Hover Icon/Text Color', 'color')}
              
              <div className="section-divider">Profile & Ring Adjustments</div>
              {renderSliderField('profileSize', 'Profile Size (px)', 150, 400, 10)}
              {renderSliderField('photoContrast', 'Photo Contrast', 0.5, 2.0, 0.1)}
              {renderSliderField('ringPadding', 'Ring Thickness/Gap (px)', 0, 20, 1)}

              <div className="section-divider">Neon Glow (Box-Shadow) Adjustments</div>
              {renderSliderField('glowSpread', 'Glow Spread (px)', 0, 100, 5)}
              {renderSliderField('glowOpacity', 'Glow Intensity (Alpha)', 0, 1, 0.05)}

              <div className="section-divider">Ambient Room Glow (Radial-Gradient) Adjustments</div>
              {renderEditableField('ambientGlowColor', 'Ambient Glow Color', 'color')}
              {renderSliderField('ambientGlowSize', 'Ambient Size (px)', 100, 1000, 50)}
              {renderSliderField('ambientGlowOpacity', 'Ambient Intensity (Alpha)', 0, 1, 0.05)}

              <div className="section-divider"><FaImage /> Background Media</div>
              <div className="whatsapp-list-item" style={{flexDirection: 'column', alignItems: 'flex-start', gap: '1rem'}}>
                <div className="bg-preview-container" style={{
                  width: '100%', height: '150px', 
                  borderRadius: '12px', 
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  {profile.bgImageUrl ? (
                    profile.bgImageUrl.match(/\.(mp4|webm|ogg)$/i) ? (
                      <video 
                        src={profile.bgImageUrl} 
                        autoPlay loop muted playsInline 
                        style={{width: '100%', height: '100%', objectFit: 'cover'}} 
                      />
                    ) : (
                      <img 
                        src={profile.bgImageUrl} 
                        alt="Background preview" 
                        style={{width: '100%', height: '100%', objectFit: 'cover'}} 
                      />
                    )
                  ) : (
                    <span style={{color: '#888'}}>No media set</span>
                  )}
                </div>
                <div style={{display: 'flex', gap: '1rem', width: '100%'}}>
                  <button className="btn-secondary" onClick={() => bgImageInputRef.current?.click()} style={{flex: 1, padding: '0.5rem', justifyContent: 'center'}}>
                    Upload Media
                  </button>
                  {profile.bgImageUrl && (
                    <button className="btn-secondary" onClick={() => saveProfileField('bgImageUrl', null)} style={{color: '#ff4b4b', borderColor: '#ff4b4b'}}>
                      Remove
                    </button>
                  )}
                </div>
                <input 
                  type="file" 
                  ref={bgImageInputRef} 
                  style={{ display: 'none' }} 
                  accept="image/*,video/*" 
                  onChange={handleBgImageUpload}
                />
                
                <div style={{ marginTop: '1.5rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {renderSliderField('bgMediaOpacity', 'Background Image Brightness', 0, 1, 0.05)}
                  {renderSliderField('bgOverlayOpacity', 'Dark Overlay Opacity', 0, 1, 0.05)}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── PORTFOLIO TAB ── */}
        {activeTab === 'portfolio' && (
          <div className="admin-content-layout">
            <div className="admin-list-section">
              <h3>Existing Portfolio Items</h3>
              <div className="item-list">
                {portfolioItems.map(item => (
                  <div key={item.id} className="list-item glassmorphism">
                    <div className="list-item-content">
                      <span className="item-badge">{item.category}</span>
                      <h4>{item.title}</h4>
                    </div>
                    <div className="list-item-actions">
                      <button onClick={() => setEditingPortfolioItem(item)} className="icon-btn edit"><FaEdit /></button>
                      <button onClick={() => deletePortfolio(item.id)} className="icon-btn delete"><FaTrash /></button>
                    </div>
                  </div>
                ))}
                {portfolioItems.length === 0 && <p className="empty-text">No portfolio items found.</p>}
              </div>
            </div>

            <div className="admin-form-section">
              <h3>{editingPortfolioItem ? 'Edit Portfolio Item' : 'Add New Portfolio Item'}</h3>
              <form onSubmit={handleSubmitPortfolio} className="admin-form">
                <div className="form-group">
                  <label>Title</label>
                  <input type="text" name="title" required placeholder="Project or Paper Title" defaultValue={editingPortfolioItem?.title || ''} />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <input 
                    type="text" 
                    name="category" 
                    list="portfolio-categories"
                    required 
                    placeholder="e.g. Project, Hackathon" 
                    defaultValue={editingPortfolioItem?.category || 'Project'} 
                  />
                  <datalist id="portfolio-categories">
                    {Array.from(new Set(portfolioItems.map(i => i.category))).map(cat => (
                      <option key={cat} value={cat} />
                    ))}
                  </datalist>
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea name="description" required rows={4} placeholder="Describe the project..." defaultValue={editingPortfolioItem?.description || ''} />
                </div>
                <div className="form-group">
                  <label>External Link (Optional)</label>
                  <input type="url" name="externalLink" placeholder="https://..." defaultValue={editingPortfolioItem?.externalLink || ''} />
                </div>
                <div className="form-group">
                  <label>Upload Photo(s) (Slideshow) {editingPortfolioItem?.mediaUrl && <span className="optional-tag">(Upload to replace)</span>}</label>
                  <input type="file" name="imageFiles" accept="image/*,application/pdf" multiple />
                  <p className="admin-hint" style={{margin: '0.2rem 0 0 0', fontSize: '0.85rem', color: '#888'}}>Select multiple images to create a slideshow.</p>
                </div>
                <div className="form-group">
                  <label>Upload Video {editingPortfolioItem?.mediaUrl && <span className="optional-tag">(Upload to replace)</span>}</label>
                  <input type="file" name="videoFile" accept="video/*" />
                </div>
                <div className="form-actions-row">
                  <button type="submit" disabled={loading} className="submit-btn glow-on-hover" style={{ flex: 1 }}>
                    {loading ? 'Saving...' : (editingPortfolioItem ? 'Update Item' : 'Publish Item')}
                  </button>
                  {editingPortfolioItem && (
                    <button type="button" onClick={() => setEditingPortfolioItem(null)} className="cancel-btn">
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ── ACADEMIC TAB ── */}
        {activeTab === 'academic' && (
          <div className="admin-content-layout">
            <div className="admin-list-section">
              <h3>Existing Academic Items</h3>
              <div className="item-list">
                {academicItems.map(item => (
                  <div key={item.id} className="list-item glassmorphism">
                    <div className="list-item-content">
                      <span className="item-badge">{item.type}</span>
                      <h4>{item.title}</h4>
                      <p className="item-subtext">{item.institution}</p>
                    </div>
                    <div className="list-item-actions">
                      <button onClick={() => setEditingAcademicItem(item)} className="icon-btn edit"><FaEdit /></button>
                      <button onClick={() => deleteAcademic(item.id)} className="icon-btn delete"><FaTrash /></button>
                    </div>
                  </div>
                ))}
                {academicItems.length === 0 && <p className="empty-text">No academic items found.</p>}
              </div>
            </div>

            <div className="admin-form-section">
              <h3>{editingAcademicItem ? 'Edit Academic Item' : 'Add New Academic Item'}</h3>
              <form onSubmit={handleSubmitAcademic} className="admin-form">
                <div className="form-group">
                  <label>Type</label>
                  <select name="type" required defaultValue={editingAcademicItem?.type || 'Education'}>
                    <option value="Education">Education</option>
                    <option value="Publication">Publication</option>
                    <option value="Certification">Certification</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Title / Degree</label>
                  <input type="text" name="title" required placeholder="e.g. Ph.D. in Computer Science" defaultValue={editingAcademicItem?.title || ''} />
                </div>
                <div className="form-group">
                  <label>Institution / Publisher</label>
                  <input type="text" name="institution" required placeholder="University or Conference Name" defaultValue={editingAcademicItem?.institution || ''} />
                </div>
                <div className="form-group">
                  <label>Date</label>
                  <input type="text" name="date" required placeholder="e.g. 2020 - 2024" defaultValue={editingAcademicItem?.date || ''} />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea name="description" required rows={3} placeholder="Brief description..." defaultValue={editingAcademicItem?.description || ''} />
                </div>
                <div className="form-group">
                  <label>Authors <span className="optional-tag">(for Publications)</span></label>
                  <input type="text" name="authors" placeholder="John Doe, Jane Smith" defaultValue={editingAcademicItem?.authors || ''} />
                </div>
                <div className="form-group">
                  <label>Link or File <span className="optional-tag">(optional)</span></label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <input type="url" name="link" placeholder="https://... (or upload file below)" defaultValue={editingAcademicItem?.link || ''} />
                    <input type="file" name="linkFile" accept="application/pdf,image/*,video/*" />
                  </div>
                </div>
                <div className="form-actions-row">
                  <button type="submit" disabled={loading} className="submit-btn glow-on-hover" style={{ flex: 1 }}>
                    {loading ? 'Saving...' : (editingAcademicItem ? 'Update Item' : 'Add Item')}
                  </button>
                  {editingAcademicItem && (
                    <button type="button" onClick={() => setEditingAcademicItem(null)} className="cancel-btn">
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
