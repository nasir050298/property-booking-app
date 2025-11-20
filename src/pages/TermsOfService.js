import React from 'react';
import '../styles/Pages.css';

const TermsOfService = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="page-content">
          <h1>Terms of Service</h1>
          
          <div className="page-section">
            <p><strong>Last Updated: March 15, 2023</strong></p>
            <p>
              Welcome to PropertyListings. These Terms of Service govern your use of our 
              website and services. By accessing or using PropertyListings, you agree to 
              be bound by these Terms.
            </p>
          </div>
          
          <div className="page-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using PropertyListings, you accept and agree to be bound 
              by the terms and provision of this agreement.
            </p>
          </div>
          
          <div className="page-section">
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily use PropertyListings for personal, 
              non-commercial transitory viewing only. This is the grant of a license, 
              not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose or for any public display;</li>
              <li>attempt to reverse engineer any software contained on PropertyListings;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
          </div>
          
          <div className="page-section">
            <h2>3. Bookings and Payments</h2>
            <p>
              When you make a booking through PropertyListings, you agree to our cancellation 
              policy and to pay any cancellation fees that apply. PropertyListings collects 
              payments on behalf of the property hosts.
            </p>
          </div>
          
          <div className="page-section">
            <h2>4. User Responsibilities</h2>
            <p>
              You are responsible for your own acts and omissions and are also responsible 
              for the acts and omissions of anyone you invite to join or provide access to 
              any property.
            </p>
          </div>
          
          <div className="page-section">
            <h2>5. Limitation of Liability</h2>
            <p>
              In no event shall PropertyListings, nor its directors, employees, partners, 
              agents, suppliers, or affiliates, be liable for any indirect, incidental, 
              special, consequential or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses, resulting 
              from your access to or use of or inability to access or use the service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;