import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CupboardDetailPage = ({ onAddToCart }) => {
  const navigate = useNavigate();
  const [selectedSofa, setSelectedSofa] = useState(null); // State for the selected sofa

  const sofaImages = [
    require('../sofa_images/sofa_1.jpg'),
    require('../sofa_images/sofa_2.jpg'),
    require('../sofa_images/sofa_3.jpg'),
    require('../sofa_images/sofa_4.jpg'),
    require('../sofa_images/sofa_5.jpg'),
  ];

  const sofas = [
    { id: 1, name: 'sofa set 1', price: '40,000', image: sofaImages[0]},
    { id: 2, name: 'sofa set 2', price: '10,000', image: sofaImages[1]},
    { id: 3, name: 'sofa set 3', price: '40,000', image: sofaImages[2]},
    { id: 4, name: 'sofa set 4', price: '15,000', image: sofaImages[3]},
    { id: 5, name: 'sofa set 5', price: '50,000', image: sofaImages[4]},
  ];

  const handleCardClick = (sofa) => {
    setSelectedSofa(sofa);
  };

  const handleAddToCart = (sofa) => {
    const storedCartItems = localStorage.getItem('cartItems');
    const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

    const updatedCart = [...cartItems, sofa];
    localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Save cart to localStorage
    alert(`${sofa.name} added to wishlist!`);
  };

  const closeModal = () => {
    setSelectedSofa(null); // Close the modal
  };

  return (
    <div className="sofa-detail-page">
      <h1>Explore Our Cupboards Collections</h1>
      <div className="sofa-list">
        {sofas.map((sofa) => (
          <div key={sofa.id} className="sofa-card" onClick={() => handleCardClick(sofa)}>
            <h2>{sofa.name}</h2>
            <img
              src={sofa.image}
              alt={sofa.name}
              style={{ width: '300px', height: '200px' }}
            />
             <p style={{ fontWeight: 'bold', marginTop: '5px' }}>price:{sofa.price}</p>
             <button onClick={() => handleAddToCart(sofa)}>Add To wishlist</button>


          </div>
        ))}
      </div>
      <button onClick={() => navigate('/products')}>Back to Products</button>
      <button onClick={() => navigate('/wishlist')}>Go To WishList</button>


      {/* Modal for enlarged view */}
      {selectedSofa && (
        <div className="sofa-modal" onClick={closeModal}>
          <div className="sofa-modal-content" onClick={(e) => e.stopPropagation()}>
            <h1>{selectedSofa.name}</h1>
            <img src={selectedSofa.image} alt={selectedSofa.name} />
            <h2>{selectedSofa.price}</h2>
            <button onClick={() => handleAddToCart(selectedSofa)}>Add To wishlist</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CupboardDetailPage;
