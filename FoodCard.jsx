import React from "react";

function FoodCard({ food }) {
  return (
    <div className="food-card">
      <div className="food-image">
        <img
          src={food.image}
          alt={food.name}
          loading="lazy"
        />
      </div>

      <div className="food-details">
        <h3>{food.name}</h3>
        <p>{food.description}</p>

        <div className="food-price">
          ${food.price.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default FoodCard;