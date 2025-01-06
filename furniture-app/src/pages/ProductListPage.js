// src/pages/ProductListPage.js
import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductListPage = () => {
  const navigate = useNavigate();
  const [showAboutUs, setShowAboutUs] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = 500; // Change this value to adjust when "About Us" appears

      if (scrollPosition > triggerPoint) {
        setShowAboutUs(true);  // Show "About Us" when scrolling past the trigger point
      } else {
        setShowAboutUs(false); // Hide "About Us" before reaching the trigger point
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="product-list-page">
      <Navbar/>
      <h1>Product List</h1>
      <div className="product-buttons">
        <button onClick={() => navigate('/sofas')}>Sofa-Set</button>
        <button onClick={() => navigate('/cupboards')}>Cupboard</button>
        <button onClick={() => navigate('/table-chairs')}>Table-chair</button>
        <button onClick={() => navigate('/dining-tables')}>Dining-Table</button>
        <button onClick={() => navigate('/beds')}>Bed</button>
        {/* More product buttons here */}
      </div>
      <Footer />
     
       {/* About Us Section */}
       <div className={`about-us-section ${showAboutUs ? 'visible' : 'hidden'}`}>
        <h2>About Us</h2>
        <p>
          Welcome to our furniture store.</p>
        <p>We pride ourselves on offering the best quality
          furniture to make your home feel warm and inviting.</p>
          <p> Our collection is carefully curated
          to meet the needs of every household. </p>
          <p>We focus on craftsmanship, comfort, and value.
        </p>

      </div>
     
    </div>
  );
};

export default ProductListPage;
