import React from 'react';

const OurStory = () => {
  return (
    <section className="story-section">
      {/* Video Player Section */}
      <div className="story-video-container">
        <video 
          className="story-video"
          controls
          autoPlay
          muted
          loop
          poster="/video-poster.jpg"
        >
          <source src="/our-story-video.mp4" type="video/mp4" />
          <source src="/our-story-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="story-layout">
        {/* Left Side Cards */}
        <div className="cards-container left-cards">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>How We Met?</h3>
              </div>
              <div className="flip-card-back">
                <p>We first met in the physics lab during our first year of engineering!</p>
              </div>
            </div>
          </div>
          
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>First Date?</h3>
              </div>
              <div className="flip-card-back">
                <p>Our first date was at the Mantri Square!</p>
              </div>
            </div>
          </div>
          
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>Proposal?</h3>
              </div>
              <div className="flip-card-back">
                <p>Rajesh proposed to Sush on 04.03.2014 (yup it was that long ago!)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Center Story Content */}
        <div className="story-content">
          <h1 className="story-title">From Campus to Forever</h1>
          <div className="story-text">
          <p>
            We first crossed paths in the corridors of our engineering college, just a quiet boy 
            with a spark in his eyes, and a confident, ever-curious girl who somehow always knew 
            the right thing to say. What began as casual chats over assignments slowly grew into 
            late-night messages, and soon turned into something we couldn’t quite describe, but
            felt deeply in our hearts.
          </p>

          <p>
            After graduation, fate had more plans for us, we ended up working at the same company,
            side by side, coding through chaotic sprints and bonding over shared lunch breaks.
            As we stepped into the early days of adulthood, we navigated it all hand in hand, 
            growing closer with every passing day.
          </p>

          <p>
           Then came a big turn, Rajesh moved to Germany to pursue higher studies. It wasn’t easy.
           Time zones, distance, and longing all became part of our story. But through it all, what
           stayed constant was our commitment to each other. While he built a new life abroad,
           I was always just one call away, his biggest cheerleader, and he mine.
          </p>

          <p>
            Now, after 11 incredible years filled with laughter, challenges, and a love that’s only
            grown stronger over time, we’re finally stepping into the next chapter of our journey.
            As we prepare to say "I do" in front of our loved ones, we couldn’t be more excited to
            celebrate this special day with you. It’s not just our wedding—it’s the beginning of a
            beautiful new chapter, and we’re so happy you’ll be part of it.
          </p>

            
            <p className="story-signature">
              With love and gratitude,<br />
              Sushma & Rajesh
            </p>
          </div>
        </div>

        {/* Right Side Cards */}
        <div className="cards-container right-cards">
          
          
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>Shared Dreams?</h3>
              </div>
              <div className="flip-card-back">
                <p>We both dream of traveling the world together and building a loving family.</p>
              </div>
            </div>
          </div>
          
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>Pet Names?</h3>
              </div>
              <div className="flip-card-back">
                <p>Rajesh calls Sushma "Sushi" and Sushma calls Rajesh "Raj" ❤️</p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>Most excited about for their wedding?</h3>
              </div>
              <div className="flip-card-back">
                <p>Not having to say goodbye at the airport anymore!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory; 