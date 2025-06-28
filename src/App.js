import React, { useState } from 'react';
import './App.css';
import WeddingDetails from './WeddingDetails';
import OurStory from './OurStory';
import HomePage from './HomePage';
import Gallery from './Gallery';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'our-story':
        return <OurStory />;
      case 'wedding-details':
        return <WeddingDetails />;
      case 'gallery':
        return <Gallery />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/nav-logo.png" alt="S&R Wedding Logo" className="nav-logo-image" />
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <button 
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => setCurrentPage('home')}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${currentPage === 'our-story' ? 'active' : ''}`}
                onClick={() => setCurrentPage('our-story')}
              >
                Our Story
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${currentPage === 'wedding-details' ? 'active' : ''}`}
                onClick={() => setCurrentPage('wedding-details')}
              >
                Wedding Details
              </button>
            </li>
            {/* Gallery Navigation Item
            <li className="nav-item">
              <button 
                className={`nav-link ${currentPage === 'gallery' ? 'active' : ''}`}
                onClick={() => setCurrentPage('gallery')}
              >
                Gallery
              </button>
            </li> */}
          </ul>
        </div>
      </nav>

      <main className="main-content">
        {renderPage()}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            Made with <span className="heart">❤️</span> by Rajesh
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
