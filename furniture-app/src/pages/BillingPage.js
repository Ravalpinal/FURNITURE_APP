import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BillingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedProduct = location.state?.selectedProduct; // Get the selected product from state

  const [billingItems, setBillingItems] = useState([]); // State to hold billing items
  const [quantity, setQuantity] = useState(1); // Track quantity for the selected product

  useEffect(() => {
    // Load billing items from local storage
    const storedItems = JSON.parse(localStorage.getItem('billingItems')) || [];
    setBillingItems(storedItems);
  }, []);

  const addProductToBilling = () => {
    if (selectedProduct) {
      const existingItemIndex = billingItems.findIndex(item => item.id === selectedProduct.id);
      let updatedItems;

      if (existingItemIndex !== -1) {
        // Update quantity if item already exists
        updatedItems = [...billingItems];
        updatedItems[existingItemIndex].quantity += quantity;
      } else {
        // Check if billingItems already has 5 items
        if (billingItems.length >=30) {
          alert("You can only add up to 5 products. Please remove an item before adding a new one.");
          return; // Prevent adding a new item if limit is reached
        }
        // Add new item to billing
        const newItem = {
          ...selectedProduct,
          quantity: quantity,
        };
        updatedItems = [...billingItems, newItem];
      }

      // Update state and local storage
      setBillingItems(updatedItems);
      localStorage.setItem('billingItems', JSON.stringify(updatedItems));
      setQuantity(1); // Reset quantity after adding
    }
  };

  const removeProduct = (id) => {
    const updatedItems = billingItems.filter(item => item.id !== id);
    setBillingItems(updatedItems);
    localStorage.setItem('billingItems', JSON.stringify(updatedItems)); // Update local storage
  };

  // Calculate total price for all items in the billing list
  const totalPrice = billingItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/,/g, '')) || 0;
    return total + price * item.quantity;
  }, 0);

  return (
    <div className="billing-page">
      <h1>Billing Information</h1>

      {/* Selected Product Section */}
      {selectedProduct ? (
        <>
          <h2>Selected Product</h2>
          <div className="billing-card">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="billing-item-image"
            />
            <div className="billing-item-details">
              <h2>{selectedProduct.name}</h2>
              <p>Price: {selectedProduct.price}</p>
              <div className="quantity-controls">
                <button onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
              </div>
              <p>Total for Selected: {(parseFloat(selectedProduct.price.replace(/,/g, '')) * quantity).toLocaleString()}</p>
              <button onClick={addProductToBilling}>Add to Billing</button>
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}

      {/* Billing Items Section */}
      <h2>Billing Items</h2>
      <div className="billing-items">
        {billingItems.map((item) => (
          <div key={item.id} className="billing-card">
            <img src={item.image} alt={item.name} className="billing-item-image" />
            <div className="billing-item-details">
              <h2>{item.name}</h2>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: {(parseFloat(item.price.replace(/,/g, '')) * item.quantity).toLocaleString()}</p>
              <button onClick={() => removeProduct(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      {/* Total Price Section */}
      <h2>Total Bill: {totalPrice.toLocaleString()}</h2>

      {/* Navigation Buttons */}
      <button onClick={() => navigate('/products')}>Back to Products</button>
      <button onClick={() => navigate('/payment')}>Place Order</button>
    </div>
  );
};

export default BillingPage;