import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>© {new Date().getFullYear()} Robert Filep</p>
        <a href="/contact" className="contact-link">Contact Me</a>
      </div>
    </footer>
  );
}

export default Footer;
