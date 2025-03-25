import React, { useState, useRef } from "react";
import "./AboutUs.css";
import speakerImage from "../images/speaker1.jpg";
import missionIcon from "../images/mission.png";
import visionIcon from "../images/view.png";
import valuesIcon from "../images/values.png";


const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);
  const moreContentRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const teamMembers = [
    { img: speakerImage, name: "Employee 1" },
    { img: speakerImage, name: "Employee 2" },
    { img: speakerImage, name: "Employee 3" },
    { img: speakerImage, name: "Employee 4" },
    { img: speakerImage, name: "Employee 5" },
    { img: speakerImage, name: "Employee 6" },
    { img: speakerImage, name: "Employee 7" },
    { img: speakerImage, name: "Employee 8" }
  ];

  const handleReadMore = () => {
    setShowMore(true);
    setTimeout(() => {
      moreContentRef.current.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (teamMembers.length - 2));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length - 2) % (teamMembers.length - 2));
  };

  return (
    <div className="container">
      <h1 className="title">ABOUT US</h1>
      <hr className="line" />
      <div className="content">
        <div className="image-box">
          <img src={speakerImage} alt="Image" />
        </div>
        <div className="text-box">
          <h2 className="history">History</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      {!showMore && (
        <button className="read-more" onClick={handleReadMore}>&#9698; Read more</button>
      )}
      
      {showMore && (
        <div ref={moreContentRef}>
          <div className="mission-vision-values">
            <div className="box">
              <img src={missionIcon} alt="Mission Icon" />
              <h2>Our <span className="highlight">Mission</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="box">
              <img src={visionIcon} alt="Vision Icon" />
              <h2>Our <span className="highlight">Vision</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="box">
              <img src={valuesIcon} alt="Values Icon" />
              <h2>Our <span className="highlight">Values</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          
          <h2 className="choose-us-title">Why Choose Us?</h2>
          <div className="why-choose-us">
            <div className="info-box">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="info-box">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="info-box">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="team-section">
            <h2 className="team-title">Meet <span>Our Team</span></h2>
            <p className="team-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="carousel">
              <button className="prev" onClick={handlePrev}>&#10094;</button>
              <div className="team-members">
                {teamMembers.slice(currentIndex, currentIndex + 3).map((member, index) => (
                  <div className="member" key={index}>
                    <img src={member.img} alt="Employee" />
                    <p>{member.name}</p>
                  </div>
                ))}
              </div>
              <button className="next" onClick={handleNext}>&#10095;</button>
            </div>
            <div className="carousel-indicators">
              {teamMembers.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;