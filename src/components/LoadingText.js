import React, { useState, useEffect } from 'react';
import './LoadingText.css';

function LoadingText() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return <p className="loading-text">Loading{dots}</p>;
}

export default LoadingText;
