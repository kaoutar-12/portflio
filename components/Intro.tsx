import React from "react";
import "@/styles/intro.css";
import Image from "next/image";

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
        <ul className="tags">
          <li className="item item1">
            <span className="skill-icons--html"></span>
            <span>HTML</span>
          </li>
          <li className="item item2">
            <span className="skill-icons--css"></span>
            <span>CSS</span>
          </li>
          <li className="item item3">
            <span className="skill-icons--javascript"></span>
            <span>Javascript</span>
          </li>
          <li className="item item4">
            <span className="skill-icons--react-dark"></span>
            <span>React</span>
          </li>
          <li className="item item5">
            <span className="skill-icons--nextjs-dark"></span>
            <span>Next.js</span>
          </li>
          <li className="item item6">
            <span className="skill-icons--cpp"></span>
            <span>C++</span>
          </li>
          <li className="item item7">
            <span className="skill-icons--c"></span>
            <span>C</span>
          </li>
          <li className="item item8">
            <span className="skill-icons--docker"></span>
            <span>Docker</span>
          </li>
          <li className="item item9">
            <span className="skill-icons--blender-dark"></span>
            <span>Blender</span>
          </li>
          <li className="item item10">
            <span className="skill-icons--figma-dark"></span>
            <span>Figma</span>
          </li>
        </ul>
      </div>
      <div className="icon"></div>
    </section>
  );
};

export default Intro;
