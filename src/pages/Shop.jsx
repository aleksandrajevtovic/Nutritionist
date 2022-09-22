import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar";
import dietPlans from "../diet-plans";
import MealPlans from "../components/MealPlans";

const Shop = (props) => {
  let navigate = useNavigate();
  const { cartItems } = props;
  return (
    <>
      <Topbar />
      <Navbar countCartItems={cartItems.length} />

      <section className="shop-section">
        <h2>Products</h2>
        {/* <DietPlans  /> */}
        <MealPlans />
        
      </section>
      <Footer />
    </>
  );
};

export default Shop;
