import Email from "@/components/Email";
import SocialIcon from "@/components/SocialIcon";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import React from "react";

function Index() {
  return (
    <div className="app">
      <Navbar />
      <SocialIcon />
      <Email />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default Index;
