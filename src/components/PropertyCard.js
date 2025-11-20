import React from 'react';
import '../styles/PropertyCard.css';

const PropertyCard = ({ property, onClick }) => {
  // Safe image handling
  const getImageUrl = (property) => {
    if (property.images && property.images.length > 0) {
      return property.images[0];
    }
    if (property.image) {
      return property.image;
    }
    return 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80';
  };

  return (
    <div className="property-card" onClick={onClick}>
      <img 
        src={getImageUrl(property)} 
        alt={property.title} 
        className="property-image" 
      />
      <div className="property-content">
        <div className="property-header">
          <h3 className="property-title">{property.title}</h3>
          {property.superhost && <span className="superhost-tag">SUPERHOST</span>}
        </div>
        
        <div className="property-details">
          <div className="property-capacity">
            <i className="fas fa-users"></i>
            <span>{property.capacity}</span>
          </div>
          <div className="property-rating">
            <i className="fas fa-star"></i>
            <span>{property.rating}</span>
          </div>
        </div>
        
        <div className="property-price">
          <span className="property-price-amount">${property.price}</span>
          <span className="property-price-text">/ night</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;