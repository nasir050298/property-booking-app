import React from 'react';
import PropertyCard from './PropertyCard';
import '../styles/App.css';

const PropertyList = ({ properties, onPropertyClick }) => {
  console.log('PropertyList rendering with', properties.length, 'properties');
  
  return (
    <div className="property-list">
      {properties.length > 0 ? (
        properties.map(property => (
          <PropertyCard 
            key={property.id} 
            property={property} 
            onClick={() => {
              console.log('Property card clicked:', property.title);
              onPropertyClick(property);
            }}
          />
        ))
      ) : (
        <div className="no-properties">
          <h3>No properties match your filters</h3>
          <p>Try adjusting your filters to see more results.</p>
        </div>
      )}
    </div>
  );
};

export default PropertyList;