import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ProductListPage from './pages/ProductListPage';
import SofaDetailPage from './pages/SofaDetailPage';
import BedDetailPage from './pages/BedDetailPage';
import TableChairDetailPage from './pages/TableChairDetailPage';
import CupboardDetailPage from './pages/CupboardDetailPage';
import DiningTableDetailPage from './pages/DiningTableDetailPage';
import CartPage from './pages/CartPage'; // Assuming you have CartPage
import BillingPage from './pages/BillingPage'; 
import './App.css';
import PaymentPage from './pages/PaymentPage';
import OrderSummary from './pages/OrderSummary';

const App = () => {
  const [cartItems,setCartItems] = useState([]);

  const [wishlistItems, setWishlistItems] = useState([]);

  // Function to add items to the cart

  // Function to add items to the wishlist
  const handleAddToWishlist = (product) => {
    setWishlistItems([...wishlistItems, product]);
  };

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    alert(`${item.name} added to cart!`);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/products"
          element={
            <ProductListPage
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
            />
          }
        />
        <Route path="/sofas" element={<SofaDetailPage onAddToCart={handleAddToCart} />} />
        <Route path="/beds" element={<BedDetailPage onAddToCart={handleAddToCart} />} />
        <Route path="/table-chairs" element={<TableChairDetailPage onAddToCart={handleAddToCart} />} />
        <Route path="/cupboards" element={<CupboardDetailPage onAddToCart={handleAddToCart} />} />
        <Route path="/dining-tables" element={<DiningTableDetailPage onAddToCart={handleAddToCart}/>} />
        <Route path="/wishlist" element={<CartPage cartItems={cartItems} />} />
        <Route path="/logout" component={HomePage} />
        <Route path="/billing" element={<BillingPage cartItems={cartItems} />} />
        <Route path="/payment" element={<PaymentPage/>} />
        <Route path="/order-summary" element={<OrderSummary />} />


      </Routes>
    </Router>
  );
};

export default App;
