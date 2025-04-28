import React from 'react';
import TourCard from './TourCard';

// Gallery component to display a list of tours
function Gallery({ tours, onRemove }) {
  return (
    <div className="gallery">
      {/* Map over the tours array and render a TourCard for each tour */}
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default Gallery;