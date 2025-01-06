import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const BedDetailPage = ({ onAddToCart }) => {
  const navigate = useNavigate();
  const [selectedSofa, setSelectedSofa] = useState(null); // State for the selected sofa

  const sofaImages = [
    require('../sofa_images/bed_1.jpg'),
    require('../sofa_images/bed_2.jpg'),
    require('../sofa_images/bed_3.jpg'),
    require('../sofa_images/bed_4.jpg'),
    require('../sofa_images/bed_5.jpg'),
  ];

  const sofas = [
    { id: 1, name: 'Bed 1', price: '40,000', image: sofaImages[0]},
    { id: 2, name: 'Bed 2', price: '10,000', image: sofaImages[1]},
    { id: 3, name: 'Bed 3', price: '40,000', image: sofaImages[2]},
    { id: 4, name: 'Bed 4', price: '15,000', image: sofaImages[3]},
    { id: 5, name: 'Bed 5', price: '50,000', image: sofaImages[4]},
  ];

  const handleCardClick = (bed) => {
    setSelectedSofa(bed);
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
      <h1>Explore Our Beds Collections</h1>
      <div className="sofa-list">
        {sofas.map((bed) => (
          <div key={bed.id} className="sofa-card" onClick={() => handleCardClick(bed)}>
            <h2>{bed.name}</h2>
            <img
              src={bed.image}
              alt={bed.name}
              style={{ width: '300px', height: '200px' }}
            />
             <p style={{ fontWeight: 'bold', marginTop: '5px' }}>price:{bed.price}</p>
             <button onClick={() => handleAddToCart(bed)}>Add To wishlist</button>
            
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/products')}>Back to Products</button>
      <button onClick={() => navigate('/cart')}>Go To wishlist</button>


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

export default BedDetailPage;
