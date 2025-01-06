import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialPages = () => {
  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/gerijek-oluoch/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
        style={{ fontSize: "2rem", color: "#0A66C2" }}
      >
        <FaLinkedinIn />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/OG-Oluoch"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
       
      >
        <FaGithub />
      </a>

      {/* Twitter */}
      <a
        href="https://x.com/the1gerry"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
       
      >
        <FaXTwitter/>
      </a>
    </div>
  );
};

export default SocialPages;

