import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-left">© {new Date().getFullYear()} Robert Filep</p>
      <a href="/contact" className="footer-center">Contact Me</a>
    </footer>
  );
}

export default Footer;