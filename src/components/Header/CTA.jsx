import React from "react";
import cv from "../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={cv} className="btn">
        Download CV
      </a>
      <a href="#Contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
