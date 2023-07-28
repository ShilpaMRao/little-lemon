import React from "react";
import "../../css_files/AboutMarioAdrian.css";

const AboutMarioAdrian = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <ul className="list">
          <h2> Little Lemon </h2>
          <h4>Chicago</h4>
          <p>
            Mario and Adrian are <br />
            brothers who run this
            <br />
            family business <br />
            which focuses on traditional
            <br /> receipes served with a modern <br /> twist.
          </p>
        </ul>
        <div className="image-container">
          <img
            className="image1"
            src="Mario and Adrian A.jpg"
            alt="Mario and Adrian A"
          />
          <img
            className="image2"
            src="Mario and Adrian B.jpg"
            alt="Mario and Adrian B"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMarioAdrian;
