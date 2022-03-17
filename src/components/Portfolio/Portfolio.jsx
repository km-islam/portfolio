import React from "react";
import "./Portfolio.css";
import portfolio from "../assets/portfolio.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        <div className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={portfolio} alt={portfolio} />
          </div>
          <h3>This is a portfolio item title</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
            debitis!
          </p>
          <div>
            <a
              href="https://github.com"
              className="btn"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={portfolio} alt={portfolio} />
          </div>
          <h3>This is a portfolio item title</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
            debitis!
          </p>
          <div>
            <a
              href="https://github.com"
              className="btn"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={portfolio} alt={portfolio} />
          </div>
          <h3>This is a portfolio item title</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
            debitis!
          </p>
          <div>
            <a
              href="https://github.com"
              className="btn"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={portfolio} alt={portfolio} />
          </div>
          <h3>This is a portfolio item title</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
            debitis!
          </p>
          <div>
            <a
              href="https://github.com"
              className="btn"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={portfolio} alt={portfolio} />
          </div>
          <h3>This is a portfolio item title</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
            debitis!
          </p>
          <div>
            <a
              href="https://github.com"
              className="btn"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={portfolio} alt={portfolio} />
          </div>
          <h3>This is a portfolio item title</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
            debitis!
          </p>
          <div>
            <a
              href="https://github.com"
              className="btn"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={portfolio} alt={portfolio} />
          </div>
          <h3>This is a portfolio item title</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
            debitis!
          </p>
          <div>
            <a
              href="https://github.com"
              className="btn"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
