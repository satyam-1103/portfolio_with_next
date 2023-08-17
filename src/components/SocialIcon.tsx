import Link from "next/link";
import React from "react";

import { FiGithub, FiLinkedin } from "react-icons/fi";
const SocialIcon = () => {
  const socialLinks = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "#",
    },
    {
      name: "Linkedin",
      icon: <FiLinkedin />,
      link: "#",
    },
  ];
  return (
    <div className="social-icons">
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcon;
