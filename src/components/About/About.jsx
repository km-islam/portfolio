import React from "react";
import "./About.css";
import me from "../assets/model.png";
import { FaAward } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <img src={me} alt={me} className="about_me_img" />
        </div>
        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </div>
            <div className="about_card">
              <AiOutlineUsergroupAdd className="about_icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </div>
            <div className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            blanditiis qui praesentium ducimus dolor magni modi quasi quae.
            Inventore enim reprehenderit cupiditate est non soluta quia
            blanditiis quo neque veniam.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
