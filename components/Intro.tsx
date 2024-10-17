import React from "react";
import "@/styles/intro.css";
import Image from "next/image";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";


import { DiJavascript1 } from "react-icons/di";




const Intro = () => {
  return (
    <section className="intro">
      <div className="info">
        <div className="header">
          <div className="avatar"></div>
          <div className="texts">
            <div className="name">
              <div>
                Hello World! My name <span>Kaoutar Mouradi</span>
              </div>
            </div>
            <div className="job">
              <div>Front-end Developer</div>
            </div>
            <div className="description">
              <p>
                I'm a front-end developer based in Morocco. I have serious
                passion for UI effects, animations and creating intuitive,
                dynamic user experiences.
              </p>
              </div>  
          </div>
        </div>
        <div className="tags">
          <div className="item item1">
            <FaHtml5 fill="#e3646e"/>
            <span>HTML</span>
          </div>
          <div className="item item2">
            <FaCss3Alt fill="#3996db"/>
            <span>CSS</span>  
          </div>
          <div className="item item3">
            <DiJavascript1 fill="#EABD5F"/>
            <span>Javascript</span>
          </div>
          <div className="item item4">
            <FaReact fill="#61DBFB"/>
            <span>React</span>
          </div>
          <div className="item item5">
            <TbBrandNextjs fill="white"/>
            <span>Next.js</span>
          </div>
          <div className="item item6"></div>
          <div className="item item7"></div>
          <div className="item item8"></div>
        </div>
      </div>
      <div className="icon"></div>
    </section>
  );
};

export default Intro;
