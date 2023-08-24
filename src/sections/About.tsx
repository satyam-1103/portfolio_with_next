import Image from "next/image";
import React from "react";
import Profile from "@/assets/profile.jpg";
import { motion } from "framer-motion";
function About() {
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
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
            <Image src={Profile} alt="photo" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
