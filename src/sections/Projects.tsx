import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import image from "@/assets/profile.jpg";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: image,
      projectName: "NewsHub",
      projectLink: "https://github.com/",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, beatae. Ducimus, laborum fugiat dolor nostrum ut labore in ipsa maiores consectetur.",
      projectTech: ["React", "Bootstrap", "NewsAPI"],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: image,
      projectName: "Fin-wise",
      projectLink: "https://github.com/",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, beatae. Ducimus, laborum fugiat dolor nostrum ut labore in ipsa maiores consectetur.",
      projectTech: ["HTML & CSS", "Javascript"],
      projectExternalLinks: {
        github: "",
        externalLink: "",
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
