import React from "react"; 
import "./ContactUs.css";
import locationIcon from "../images/location.png";
import phoneIcon from "../images/phone-call.png";
import emailIcon from "../images/mail.png";
import clockIcon from "../images/clock.png";
import facebookIcon from "../images/facebook.png";
import instagramIcon from "../images/instagram.png";
import youtubeIcon from "../images/youtube.png";

const ContactUs = () => {
  return (
    <div>
    <div className="contact-container">
      {/* Left Section */}
      <div className="contact-left">
        <h4 className="contact-subtitle"> ━━━━━ KEEP CLOSE</h4>
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-description">
          Let’s bring your event to life – from lights to sound, we’ve got you
          covered. Contact us today and make every moment unforgettable!
        </p>

        <div className="contact-info">
          <ContactItem icon={locationIcon} text="123 Event Avenue, Sound City, ST 45678, United States" alt="Location" />
          <ContactItem icon={phoneIcon} text="+63 912 345 6789 (02) 8123 4567" alt="Phone" />
          <ContactItem icon={clockIcon} text="Monday - Saturday | 9:00 AM - 7:00 PM" alt="Hours" />
          <ContactItem icon={emailIcon} text="studioflow@gmail.com" alt="Email" />
        </div>

        <hr className="divider" />

        <div className="social-icons">
          <p>FOLLOW US</p>
          <SocialIcon src={facebookIcon} alt="Facebook" />
          <SocialIcon src={instagramIcon} alt="Instagram" />
          <SocialIcon src={youtubeIcon} alt="YouTube" />
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="contact-right">
        <h2 className="contact-form-title">Your Details</h2>
        <p>Let us know how to get back to you.</p>

        <form className="contact-form">
          <div className="form-group">
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Enter subject" className="full-width" required />
          </div>

          <div className="input-container">
            <label htmlFor="message">Comments / Questions</label>
            <textarea id="message" placeholder="Type your message" className="full-width" required></textarea>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
    <footer className="footer">
      <div className="logo">YOUR LOGO<br /><small>Your Tagging here</small></div>
      <div className="column">
        <h3>Title here</h3>
        <p>text</p>
        <p>text</p>
        <p>text</p>
      </div>
      <div className="column">
        <h3>Title here</h3>
        <p>text</p>
        <p>text</p>
        <p>text</p>
      </div>
      <div className="column">
        <h3>Contact Us</h3>
        <p>info@company.com</p>
        <p>123-456-7890</p>
      </div>
      
    </footer>
    </div>
    
  );
};

const ContactItem = ({ icon, text, alt }) => (
  <div className="contact-item">
    <img src={icon} alt={alt} className="contact-icon" />
    <p>{text}</p>
  </div>
);

const SocialIcon = ({ src, alt }) => (
  <img src={src} alt={alt} className="social-icon" />
);


export default ContactUs;
