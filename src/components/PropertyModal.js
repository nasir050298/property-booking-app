import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PropertyModal.css';

const PropertyModal = ({ property, isOpen, onClose }) => {
  console.log('Modal props:', { isOpen, property: property?.title });

  if (!isOpen || !property) return null;

  // Safe data handling
  const getImageUrl = (property) => {
    if (property.images && property.images.length > 0) {
      return property.images[0];
    }
    if (property.image) {
      return property.image;
    }
    return 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80';
  };

  const getAmenities = (property) => {
    return property.amenities || ['WiFi', 'Kitchen', 'Free parking'];
  };

  const getReviews = (property) => {
    return property.reviews || Math.floor(Math.random() * 100) + 20;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-gallery">
          <img src={getImageUrl(property)} alt={property.title} />
        </div>
        
        <div className="modal-details">
          <div className="modal-header">
            <h2>{property.title}</h2>
            <div className="property-rating">
              <i className="fas fa-star"></i>
              <span>{property.rating}</span>
              <span className="reviews">({getReviews(property)} reviews)</span>
            </div>
          </div>
          
          <div className="property-capacity">
            <i className="fas fa-users"></i>
            <span>{property.capacity}</span>
            {property.superhost && <span className="superhost-tag">SUPERHOST</span>}
          </div>
          
          <div className="modal-amenities">
            <h4>Popular amenities</h4>
            <div className="amenities-list">
              {getAmenities(property).slice(0, 3).map((amenity, index) => (
                <span key={index} className="amenity-tag">{amenity}</span>
              ))}
            </div>
          </div>
          
          <div className="modal-description">
            <p>{property.description}</p>
          </div>
          
          <div className="modal-footer">
            <div className="modal-price">
              <strong>${property.price}</strong> / night
            </div>
            <Link 
              to={`/property/${property.id}`} 
              className="view-details-btn"
              onClick={onClose}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;