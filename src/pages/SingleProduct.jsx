import React from "react";
import { Link, useParams } from "react-router-dom";
// import products from "../data";
import dietPlans from "../diet-plans";

const SingleProduct = () => {
//   const { productId } = useParams();
  const { dietPlanId } = useParams();
//   const product = products.find((product) => product.id === productId);
  //   const { image, name, price, salePrice } = product;

  const dietPlan = dietPlans.find((dietPlan) => dietPlan.id === dietPlanId);
  const { imgUrl, name, price, salePrice } = dietPlan;
  return (
    <section className="section product">
      {/* <h4>{productId}</h4> */}
      <h4>{dietPlanId}</h4>
      <h5>{name}</h5>
      <img src={imgUrl} alt={name} />
      <h4>{price}</h4>
      <h4>{salePrice}</h4>
      <Link to={"/products"}>back to products</Link>
    </section>
  );
};

export default SingleProduct;
