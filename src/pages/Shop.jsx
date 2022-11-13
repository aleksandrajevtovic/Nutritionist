import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar";
import dietPlans from "../diet-plans";
import MealPlans from "../components/MealPlans";
import { motion as m } from "framer-motion";

const Shop = (props) => {
  let navigate = useNavigate();
  const { cartItems } = props;
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <Topbar />
      <Navbar countCartItems={cartItems.length} />

      <section className="shop-section">
        <h2>Products</h2>
        {/* <DietPlans  /> */}
        <MealPlans />
      </section>
      <Footer />
    </m.div>
  );
};

export default Shop;
