import React from "react";
import BrowseRecipes from "../components/BrowseRecipes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import { motion as m } from "framer-motion";

const Recipes = (props) => {
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
      <BrowseRecipes />
      <Footer />
    </m.div>
  );
};

export default Recipes;
