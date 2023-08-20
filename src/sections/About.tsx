import Image from "next/image";
import React from "react";
import Profile from "@/assets/profile.jpg";

function About() {
  return (
    <div className="about" id="about">
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hello, I am Satyam, and I am passionate about developing things for
            the web. My interest is in the field of Front-web development.
          </p>
          <p className="about-grid-info-text">
            Apart from that, I have highly knowledge of Technologies like{" "}
            <strong>React.JS, Next.JS</strong> and also in HTML, CSS and
            Javascript.
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Tailwind CSS</li>
            <li className="about-grid-info-list-item">HTML and CSS</li>
            <li className="about-grid-info-list-item">FIGMA</li>
            <li className="about-grid-info-list-item">Node</li>
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">Bootstrap</li>
            <li className="about-grid-info-list-item">SQL</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src={Profile} alt="photo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
