import React from 'react';

const OurStory = () => {
  return (
    <section className="story-section">
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
            Rajesh and Sushma first crossed paths in the corridors of their engineering college,
            a quiet boy with a spark in his eyes, and a confident, ever curious girl who somehow
            always knew the right thing to say. It started with casual chats over assignments, 
            grew through late night messaging, and soon turned into something that neither of 
            them could put into words but both felt deeply.
            </p>
            
            <p>
            After graduation, fate had more in store, they ended up working in the same company, 
            side by side, coding their way through chaotic sprints and shared lunch breaks.
            Their bond only deepened as they navigated early careers and the beautiful mess of adulthood, 
            hand in hand.
            </p>
            
            <p>
            Then came a big turn, Rajesh got an opportunity to pursue his higher studies in Germany.
            It wasn’t easy. Time zones, distance, and longing came into the picture but what stayed
            constant was their commitment to each other. While Rajesh built his life abroad, 
            Sushma cheered him on from afar, always just one call away, his biggest supporter and oldest friend.
            </p>
            
            <p>
            After 11 incredible years of laughter, challenges, milestones, and a love 
            that only grew stronger with time, they’re finally stepping into the next chapter of their journey.
            Now, as we prepare to say "I do" in front of our loved ones, we invite you 
            to be part of our special day. This isn't just our wedding, it's the beginning 
            of a new chapter in our love story, and we're excited to share it with you.
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