import React from "react";
import dietPlans from "../diet-plans";
import { Link, useNavigate } from "react-router-dom";

const MealPlansSlice = () => {
  let navigate = useNavigate();
  let size=3;
  return (
    <div className="shop-grid">
      {/* {dietPlans.map((dietPlan) => { */}
           {dietPlans.slice(0, size).map((dietPlan) => {

        return (
          <article key={dietPlan.id} className="shop-card">
            <div className="shop-card-img">
              <Link to={`/shop/diet-plan/${dietPlan.id}`}>
                {/* <Link to={`/dietPlan/${dietPlan.name}`}> */}
                <img
                  src={dietPlan.imgUrl}
                  className="img-resp"
                  alt={dietPlan.name}
                />
              </Link>
            </div>
            <div className="shop-card-body">
              <Link to={`/shop/diet-plan/${dietPlan.id}`}>
                <h4 className="title">{dietPlan.name}</h4>
              </Link>
              {/* <div className="prices">
                <h4 className="price ">
                € {dietPlan.price ? dietPlan.price : ""}{" "}
                </h4>
                <h4 className="price">€ {dietPlan.salePrice} </h4>
              </div> */}
                <div className="prices">
                <del className="price">{dietPlan.salePrice}</del>
                <h4 className="price">€ {dietPlan.price}</h4>
                {/* <h4 className="price ">
                € {dietPlan.price ? dietPlan.price : ""}{" "}
                </h4> */}
                {/* <h4 className="price">€ {dietPlan.salePrice} </h4> */}
              </div>
              <button
                onClick={() => {
                  navigate(`/shop/diet-plan/${dietPlan.id}`);
                }}
                className="btn-underline dark"
              >
                Learn more
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default MealPlansSlice;
