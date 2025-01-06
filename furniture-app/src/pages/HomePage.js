// src/pages/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  


  const handleSignupClick = () => {
    navigate('/signup'); // Navigate to signup page
  };

  const handleLoginClick = () => {
     navigate('/login');
  };

  return (
    <div className="home-page">
      <h1>Welcome To The Furniture Store</h1>
      <div className="buttons">
        <button onClick={handleSignupClick}>Sign Up</button>
        <button onClick={handleLoginClick}>Login</button>
      </div>

   
    </div>
  );
};

export default HomePage;
