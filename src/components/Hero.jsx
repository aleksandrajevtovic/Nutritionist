import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <section className="creative-hero">
        <div className="creative-hero__container">
          <div className="creative-hero__main">
          
            <h1 className="creative-hero__title">
              Place where nutrition and mindfulness meet
            </h1>
            <Link className="creative-hero__btn btn" to={'/shop'} >
              <span className="btn__text">Work with me</span>
              <span className="btn__icon">
                <BsArrowUpRight />
              </span>
            </Link>
          </div>
          <div className="creative-hero__image">
            <img src="/assets/images/hero.jpg" alt="Nutritionist " />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
