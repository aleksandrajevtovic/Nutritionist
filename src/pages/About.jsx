import React from "react";
import AboutGridStory from "../components/AboutGridStory";
import AboutHero from "../components/AboutHero";
import JoinTheClub from "../components/JoinTheClub";
import MyGoal from "../components/MyGoal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import { motion as m } from "framer-motion";

const About = (props) => {
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
      <AboutHero />
      <MyGoal />
      <AboutGridStory />
      <JoinTheClub />
      <Footer />
    </m.div>
  );
};

export default About;
