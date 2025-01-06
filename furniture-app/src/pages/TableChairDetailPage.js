import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const TableChairDetailPage = ({ onAddToCart }) => {
  const navigate = useNavigate();
  const [selectedSofa, setSelectedSofa] = useState(null); // State for the selected sofa

  const sofaImages = [
    require('../sofa_images/table_chair_1.jpg'),
    require('../sofa_images/table_chair_2.jpg'),
    require('../sofa_images/table_chair_3.jpg'),
    require('../sofa_images/table_chair_4.jpg'),
    require('../sofa_images/table_chair_5.jpg'),
  ];

  const sofas = [
    { id: 1, name: 'Table-Chair 1', price: '40,000', image: sofaImages[0]},
    { id: 2, name: 'Table-Chair 2', price: '10,000', image: sofaImages[1]},
    { id: 3, name: 'Table-Chair 3', price: '40,000', image: sofaImages[2]},
    { id: 4, name: 'Table-Chair 4', price: '15,000', image: sofaImages[3]},
    { id: 5, name: 'Table-Chair 5', price: '50,000', image: sofaImages[4]},
  ];

  const handleCardClick = (table_chair) => {
    setSelectedSofa(table_chair);
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
      <h1>Explore Our Table-Chairs Collections</h1>
      <div className="sofa-list">
        {sofas.map((table_chair) => (
          <div key={table_chair.id} className="sofa-card" onClick={() => handleCardClick(table_chair)}>
            <h2>{table_chair.name}</h2>
            <img
              src={table_chair.image}
              alt={table_chair.name}
              style={{ width: '300px', height: '200px' }}
            />
             <p style={{ fontWeight: 'bold', marginTop: '5px' }}>price:{table_chair.price}</p>
             <button onClick={() => handleAddToCart(table_chair)}>Add To wishlist</button>

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

export default TableChairDetailPage;
