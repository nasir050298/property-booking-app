import React from 'react';
import { useParams, Link } from 'react-router-dom';
import propertyData from '../data/properties.json';
import '../styles/PropertyDetail.css';

const PropertyDetail = () => {
  const { id } = useParams();
  const property = propertyData.find(p => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="property-detail">
        <div className="container">
          <div className="not-found">
            <h2>Property not found</h2>
            <Link to="/" className="back-btn">← Back to listings</Link>
          </div>
        </div>
      </div>
    );
  }

  // Safe image handling for both data structures
  const getImages = (property) => {
    if (property.images && property.images.length > 0) {
      return property.images;
    }
    if (property.image) {
      return [property.image]; // Convert single image to array
    }
    // Fallback images
    return [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    ];
  };

  const images = getImages(property);

  // Safe data access with fallbacks
  const amenities = property.amenities || ['WiFi', 'Kitchen', 'Free parking'];
  const descriptionFull = property.descriptionFull || property.description;
  const reviews = property.reviews || Math.floor(Math.random() * 100) + 20;
  
  const host = property.host || {
    name: 'Property Host',
    joined: '2020', 
    responseRate: 95,
    responseTime: 'within a few hours'
  };

  return (
    <div className="property-detail">
      <div className="container">
        <Link to="/" className="back-button-outline">Back to Listings</Link>
        
        <div className="property-gallery">
          <div className="main-image">
            <img src={images[0]} alt={property.title} />
          </div>
          <div className="thumbnail-grid">
            {images.slice(1, 3).map((image, index) => (
              <img key={index} src={image} alt={`${property.title} ${index + 2}`} />
            ))}
          </div>
        </div>
        
        <div className="property-main-content">
          <div className="property-content">
            <div className="property-header">
              <h1>{property.title}</h1>
              <div className="property-meta">
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <span>{property.rating}</span>
                  <span className="reviews">({reviews} reviews)</span>
                </div>
                <div className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{property.location}</span>
                </div>
              </div>
            </div>
            
            <div className="property-info">
              <div className="capacity">
                <i className="fas fa-users"></i>
                <span>{property.capacity}</span>
                {property.superhost && <span className="superhost-tag">SUPERHOST</span>}
              </div>
            </div>
            
            <div className="property-description">
              <h2>About this property</h2>
              <p>{descriptionFull}</p>
            </div>
            
            <div className="property-amenities">
              <h2>What this place offers</h2>
              <div className="amenities-grid">
                {amenities.map((amenity, index) => (
                  <div key={index} className="amenity-item">
                    <i className="fas fa-check"></i>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="property-host">
              <h2>Hosted by {host.name}</h2>
              <div className="host-info">
                <p>Joined in {host.joined}</p>
                <p>Response rate: {host.responseRate}%</p>
                <p>Response time: {host.responseTime}</p>
              </div>
            </div>
          </div>
          
          <div className="booking-widget">
            <div className="price-card">
              <img 
                src={images[0]} 
                alt={property.title}
                className="booking-card-image"
              />
              <div className="booking-card-content">
                <div className="price-header">
                  <h3 className="property-title-small">{property.title}</h3>
                  <div className="price">
                    <strong>${property.price}</strong>
                  </div>
                </div>
                
                <div className="booking-dates">
                  <div className="date-input">
                    <label>Check-in</label>
                    <input type="date" />
                  </div>
                  <div className="date-input">
                    <label>Check-out</label>
                    <input type="date" />
                  </div>
                </div>
                
                <div className="guests-input">
                  <label>Guests</label>
                  <select>
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                    <option>4 guests</option>
                  </select>
                </div>
                
                <button className="book-btn">Reserve</button>
                
                <div className="price-breakdown">
                  <div className="price-row">
                    <span>${property.price} x 5 nights</span>
                    <span>${property.price * 5}</span>
                  </div>
                  <div className="price-row">
                    <span>Cleaning fee</span>
                    <span>$50</span>
                  </div>
                  <div className="price-row">
                    <span>Service fee</span>
                    <span>$30</span>
                  </div>
                  <div className="price-row total">
                    <span>Total</span>
                    <span>${property.price * 5 + 80}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;