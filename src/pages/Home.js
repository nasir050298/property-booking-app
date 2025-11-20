import React, { useState, useEffect } from 'react';
import Filters from '../components/Filters';
import PropertyList from '../components/PropertyList';
import PropertyModal from '../components/PropertyModal';
import propertyData from '../data/properties.json';
import '../styles/App.css';

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [showSuperhost, setShowSuperhost] = useState(false);
  const [propertyType, setPropertyType] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const locations = [...new Set(propertyData.map(property => property.location))];
  
  const toggleLocation = (location) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter(loc => loc !== location));
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  // Debug function to check if modal opens
  const handlePropertyClick = (property) => {
    console.log('Property clicked:', property.title);
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('Closing modal');
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  useEffect(() => {
    let filtered = propertyData;
    
    if (selectedLocations.length > 0) {
      filtered = filtered.filter(property => 
        selectedLocations.includes(property.location)
      );
    }
    
    if (showSuperhost) {
      filtered = filtered.filter(property => property.superhost);
    }
    
    if (propertyType !== 'all') {
      filtered = filtered.filter(property => property.type === propertyType);
    }
    
    setProperties(filtered);
  }, [selectedLocations, showSuperhost, propertyType]);

  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Peace, nature, dream</h1>
          <p>Find and book a great experience.</p>
        </div>
      </section>
      
      <div className="container">
        <Filters 
          locations={locations}
          selectedLocations={selectedLocations}
          onLocationToggle={toggleLocation}
          showSuperhost={showSuperhost}
          onSuperhostToggle={() => setShowSuperhost(!showSuperhost)}
          propertyType={propertyType}
          onPropertyTypeChange={setPropertyType}
        />
        
        <div className="stats">
          <h2>Over 200 stays</h2>
          <p>Discover unique places to stay and experiences around the world.</p>
        </div>
        
        <PropertyList 
          properties={properties} 
          onPropertyClick={handlePropertyClick} 
        />
        
        {/* Modal should always be rendered when there's a selected property */}
        {selectedProperty && (
          <PropertyModal 
            property={selectedProperty}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default Home;