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
    </div>
  );
};

export default Home;
