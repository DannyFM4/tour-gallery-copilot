import React from 'react';

// TourCard component to display details of a single tour
function TourCard({ tour, onRemove }) {
  return (
    <div className="tour-card">
      {/* Display the tour image */}
      <img src={tour.image} alt={tour.name} className="tour-image" />
      <div className="tour-details">
        {/* Display the tour name, info, and price */}
        <h3>{tour.name}</h3>
        <p>{tour.info}</p>
        <p className="tour-price">Price: ${tour.price}</p>
        {/* Button to remove the tour */}
        <button className="remove-btn" onClick={() => onRemove(tour.id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourCard;