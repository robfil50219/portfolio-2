// src/components/ProjectCard.js
import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import './ProjectCard.css';

function ProjectCard({ project }) {
  // Function to play the sound effect
  const playSound = () => {
    const audio = new Audio(process.env.PUBLIC_URL + '/sounds/confetti.mp3');
    audio.play();
  };

  const handleCardClick = () => {
    // Trigger fireworks animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    // Play the sound effect
    playSound();
  };

  return (
    <motion.div 
      className="card bg-dark text-white pixel-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onClick={handleCardClick}
    >
      <img src={project.image} className="card-img-top" alt={project.title} />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <div className="btn-group">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline-secondary"
          >
            GitHub Repo
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-secondary"
            >
              Live Site
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;