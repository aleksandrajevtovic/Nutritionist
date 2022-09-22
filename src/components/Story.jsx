import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <div>
      <div className="box mt-8r">
        <div className="grid">
          <div className="box1">
            <h2>Mylah’s Story</h2>
            <p className=" mb-2r">
              Mylah is a healthy lifestyle, nutrition, and mindfulness platform
              established by Mylah Bloom - a certified nutritionist, sharing her
              knowledge and expertise in her innovative exercise and dietary
              plans. MylahFit is empowering its clients to attain their body
              goals while being kind and gentle to their bodies and minds.
            </p>
            <div>
            <Link className="creative-hero__btn btn" to={"/about"}>
              <span className="btn__text">Read more</span>
              <span className="btn__icon">
              <BsArrowUpRight />
              </span>
            </Link>
            </div>
          </div>
          <div className="box2">
            <img
              className="img-resp"
              src="https://images.unsplash.com/photo-1511226616573-0937ad7da1d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
