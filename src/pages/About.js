import React from 'react';
import '../styles/Pages.css';

const About = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="page-content">
          <h1>About PropertyListings</h1>
          <div className="page-section">
            <h2>Our Story</h2>
            <p>
              Founded in 2023, PropertyListings emerged from a simple idea: everyone should 
              be able to find their perfect getaway. Whether you're looking for a cozy cabin 
              in the woods or a modern villa with stunning views, we connect travelers with 
              unique properties around the world.
            </p>
          </div>
          
          <div className="page-section">
            <h2>Our Mission</h2>
            <p>
              We believe that where you stay can transform your trip into an unforgettable 
              experience. Our mission is to make discovering and booking unique properties 
              seamless and enjoyable.
            </p>
          </div>
          
          <div className="page-section">
            <h2>Why Choose Us?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <i className="fas fa-shield-alt"></i>
                <h3>Verified Properties</h3>
                <p>Every property is carefully verified to ensure quality and accuracy.</p>
              </div>
              
              <div className="feature-card">
                <i className="fas fa-star"></i>
                <h3>Superhost Guarantee</h3>
                <p>Our Superhosts provide exceptional experiences and top-rated service.</p>
              </div>
              
              <div className="feature-card">
                <i className="fas fa-headset"></i>
                <h3>24/7 Support</h3>
                <p>Our support team is available around the clock to help you.</p>
              </div>
              
              <div className="feature-card">
                <i className="fas fa-map-marker-alt"></i>
                <h3>Global Reach</h3>
                <p>Discover unique properties in destinations worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;