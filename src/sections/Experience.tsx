import Link from "next/link";
import React, { useState, useEffect } from "react";

function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 4}rem`;
    };
    transformSelected();
  }, [selected]);
  const experiences = [
    {
      name: "IBM Skillsbuild",
      role: "Front-end web development Intern",
      url: "#",
      start: "July 2023",
      end: "August 2023",
      shortDescription: [
        "During the internship plan by IBM Skillsbuild, gained knowledge of Front-end Web Development",
        "Completed an project named Fin-wise with the team of 9 members",
      ],
    },
    {
      name: "Home N Earth Overseas Private Limited",
      role: "Senior Intern",
      url: "#",
      start: "February 2023",
      end: "February 2023",
      shortDescription: [
        "During the internship, I have worked on the launch of e-commerce website",
        "Improved the e-commerce website design on shopify",
      ],
    },
  ];
  return (
    <div className="experience" id="experience">
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {experiences.map((experiences, index) => {
            return (
              <li
                key={index}
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
              >
                <span>{experiences.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{experiences[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link className="link" href={experiences[selected].url}>
                  {experiences[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {experiences[selected].start} - {experiences[selected].end}
            </p>
            <ul className="exp-details-list">
              {experiences[selected].shortDescription.map(
                (description, index) => (
                  <li className="exp-details-list-item" key={index}>
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
