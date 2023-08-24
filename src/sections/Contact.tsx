import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos; Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
        perspiciatis quisquam in minima repellendus ducimus delectus quasi harum
        iure ratione.
      </p>

      <div className="contact-cta">
        <Button link="mailto:satyamsrivastava052@gmail.com" text="Contact" />
      </div>
    </motion.div>
  );
}

export default Contact;
