import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import HelpCenter from './pages/HelpCenter';
import AboutUs from './pages/AboutUs';
import PropertyDetail from './pages/PropertyDetail'; // Make sure this import exists
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/property/:id" element={<PropertyDetail />} /> {/* Make sure this route exists */}
          </Routes>
        </main>
        <footer>
          <div className="container">
            <div className="footer-content">
              <div className="footer-logo">PropertyListings</div>
              <div className="footer-links">
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms-of-service">Terms of Service</Link>
                <Link to="/help-center">Help Center</Link>
                <Link to="/about-us">About Us</Link>
              </div>
              <div className="copyright">
                &copy; 2023 PropertyListings. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;