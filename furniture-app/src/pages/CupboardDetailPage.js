import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CupboardDetailPage = ({ onAddToCart }) => {
  const navigate = useNavigate();
  const [selectedSofa, setSelectedSofa] = useState(null); // State for the selected sofa

  const sofaImages = [
    require('../sofa_images/cupboard_1.jpg'),
    require('../sofa_images/cupboard_2.jpg'),
    require('../sofa_images/cupboard_3.jpg'),
    require('../sofa_images/cupboard_4.jpg'),
    require('../sofa_images/cupboard_5.jpg'),
  ];

  const sofas = [
    { id: 1, name: 'Cupboard 1', price: '40,000', image: sofaImages[0]},
    { id: 2, name: 'Cupboard 2', price: '10,000', image: sofaImages[1]},
    { id: 3, name: 'Cupboard 3', price: '40,000', image: sofaImages[2]},
    { id: 4, name: 'Cupboard 4', price: '15,000', image: sofaImages[3]},
    { id: 5, name: 'Cupboard 5', price: '50,000', image: sofaImages[4]},
  ];

  const handleCardClick = (cupboard) => {
    setSelectedSofa(cupboard);
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
        {sofas.map((cupboard) => (
          <div key={cupboard.id} className="sofa-card" onClick={() => handleCardClick(cupboard)}>
            <h2>{cupboard.name}</h2>
            <img
              src={cupboard.image}
              alt={cupboard.name}
              style={{ width: '300px', height: '200px' }}
            />
             <p style={{ fontWeight: 'bold', marginTop: '5px' }}>price:{cupboard.price}</p>
             <button onClick={() => handleAddToCart(cupboard)}>Add To WishList</button>


          </div>
        ))}
      </div>
      <button onClick={() => navigate('/products')}>Back to Products</button>
      <button onClick={() => navigate('/wishlist')}>Go To wishlist</button>


      {/* Modal for enlarged view */}
      {selectedSofa && (
        <div className="sofa-modal" onClick={closeModal}>
          <div className="sofa-modal-content" onClick={(e) => e.stopPropagation()}>
            <h1>{selectedSofa.name}</h1>
            <img src={selectedSofa.image} alt={selectedSofa.name} />
            <h2>{selectedSofa.price}</h2>
            <button onClick={() => handleAddToCart(selectedSofa)}>Add TO wishlist</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CupboardDetailPage;
