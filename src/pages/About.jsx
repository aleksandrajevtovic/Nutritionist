import React from "react";
import AboutGridStory from "../components/AboutGridStory";
import AboutHero from "../components/AboutHero";
import JoinTheClub from "../components/JoinTheClub";
import MyGoal from "../components/MyGoal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";

const About = (props) => {
  const { cartItems } = props;
  return (
    <div>
      <Topbar />
      <Navbar countCartItems={cartItems.length} />
      <AboutHero />
      <MyGoal />
      <AboutGridStory />
      <JoinTheClub />
      <Footer />
    </div>
  );
};

export default About;
