import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImg from "@/assets/coding.svg";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
      >
        Hello there, I am
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, x: 5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.75 }}
      >
        Satyam Srivastava.
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 1.05 }}
      >
        I design things for web.
      </motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 1.35 }}
      >
        Hello there, I am a web developer from India. I am passionate to work
        and develop things for the web.
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Button text="checkout out my course" link="#" />
      </motion.div>
      <motion.div
        className="hero-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      >
        <Image src={HeroImg} alt="hero-img" className="image" />
      </motion.div>
    </div>
  );
}

export default Hero;
