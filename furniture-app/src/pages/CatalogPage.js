import React from 'react';
import furnitureData from '../data/furnitureData';
import FurnitureList from '../components/FurnitureList';

const CatalogPage = ({ addToCart }) => {
  return (
    <div>
      <h1>Furniture Catalog</h1>
      <FurnitureList furnitureItems={furnitureData} addToCart={addToCart} />
    </div>
  );
};

export default CatalogPage;
