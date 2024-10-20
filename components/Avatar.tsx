'use client';
import { useState } from "react";

import React from "react";
import "@/styles/contact.css";
import Image from "next/image";

const Avatar = () => {

  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  }

  return (
    <div className="contact-section">
      <div className="contact">
        <Image
          src="/pic.png"
          alt="avatar"
          width={200}
          height={200}
          className="contact-pic"
          onClick={handleHover}
        />
        <div className="hover-content">hello! Click me to contact</div>
        <div className="first-bubble"></div>
        <div className="second-bubble"></div>
        <div className="third-bubble"></div>
     
        {hover && (
          <div className="clicked-content">
           <div className="github">
           <span className="skill-icons--github-dark"></span>
           </div>
           <div className="linkdin">
           <span className="devicon--linkedin"></span>
           </div>
           <div className="instagram"><span className="skill-icons--instagram"></span></div>
           <div className="email"><span className="skill-icons--gmail-dark"></span></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Avatar;


