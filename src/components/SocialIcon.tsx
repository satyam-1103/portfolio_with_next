import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
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
          <motion.li
            key={name}
            title={name}
            className="social-icons-list-item"
            initial={{ opacity: 0, scale: 0, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcon;
