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
        <div className="tags">
          <div className="item item1">
            {/* <Image src="../pubic/html.png" alt="html" width={50} height={50} />   */}
          </div>
          <div className="item item2"></div>
          <div className="item item3"></div>
          <div className="item item4"></div>
          <div className="item item5"></div>
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
