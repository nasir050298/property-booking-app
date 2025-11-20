import React from 'react';
import '../styles/Pages.css';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Sarah founded PropertyListings with a vision to make unique accommodations accessible to everyone.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Michael leads our technology team in creating seamless experiences for our users.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Emily ensures our platform is beautiful, intuitive, and accessible to all users.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "David Kim",
      role: "Operations Director",
      bio: "David manages our global operations and ensures quality across all our listings.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-content">
          <h1>About Our Team</h1>
          
          <div className="page-section">
            <h2>Our Mission</h2>
            <p>
              At PropertyListings, we're passionate about connecting people with 
              extraordinary places to stay. Our team works tirelessly to ensure 
              every booking experience is seamless and every stay is memorable.
            </p>
          </div>
          
          <div className="page-section">
            <h2>Meet Our Team</h2>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card">
                  <img src={member.image} alt={member.name} />
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="bio">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="page-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <i className="fas fa-heart"></i>
                <h3>Passion for Travel</h3>
                <p>We believe travel enriches lives and connects cultures.</p>
              </div>
              
              <div className="value-item">
                <i className="fas fa-shield-alt"></i>
                <h3>Trust & Safety</h3>
                <p>We prioritize the safety and security of our community.</p>
              </div>
              
              <div className="value-item">
                <i className="fas fa-handshake"></i>
                <h3>Community First</h3>
                <p>We build products that serve our global community.</p>
              </div>
              
              <div className="value-item">
                <i className="fas fa-rocket"></i>
                <h3>Innovation</h3>
                <p>We continuously improve to deliver exceptional experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;