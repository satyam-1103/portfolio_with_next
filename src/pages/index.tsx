import Email from "@/components/Email";
import SocialIcon from "@/components/SocialIcon";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";
import React from "react";

function Index() {
  return (
    <div className="app">
      <Navbar />
      <SocialIcon />
      <Email />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}

export default Index;
