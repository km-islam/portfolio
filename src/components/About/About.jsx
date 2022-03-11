import React from "react";
import "./About.css";
import me from "../assets/model.png";
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <img src={me} alt={me} />
        </div>
        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </div>
            <div className="about_card">
              <FaAward />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </div>
            <div className="about_card">
              <FaAward />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
