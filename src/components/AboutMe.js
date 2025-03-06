import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me text-center my-5">
      <img
        src={process.env.PUBLIC_URL + '/images/profile-pic.png'}
        alt="Profile"
        className="profile-pic"
      />
      <h2>About Me</h2>
      <p>
        Hello, I'm <span className="neon-name">Robert Filep</span>! I'm a passionate developer with a love for retro aesthetics and modern technology. I specialize in building creative and responsive web applications. Welcome to my portfolio!
      </p>
    </section>
  );
}

export default AboutMe;