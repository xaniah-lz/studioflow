import React, { useState, useRef } from "react";
import "./Services.css";
import speaker from "../images/speaker1.jpg";

const Services = () => {
  const [showMore, setShowMore] = useState(false);
  const moreServicesRef = useRef(null);

  const handleSeeMore = () => {
    setShowMore(true);
    setTimeout(() => {
      if (moreServicesRef.current) {
        moreServicesRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div>
      <section className="services">
        <h2>OUR SERVICES</h2>
        <div className="title-line"></div>
        <div className="services-grid">
          {[...Array(8)].map((_, index) => (
            <div className="service-item" key={index}>
              <img src={speaker} alt="Service Image" />
              <h3>Package {index + 1}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
        <button className="see-more" onClick={handleSeeMore}>See more</button>
      </section>

      {showMore && (
        <section className="services" ref={moreServicesRef}>
          <h2>OUR SERVICES</h2>
          <div className="title-line"></div>
          <div className="services-grid">
            {[...Array(20)].map((_, index) => (
              <div className="service-item" key={index}>
                <img src={speaker} alt="Service Image" />
                <h3>Package {index + 1}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Services;
