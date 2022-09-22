import React from "react";
import Navbar from "../components/Navbar";
import SingleRecipe from "../components/SingleRecipe";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

const Recipe = (props) => {
  const { cartItems } = props;
  return (
    <>
      <Topbar />
      <Navbar countCartItems={cartItems.length} />
        <div className="cont">
          <div className="wrapper">
            <SingleRecipe />
          </div>
        </div>
      <Footer />
    </>
  );
};

export default Recipe;
