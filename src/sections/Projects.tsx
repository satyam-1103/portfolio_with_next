import React from "react";

function Projects() {
  const projectsData = [
    {
      image: "",
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
      image: "",
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
    <div className="projects" id="work">
      <div className="title">
        <h2>Some Things I&apos;ve Built</h2>
      </div>
    </div>
  );
}

export default Projects;
