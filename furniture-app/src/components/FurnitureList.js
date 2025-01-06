import React from 'react';

const FurnitureList = ({ furnitureItems }) => {
  return (
    <div className="furniture-list">
      {furnitureItems.map(item => (
        <div key={item.id} className="furniture-card">
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FurnitureList;
