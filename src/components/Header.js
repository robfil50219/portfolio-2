// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';
import LoadingText from './LoadingText';

function Header() {
  const [loading, setLoading] = useState(true);

  // Simulate a 3-second loading period
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="pixel-header container-fluid">
      <div className="header-container">
        <div className="header-left">
          <motion.img
            src={process.env.PUBLIC_URL + '/images/profile-pic.JPG'}
            alt="Profile"
            className="header-profile-pic"
            initial={{ rotate: 0 }}
            animate={loading ? { rotate: 360 } : { rotate: 0 }}
            transition={
              loading
                ? { repeat: Infinity, duration: 1, ease: 'linear' }
                : { duration: 0.5 }
            }
            whileHover={
              !loading
                ? { rotate: 360, transition: { repeat: Infinity, duration: 1, ease: 'linear' } }
                : {}
            }
          />
          {loading && <LoadingText />}
        </div>
        <div className="header-center">
          <h1>
            <span className="header-text-part1">Welcome To My</span> <span className="header-text-part2">Portfolio</span>
          </h1>
          <span className="underline"></span>
        </div>
        <div className="header-right">
          {/* Empty div to balance layout */}
        </div>
      </div>
    </header>
  );
}

export default Header;