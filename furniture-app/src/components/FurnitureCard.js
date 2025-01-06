import React from 'react';

const FurnitureCard = ({ item, addToCart }) => {
  return (
    <div className="furniture-card">
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>${item.price}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default FurnitureCard;
