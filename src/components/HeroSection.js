import React from "react";
import "./HeroSection.css";
import "../App.css";
import { Button } from "./Button";
import "./Button.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <ul className="list">
          <h2> Little Lemon </h2>
          <h4>Chicago</h4>
          <p>
            We are a family owned <br />
            Mediterranean restaurant,
            <br />
            focused on traditional
            <br /> receipes served with a modern <br /> twist.
          </p>
          <Button className="btn" buttonStyle="btn--primary" buttonSize="large">
            Reserve a Table
          </Button>
        </ul>
        <img className="image" src="restaurantfood.jpg" alt="restaurant" />
      </div>
    </div>
  );
}

export default HeroSection;
