import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const JoinTheClub = () => {
  return (
    <div>
      <section className="club-section">
        <div className="container pl-0">
          <div className="cont-wrapper">
            <div className="cont-left">
              <div className="img-wrapper">
                {/* <img src="https://images.unsplash.com/photo-1511226616573-0937ad7da1d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" /> */}
                <img src="/assets/images/dietplan1.jpg" alt="join the club" />
              </div>
            </div>
            <div className="cont-right">
              <div className="padd">
                <h2>
                  Join the <span>MylahFit</span>&nbsp;&nbsp;club
                </h2>
                <p>
                  Sign up for my free <span>“Insulin resistency guide” </span>{" "}
                  E-book + my weekly-ish newsletter where I share some of my
                  yummi recipes, wellness + liyfestyle tips and my favourite
                  things too keep me at my best as a busy soon to be mama!
                </p>
                <form action="">
                  <input
                    className="custom-input"
                    type="email"
                    placeholder="Your Email *"
                  />
                </form>
                {/* <button className="primary-btn lg-btn md-btn sm-btn">Get the guide</button> */}
                <Link className="creative-hero__btn btn" to={'#'}>
                  <span className="btn__text">Get the guide</span>
                  <span className="btn__icon">
                    <BsArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinTheClub;
