import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
function Email() {
  return (
    <motion.div
      className="email"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.75, ease: "easeIn" }}
    >
      <Link href="mailto:satyamsrivastava052@gmail.com" className="email-link">
        satyamsrivastava052@gmail.com
      </Link>
    </motion.div>
  );
}

export default Email;
