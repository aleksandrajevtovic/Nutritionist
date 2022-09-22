import React from "react";
import { BsInstagram } from "react-icons/bs";
import { ImPinterest2 } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="bottom-column">
          <div className="bottom-column__content_container">
            <div className="column-cpt">
              Copyright © Mylah Bloom. Made by Aleksandra Jevtović
            </div>
            <div className="column-social-icons-container">
              <Link to={"/facebook"} className="social-link">
                <FaFacebookF />
              </Link>
              <Link to={"/instagram"} className="social-link">
                <BsInstagram />
              </Link>
              <Link to={"/pinterest"} className="social-link">
                <ImPinterest2 />
              </Link>
            </div>
            <div className="legal">
              <ul>
                <li>
                  <Link to={"/terms-of-service"}>Terms of Service</Link>
                </li>
                <li>
                  <Link to={"/privacy-policy"}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to={"/refund-policy"}>Refund Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
