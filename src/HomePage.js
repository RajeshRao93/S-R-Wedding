import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [activeTab, setActiveTab] = useState('marriage');

  useEffect(() => {
    const weddingDate = new Date('October 5, 2025 00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderMarriageContent = () => (
    <>
      <h1 className="main-title">Sushma & Rajesh</h1>
      <h2 className="subtitle">are getting married!</h2>
      <h3> Save the date... </h3>
      <div className="wedding-date">
        <svg className="calendar-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 14H9V16H7V14Z" fill="currentColor"/>
          <path d="M11 14H13V16H11V14Z" fill="currentColor"/>
          <path d="M15 14H17V16H15V14Z" fill="currentColor"/>
          <path d="M7 18H9V16H7V18Z" fill="currentColor"/>
          <path d="M11 18H13V20H11V18Z" fill="currentColor"/>
          <path d="M15 18H17V20H15V18Z" fill="currentColor"/>
        </svg>
        October 5th, Sunday, 2025
      </div>
      
      <div className="countdown-container">
        <h3 className="countdown-title">Countdown to Our Special Day</h3>
        <div className="countdown-timer">
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.days}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.hours}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.minutes}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.seconds}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
      </div>
    </>
  );

  const renderReceptionContent = () => (
    <>
      <h1 className="main-title">Wedding Reception</h1>
      <h2 className="subtitle">Celebrate with us!</h2>
      <div className="wedding-date">
        <svg className="calendar-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 14H9V16H7V14Z" fill="currentColor"/>
          <path d="M11 14H13V16H11V14Z" fill="currentColor"/>
          <path d="M15 14H17V16H15V14Z" fill="currentColor"/>
          <path d="M7 18H9V16H7V18Z" fill="currentColor"/>
          <path d="M11 18H13V20H11V18Z" fill="currentColor"/>
          <path d="M15 18H17V20H15V18Z" fill="currentColor"/>
        </svg>
        October 4th, Saturday, 2025
      </div>
      
      <div className="reception-details">
        <div className="detail-item">
          <h3 className="detail-title">Venue</h3>
          <p className="detail-text">Madhurashree Convention Center, Varthur, Bangalore</p>
        </div>
        <div className="detail-item">
          <h3 className="detail-title">Time</h3>
          <p className="detail-text">7:00 PM Onwards</p>
        </div>
      </div>
    </>
  );

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="tab-container">
          <button 
            className={`tab-button ${activeTab === 'marriage' ? 'active' : ''}`}
            onClick={() => setActiveTab('marriage')}
          >
            Marriage
          </button>
          <button 
            className={`tab-button ${activeTab === 'reception' ? 'active' : ''}`}
            onClick={() => setActiveTab('reception')}
          >
            Reception
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'marriage' ? renderMarriageContent() : renderReceptionContent()}
        </div>
      </div>
    </section>
  );
};

export default HomePage; 