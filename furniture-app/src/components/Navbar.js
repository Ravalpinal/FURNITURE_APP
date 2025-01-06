// Navbar.js
import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import logo from '../logo.jpg';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    
    const query = searchQuery.toLowerCase();

    if (query === 'sofa') {
      navigate('/sofas');
    } else if (query === 'cupboard') {
      navigate('/cupboards');
    } else if (query === 'bed') {
      navigate('/beds');
    } else if (query === 'dining table') {
      navigate('/dining-tables');
    } else if (query === 'table chair') {
      navigate('/table-chairs');
    } else {
      alert('Product not found');
    }
  };

  return (
    <nav className="navbar">
       
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-link">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="navbar-name">NestCraft</h1>
          </div>
        </Link>
        <ul className="nav-menu">
        <form className="search-form" onSubmit={handleSearch}>
        
        <input 
          type="text" 
          placeholder="🔎Search products..." 
          className="search-input" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        {/* <button type="submit" className="search-button">🔎</button> */}
      </form>
      
          <li className="nav-item">
            <Link to="/products" className="nav-links">🏠Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/billing" className="nav-links">🛒Cart</Link>
          </li>
          <li className="nav-item">
            <Link to="/wishlist" className="nav-links">❤️WishList</Link>
          </li>
          <li className="nav-item">
            <Link to="/order-summary" className="nav-links">📦My Orders</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">Logout🤵</Link>
          </li>
        </ul>

      </div>
     
    </nav>
  );
};

export default Navbar;
