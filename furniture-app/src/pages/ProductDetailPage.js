// src/pages/ProductDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="product-detail-page">
      <h1>Product Detail for Product ID: {id}</h1>
      {/* Add more product details here */}
      <p>This is where the product details will be displayed.</p>
    </div>
  );
};

export default ProductDetailPage;
