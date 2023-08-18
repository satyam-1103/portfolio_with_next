import Link from "next/link";
import React from "react";

function Email() {
  return (
    <div className="email">
      <Link href="mailto:satyamsrivastava052@gmail.com" className="email-link">
        satyamsrivastava052@gmail.com
      </Link>
    </div>
  );
}

export default Email;
