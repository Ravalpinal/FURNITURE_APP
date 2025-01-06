import React from 'react';
// Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 NestCraft</p>
        <ul className="footer-links">
          <li>
            <a href="/contact" className="footer-link">Contact Us</a>
          </li>
          <li>
            <a href="www.ikea.com" className="footer-link">info@NestCraft.com</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
