import React from 'react';

const WeddingDetails = () => {
  return (
    <section className="details-section">
      <div className="details-content">
        <h1 className="details-title">Wedding Details</h1>
        
        <div className="events-container">
          <div className="event-card">
            <div className="venue-details">
              <div className="venue-item">
                <h3 className="venue-label">
                  <svg className="venue-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Venue
                </h3>
                <p className="venue-text">Madhurashree Convention Center</p>
                <a 
                  href="https://maps.app.goo.gl/3hLzhbQ3fLoriMj76" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="venue-address-link"
                >
                <p className="venue-address">Madhuranagara, Muthsandra Main Rd, 3rd Stage, Varthur, Karnataka 560087, India</p>
                </a>
              </div>
              
              <div className="venue-item">
                <h3 className="venue-label">
                  <svg className="venue-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 7H16V6C16 4.89543 15.1046 4 14 4H10C8.89543 4 8 4.89543 8 6V7H5C3.89543 7 3 7.89543 3 9V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V9C21 7.89543 20.1046 7 19 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 7V6C8 5.46957 8.21071 4.96086 8.58579 4.58579C8.96086 4.21071 9.46957 4 10 4H14C14.5304 4 15.0391 4.21071 15.4142 4.58579C15.7893 4.96086 16 5.46957 16 6V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 12V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Parking
                </h3>
                <p className="venue-text" style={{marginTop: '30px'}}>Ample parking available on the premises</p>
              </div>
            </div>

            <div className="events-timeline">
              {/* Reception Details */}
              <div className="event-timeline-item">
                <div className="event-header">
                  <h2 className="event-title">Wedding Reception</h2>
                  <div className="event-date">
                    <svg className="calendar-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                </div>
                <div className="event-time">
                  <h3 className="time-label">Time</h3>
                  <p className="time-text">7:00 PM Onwards</p>
                </div>
              </div>

              {/* Marriage Details */}
              <div className="event-timeline-item">
                <div className="event-header">
                  <h2 className="event-title">Wedding Ceremony</h2>
                  <div className="event-date">
                    <svg className="calendar-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                </div>
                <div className="event-time">
                  <h3 className="time-label">Time</h3>
                  <p className="time-text">09:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails; 