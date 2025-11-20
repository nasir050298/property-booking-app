import React from 'react';
import '../styles/Pages.css';

const PrivacyPolicy = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="page-content">
          <h1>Privacy Policy</h1>
          
          <div className="page-section">
            <p><strong>Last Updated: March 15, 2023</strong></p>
            <p>
              At PropertyListings, we respect your privacy and are committed to protecting 
              your personal data. This privacy policy will inform you about how we look 
              after your personal data when you visit our website and tell you about your 
              privacy rights and how the law protects you.
            </p>
          </div>
          
          <div className="page-section">
            <h2>Information We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul>
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
              <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
            </ul>
          </div>
          
          <div className="page-section">
            <h2>How We Use Your Information</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul>
              <li>To register you as a new customer</li>
              <li>To process and deliver your bookings</li>
              <li>To manage our relationship with you</li>
              <li>To enable you to participate in a prize draw, competition or complete a survey</li>
              <li>To administer and protect our business and this website</li>
              <li>To deliver relevant website content and advertisements to you</li>
              <li>To use data analytics to improve our website, products/services, marketing, customer relationships and experiences</li>
            </ul>
          </div>
          
          <div className="page-section">
            <h2>Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data 
              from being accidentally lost, used or accessed in an unauthorized way, altered 
              or disclosed. In addition, we limit access to your personal data to those 
              employees, agents, contractors and other third parties who have a business 
              need to know.
            </p>
          </div>
          
          <div className="page-section">
            <h2>Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in 
              relation to your personal data including the right to request access, 
              correction, erasure, restriction, transfer, to object to processing, to 
              portability of data and (where the lawful ground of processing is consent) 
              to withdraw consent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;