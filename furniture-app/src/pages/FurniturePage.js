import React from 'react';
import FurnitureList from '../components/FurnitureList';
import furnitureData from '../data/furnitureData';

const FurniturePage = () => {
  return (
    <div>
      <h1>Furniture Catalog</h1>
      <FurnitureList furnitureItems={furnitureData} />
    </div>
  );
};

export default FurniturePage;
