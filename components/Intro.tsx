import React from "react";
import "@/styles/intro.css";

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
          
        </div>
      </div>
      <div className="icon"></div>
    </section>
  );
};

export default Intro;
