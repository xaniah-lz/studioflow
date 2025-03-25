import React, { useState, useRef } from "react";
import "./Home.css";
import speaker from "../images/speaker1.jpg";

const Home = () => {
  const [showContainer1, setShowContainer1] = useState(false);
  const container1Ref = useRef(null);

  const handleDotsClick = () => {
    setShowContainer1(!showContainer1);
    setTimeout(() => {
      if (container1Ref.current) {
        container1Ref.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div>
      <main>
        <h2 className="tagline">Rent. <span>Set the Mood.</span></h2>
        <h1 className="main-heading">Make the Magic Happen.</h1>
        <p className="description">StudioFlow provides top-quality sound and lighting equipment for any event, big or small.</p>
        <button className="book-now">BOOK NOW</button>
      </main>

      <div className="container">
        <div className="header">
          <span>Event Highlights</span>
          <div className="dots" onClick={handleDotsClick}>
            • • •
          </div>
        </div>
        <div className="gallery">
          {[...Array(4)].map((_, index) => (
            <div className="item" key={index}>
              <img src={speaker} alt="Speaker" />
              <p>Alto Speaker</p>
            </div>
          ))}
        </div>
      </div>

      {showContainer1 && (
        <div className="container1" ref={container1Ref}>
          <div className="title-container">
            <h2 className="title">Event Highlights</h2>
            </div>
          <div className="video-container"></div>
          <div className="gallery1">
            {[...Array(10)].map((_, index) => (
              <div className="item1" key={index}>
                <img src={speaker} alt="Speaker" />
                <p>Alto Speaker</p>
              </div>
            ))}
          </div>
        </div>
      )}
       <div className="testimonials-container">
      <h2 className="title">Testimonials <span className="line"></span></h2>
      <div className="carousel">
        <button className="prev">&#x2039;</button>
        <div className="cards">
          <div className="card">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="customer-info">
              <img src="user-icon.png" alt="User" />
              <span>Customer Name</span>
              <span className="rating">⭐ 4.9</span>
            </div>
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="customer-info">
              <img src="user-icon.png" alt="User" />
              <span>Customer Name</span>
              <span className="rating">⭐ 4.9</span>
            </div>
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="customer-info">
              <img src="user-icon.png" alt="User" />
              <span>Customer Name</span>
              <span className="rating">⭐ 4.9</span>
            </div>
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="customer-info">
              <img src="user-icon.png" alt="User" />
              <span>Customer Name</span>
              <span className="rating">⭐ 4.9</span>
            </div>
          </div>
        </div>
        <button className="next">&#x203A;</button>
      </div>
      <div className="dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>

    <div className="faq-container">
      <div className="faq-content">
        <h2>FAQ’s</h2>
        <p>Everything You Need to Know</p>
        <select>
          <option>Lorem ipsum dolor sit amet?</option>
        </select>
        <select>
          <option>Lorem ipsum dolor sit amet?</option>
        </select>
        <select>
          <option>Lorem ipsum dolor sit amet?</option>
        </select>
      </div>
      <div className="faq-image">
        <img src={speaker} alt="FAQ Illustration" />
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



export default Home;
