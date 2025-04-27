import React from 'react';

function TourCard({ tour, onRemove }) {
  return (
    <div className="tour-card">
      <img src={tour.image} alt={tour.name} className="tour-image" />
      <div className="tour-details">
        <h3>{tour.name}</h3>
        <p>{tour.info}</p>
        <p className="tour-price">Price: ${tour.price}</p>
        <button className="remove-btn" onClick={() => onRemove(tour.id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourCard;