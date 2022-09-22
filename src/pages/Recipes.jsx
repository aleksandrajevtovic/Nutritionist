import React from "react";
import BrowseRecipes from "../components/BrowseRecipes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";

const Recipes = (props) => {
  const { cartItems } = props;
  return (
    <>
    <Topbar />
     <Navbar countCartItems={cartItems.length} />
     <BrowseRecipes />
     <Footer />
    </>
  );
};

export default Recipes;
