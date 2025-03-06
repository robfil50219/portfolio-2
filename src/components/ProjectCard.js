// src/components/ProjectCard.js
import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti'; // Import canvas-confetti
import './ProjectCard.css';

function ProjectCard({ project }) {
  const handleCardClick = () => {
    // Fire off a confetti animation when the card is clicked
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <motion.div 
      className="card pixel-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onClick={handleCardClick}  // Attach click handler
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