import React from "react";
import Navbar from "../components/Navbar";
import SingleRecipe from "../components/SingleRecipe";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import { motion as m } from "framer-motion";

const Recipe = (props) => {
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
      <div className="cont">
        <div className="wrapper">
          <SingleRecipe />
        </div>
      </div>
      <Footer />
    </m.div>
  );
};

export default Recipe;
