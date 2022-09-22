import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { ImPinterest2 } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { HiPhone, HiEnvelope } from "react-icons/hi";
import { BsFillEnvelopeFill } from "react-icons/bs";

function Topbar() {
  return (
    <section className="topbar-section">
      <div className="topbar-section__info">
        <a href="tel:+381 64 199 09 80">
          <HiPhone />{" "}
          <span className="topbar-section__info-location">+381695278333</span>
        </a>
        <a href="mailto:mylahfit@contact.com">
          <BsFillEnvelopeFill />
          <span className="topbar-section__info-email">mylahfit@contact.com</span>
        </a>
      </div>

      <div className="topbar-section__secondary-menu">
        <ul className="topbar-section__social-icons">
          <li className="topbar-section__social-icon topbar-section__social-facebook">
            <Link to={'/facebook'} className="icon">
              <FaFacebookF />
            </Link>
          </li>
          <li className="topbar-section__social-icon topbar-section__social-instagram">
            <Link to={'/instagram'} className="icon">
              <BsInstagram />
            </Link>
          </li>
          <li className="topbar-section__social-icon topbar-section__social-instagram">
            <Link to={'/pinterest'} className="icon">
              <ImPinterest2 />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Topbar;
