import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  
  const navigate = useNavigate();

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems)); // Parse the stored string to an array
    }
  }, []);

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Save updated cart to localStorage
  };

  const handleBuyNow = (item) => {
    navigate('/billing', { state: { selectedProduct: item} });
  };

  return (
    <div className="cart-page">
      <h1>WishList</h1>
      <button onClick={() => navigate('/products')}>Back to Products</button>
      <button onClick={(handleBuyNow) => navigate('/billing')}>Want To Billing</button>


      {cartItems.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-card">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>Price: {item.price}</p>
                <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                  Remove
                </button>
                <button onClick={() => handleBuyNow(item)}>
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
