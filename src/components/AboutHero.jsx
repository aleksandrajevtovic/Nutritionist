import React from "react";

const AboutHero = () => {
  return (
    <>
      <div className="about-hero" id="flex">
        <div className="about-hero-cont" id="box1">
          <img
            className="image-hero"
            alt=""
            id="product3"
            src="/assets/images/hero-about.png"
          />
          <div className="hero-description">
            <p className="description">Hey everyone, <br /> my name is Mylah Bloom</p>
            <p className="description italic">It’s lovely to meet you</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
