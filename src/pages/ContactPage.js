import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import './ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    from_name: '',     
    from_email: '',    
    subject: '',
    message: '',
    to_name: 'Robert'  
  });
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_trae1ds';
    const templateID = 'template_2pw0qqu';
    const publicKey = 'WCEN7U8GlFXJmf6Yc'; 

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFeedback('Your message was sent successfully!');
        setFormData({
          from_name: '',
          from_email: '',
          subject: '',
          message: '',
          to_name: 'Robert'
        });
      }, (err) => {
        console.error('FAILED...', err);
        setFeedback('Failed to send message. Please try again later.');
      });
  };

  // Navigate back to the main page
  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="contact-page container mt-5">
      <h2 className="text-center">Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="from_name">Name:</label>
          <input 
            type="text" 
            id="from_name" 
            name="from_name" 
            value={formData.from_name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="from_email">Email:</label>
          <input 
            type="email" 
            id="from_email" 
            name="from_email" 
            value={formData.from_email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            value={formData.message} 
            onChange={handleChange} 
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Send Message</button>
      </form>
      {feedback && <p className="feedback text-center mt-3">{feedback}</p>}
      {/* Back to main page button */}
      <button type="button" className="btn btn-secondary mt-3" onClick={goBack}>
        Back to Main Page
      </button>
    </div>
  );
}

export default ContactPage;