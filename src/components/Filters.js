import React from 'react';
import '../styles/Filters.css';

const Filters = ({ 
  locations, 
  selectedLocations, 
  onLocationToggle, 
  showSuperhost, 
  onSuperhostToggle, 
  propertyType, 
  onPropertyTypeChange 
}) => {
  return (
    <div className="filters">
      <div className="filter-group">
        <h3>Filter by Location</h3>
        <div className="location-options">
          {locations.map(location => (
            <div 
              key={location}
              className={`location-option ${selectedLocations.includes(location) ? 'selected' : ''}`}
              onClick={() => onLocationToggle(location)}
            >
              {location}
            </div>
          ))}
        </div>
      </div>
      
      <div className="filter-group">
        <h3>Filter by Host</h3>
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input 
              type="checkbox" 
              checked={showSuperhost}
              onChange={onSuperhostToggle}
            />
            Show only Superhost properties
          </label>
        </div>
      </div>
      
      <div className="filter-group">
        <h3>Filter by Property Type</h3>
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input 
              type="radio" 
              name="propertyType" 
              checked={propertyType === 'all'}
              onChange={() => onPropertyTypeChange('all')}
            />
            All Properties
          </label>
          <label className="checkbox-label">
            <input 
              type="radio" 
              name="propertyType" 
              checked={propertyType === '1 bedroom'}
              onChange={() => onPropertyTypeChange('1 bedroom')}
            />
            1 Bedroom
          </label>
          <label className="checkbox-label">
            <input 
              type="radio" 
              name="propertyType" 
              checked={propertyType === '2 bedrooms'}
              onChange={() => onPropertyTypeChange('2 bedrooms')}
            />
            2 Bedrooms
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;