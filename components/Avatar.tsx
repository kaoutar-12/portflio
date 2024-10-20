

import React from "react";
import "@/styles/contact.css";
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="contact-section">
      <div className="contact">
        <Image
          src="/pic.png"
          alt="avatar"
          width={200}
          height={200}
          className="contact-pic"
        />
        <div className="hover-content">hello! Click me to contact</div>
        <div className="first-bubble"></div>
        <div className="second-bubble"></div>
        <div className="third-bubble"></div>
      </div>
    </div>
  );
};

export default Avatar;


