import React, { useState } from 'react';
import '../styles/Pages.css';

const HelpCenter = () => {
  const [activeCategory, setActiveCategory] = useState('booking');

  const faqData = {
    booking: [
      {
        question: "How do I book a property?",
        answer: "To book a property, simply browse our listings, select your desired dates, and click the 'Book Now' button. You'll be guided through the booking process step by step."
      },
      {
        question: "Can I modify my booking?",
        answer: "Yes, you can modify your booking up to 48 hours before your check-in date. Log into your account, go to 'My Trips', and select 'Change Reservation'."
      },
      {
        question: "What is your cancellation policy?",
        answer: "Our cancellation policy varies by property. You can find the specific cancellation policy for each property on its listing page under 'Cancellation Policy'."
      }
    ],
    payment: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and in some regions, Apple Pay and Google Pay."
      },
      {
        question: "When is my payment processed?",
        answer: "Payment is processed immediately when you book an instant booking property. For properties that require host approval, payment is processed once the host accepts your booking request."
      },
      {
        question: "Is my payment information secure?",
        answer: "Yes, we use industry-standard encryption and security measures to protect your payment information. We never store your full credit card details on our servers."
      }
    ],
    hosting: [
      {
        question: "How do I become a host?",
        answer: "To become a host, click on 'Become a Host' in the main navigation, create your listing by adding photos, description, and availability, and set your price. Our team will review your listing before it goes live."
      },
      {
        question: "What are the requirements to be a Superhost?",
        answer: "To qualify as a Superhost, you must maintain a 4.8+ overall rating, have a 90%+ response rate, host at least 10 trips per year, and have less than 1% cancellation rate."
      },
      {
        question: "How do I get paid as a host?",
        answer: "Hosts receive payment 24 hours after guest check-in. You can set up your preferred payment method in your host account settings."
      }
    ]
  };

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-content">
          <h1>Help Center</h1>
          
          <div className="help-categories">
            <button 
              className={`category-btn ${activeCategory === 'booking' ? 'active' : ''}`}
              onClick={() => setActiveCategory('booking')}
            >
              <i className="fas fa-calendar-check"></i>
              Booking & Reservations
            </button>
            
            <button 
              className={`category-btn ${activeCategory === 'payment' ? 'active' : ''}`}
              onClick={() => setActiveCategory('payment')}
            >
              <i className="fas fa-credit-card"></i>
              Payments & Refunds
            </button>
            
            <button 
              className={`category-btn ${activeCategory === 'hosting' ? 'active' : ''}`}
              onClick={() => setActiveCategory('hosting')}
            >
              <i className="fas fa-home"></i>
              Hosting
            </button>
          </div>
          
          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqData[activeCategory].map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="contact-promo">
            <h2>Still need help?</h2>
            <p>Our support team is here for you 24/7</p>
            <div className="contact-options">
              <div className="contact-option">
                <i className="fas fa-comments"></i>
                <h3>Live Chat</h3>
                <p>Get instant help from our support team</p>
              </div>
              
              <div className="contact-option">
                <i className="fas fa-envelope"></i>
                <h3>Email Support</h3>
                <p>Send us a message and we'll respond within 24 hours</p>
              </div>
              
              <div className="contact-option">
                <i className="fas fa-phone"></i>
                <h3>Phone Support</h3>
                <p>Call us at +1 (555) 123-HELP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;