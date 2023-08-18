import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImg from "@/assets/coding.svg";
function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-title">Hello there, I am</h1>
      <h2 className="hero-title-large">Satyam Srivastava.</h2>
      <h3 className="hero-title-large hero-title-sub">
        I design things for web.
      </h3>
      <p className="hero-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto placeat
        ut suscipit alias! Dolor eum ex ratione magni nobis est quaerat impedit
        explicabo eius commodi.
        <Link href="#" target="_blank" className="link">
          Company
        </Link>
      </p>
      <div className="hero-button">
        <Button text="checkout out my course" link="#" />
      </div>
      <div className="hero-image">
        <Image src={HeroImg} alt="hero-img" className="image" />
      </div>
    </div>
  );
}

export default Hero;
