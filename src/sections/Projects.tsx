import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/portfolio-cover.jpg",
      projectName: "Personal Portfolio Website",
      projectLink: "https://satyam-srivastava.netlify.app/",
      projectDescription:
        "Developed the personal portfolio website using HTML, CSS and Javascript.",
      projectTech: ["HTML & CSS", "Javascript"],
      projectExternalLinks: {
        github: "https://github.com/satyam-1103/portfolio_",
        externalLink: "https://satyam-srivastava.netlify.app/",
      },
    },

    {
      image: "/newsHub-cover.jpg",
      projectName: "NewsHub",
      projectLink: "https://github.com/satyam-1103/NewsHub",
      projectDescription:
        "NewsHub is an latest news fetching web application. It uses latest news using the newsAPI. It provides entertainment, business, and many more news.",
      projectTech: ["React", "Bootstrap", "NewsAPI"],
      projectExternalLinks: {
        github: "https://github.com/satyam-1103/NewsHub",
        externalLink: "https://github.com/satyam-1103/NewsHub",
      },
    },
    {
      image: "/finwise-cover.jpg",
      projectName: "Fin-wise",
      projectLink:
        "https://github.com/Gautam2113/Fin-Wise-Code_Crafters-IBM-Skill-build",
      projectDescription:
        "Fin-wise is an expense tracking website, it analyses the expenses of the user.",
      projectTech: ["HTML & CSS", "Javascript"],
      projectExternalLinks: {
        github:
          "https://github.com/Gautam2113/Fin-Wise-Code_Crafters-IBM-Skill-build",
        externalLink:
          "https://github.com/Gautam2113/Fin-Wise-Code_Crafters-IBM-Skill-build",
      },
    },
  ];
  return (
    <motion.div
      className="projects"
      id="work"
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
        <h2>Some Things I&apos;ve Built</h2>
      </div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <div className="project" key={projectName}>
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-items" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-items">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-items-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-items-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            );
          }
        )}
      </div>
    </motion.div>
  );
}

export default Projects;
