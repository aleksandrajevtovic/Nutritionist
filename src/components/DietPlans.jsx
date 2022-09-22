import React from "react";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

// const dietPlans = [
//   {
//     id: 1,
//     name: "Individual diet plan",
//     price: "€ 180",
//     salePrice: "€ 129",
//     imgUrl: "assets/images/individual-diet-plan.jpg",
//   },
//   {
//     id: 2,
//     name: "Summer 2022 Menu",
//     price: "€ 20",
//     salePrice: "€ 15",
//     imgUrl: "assets/images/summer-menu-2022.jpg",
//   },
//   {
//     id: 3,
//     name: "4 Week Slimdown Meal Plan",
//     price: "€ 28",
//     imgUrl: "assets/images/four-week-slimdown.jpg",
//   },

//   {
//     id: 4,
//     name: "Fall 2022 Menu",
//     price: "€ 20",
//     imgUrl: "assets/images/fall-menu-2022.jpg",
//   },
//   {
//     id: 5,
//     name: "Winter 2021 Menu",
//     price: "€ 20",
//     salePrice: "€ 15",
//     imgUrl: "assets/images/winter-menu-2021.jpg",
//   },
//   {
//     id: 6,
//     name: "Spring 2022 Menu",
//     price: "€ 20",
//     imgUrl: "assets/images/spring-menu-2022.jpg",
//   },

// ];

// const size = 3;

function DietPlans({ id, name, price, salePrice, imgUrl }) {
  let navigate = useNavigate();
  return (
    <div>
      {/* <section>
        <h2 className="diet-section-title">Diet plans</h2> */}

      {/* <div className="shop-grid"> */}
      {/* {dietPlans.slice(0, size).map((dietPlan) => ( */}
      <article className="shop-card">
        <div className="shop-card-img">
          <Link to={`/shop/dietPlan/${id}`}>
            {/* <Link to={`/dietPlan/${dietPlan.name}`}> */}
            <img src={imgUrl} className="img-resp" alt={name} />
          </Link>
        </div>
        <div className="shop-card-body">
          <Link to={`/shop/dietPlan/${id}`}>
            <h4 className="title">{name}</h4>
          </Link>
          <div className="prices">
            <h4 className="price ">{price ? price : ""} </h4>
            <h4 className="price">{salePrice} </h4>
          </div>
          <button
            onClick={() => {
              navigate(`/shop/dietPlan/${id}`);
            }}
            className="btn-underline dark"
          >
            Learn more
          </button>
        </div>
      </article>

      {/* ))} */}
      {/* </div> */}
      {/* </section> */}
      {/* <div className="btn-div">
        <Link className="creative-hero__btn btn" to="/shop">
          <span className="btn__text">See all diet plans</span>
          <span className="btn__icon">
            <BsArrowUpRight />
          </span>
        </Link>
      </div> */}
    </div>
  );
}

export default DietPlans;
