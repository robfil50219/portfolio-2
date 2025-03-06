import React from 'react';
import ProjectCard from './components/ProjectCard';
import './App.css';

function App() {
  const projects = [
    {
      title: "Semester Project 2",
      description: "Auctionary - Bid Smart, Win Big. Auctionary is a user-friendly auction platform with a dynamic carousel of featured items, comprehensive search, and user listings.",
      image: process.env.PUBLIC_URL + "/images/SemesterProject2.png",
      github: "https://github.com/robfil50219/Semester-Project-2.git",
      live: "https://auctionarygo.netlify.app/"
    },
    {
      title: "JavaScript Frameworks CA",
      description: "ShopSphere is an e-commerce platform built using React, offering product listings, a cart, checkout, and product search features.",
      image: process.env.PUBLIC_URL + "/images/JavascriptFrameworks.png",
      github: "https://github.com/robfil50219/Javascript-Frameworks-Ca.git",
      live: "https://shopspherenow.netlify.app"
    },
    {
      title: "Project Exam 2",
      description: "Holidaze is a modern accommodation booking platform where users can search and book venues, while managers can manage listings.",
      image: process.env.PUBLIC_URL + "/images/ProjectExam2.png",
      github: "https://github.com/robfil50219/project-exam-2.git",
      live: "https://holidaze-robert-filep.netlify.app/"
    }
  ];

  return (
    <div className="container mt-5">
      <header className="App-header text-center mb-5">
        <h1>My Portfolio</h1>
        <p>Check out my projects below!</p>
      </header>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;