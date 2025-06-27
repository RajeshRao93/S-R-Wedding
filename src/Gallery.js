import React from 'react';

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-content">
        <h1 className="gallery-title">Photo Gallery</h1>
        
        <div className="construction-message">
          <div className="construction-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <h2 className="construction-title">Coming Soon</h2>
          
        </div>
      </div>
    </section>
  );
};

export default Gallery; 