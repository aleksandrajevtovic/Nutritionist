import React, { useState } from "react";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Story from "../components/Story";
import DietPlans from "../components/DietPlans";
import Footer from "../components/Footer";
import JoinTheClub from "../components/JoinTheClub";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import MealPlans from "../components/MealPlans";
import dietPlans from "../diet-plans";
import MealPlansSlice from "../components/MealPlansSlice";
// import  '../css/navbar.css';

const size = 3;

function Home(props) {
  // const { cartItems } = props;
  const { cartItems } = props;
  // const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <Topbar />
      <Navbar countCartItems={cartItems.length} />
      <Hero />
      <Story />
      <Popular />
      <section className="diet-plans-section">
        <h2 className="diet-section-title">Diet plans</h2>
      </section>
      {/* <DietPlans /> */}
      {/* {dietPlans.slice(0, size).map((dietPlan) => (
          <MealPlans
            imgUrl={dietPlan.imgUrl}
            name={dietPlan.name}
            price={dietPlan.price}
          />
        ))} */}

      <MealPlansSlice />
      <div className="btn-div">
        <Link className="creative-hero__btn btn" to="/shop">
          <span className="btn__text">See all diet plans</span>
          <span className="btn__icon">
            <BsArrowUpRight />
          </span>
        </Link>
      </div>
      <JoinTheClub />
      <Footer />
    </div>
  );
}

export default Home;
