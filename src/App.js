import React from 'react';
import ProjectCard from './components/ProjectCard';

function App() {
  const projects = [
    {
      title: "Semester Project 2",
      description: "Auctionary - Bid Smart, Win Big Auctionary is a user-friendly auction platform where individuals can browse, bid, and list auction items with ease. The platform showcases auctions through a dynamic carousel of featured items, includes a comprehensive search system, and allows users to create new listings.",
      image: process.env.PUBLIC_URL + "/images/SemesterProject2.png",
      github: "https://github.com/robfil50219/Semester-Project-2.git",
      live: "https://auctionarygo.netlify.app/"
    },
    {
      title: "JavaScript Frameworks CA",
      description: "ShopSphere is an e-commerce platform built using React, aimed at providing a seamless shopping experience. It integrates several features, including product listing, cart functionality, checkout process, and a contact page. The website fetches product data from an external API and allows users to search and filter products, add items to the cart, and complete their purchases.",
      image: process.env.PUBLIC_URL + "/images/JavascriptFrameworks.png",
      github: "https://github.com/robfil50219/Javascript-Frameworks-Ca.git",
      live: "https://shopspherenow.netlify.app"
    },
    {
      title: "Project Exam 2",
      description: "Holidaze is a modern accommodation booking platform where users can search for and book venues for their getaways. Venue managers can register, add, edit, and delete venues. The application features responsive design, interactive components, and comprehensive testing.",
      image: process.env.PUBLIC_URL + "/images/ProjectExam2.png",
      github: "https://github.com/robfil50219/project-exam-2.git",
      live: "https://holidaze-robert-filep.netlify.app/"
    }
  ];

  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1>My Portfolio</h1>
        <p>Welcome to my portfolio. Below are some of my projects.</p>
      </header>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
