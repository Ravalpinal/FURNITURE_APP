// src/pages/WishlistPage.js
import React from 'react';

const WishlistPage = ({ wishlistItems }) => {
  return (
    <div>
      <h1>Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <ul>
          {wishlistItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistPage;
