import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";

const Contact = (props) => {
  const { cartItems } = props;

  return (
    <div>
      <Topbar />
      <Navbar countCartItems={cartItems.length} />
      <header className="hero-contact">
        <div className="hero-inner">
          <div className="hero-text">
            <h2>Let’s colaborate</h2>
            <p>I’d love to help</p>
          </div>

          <div className="hero-form-wrapper">
            <form className="hero-form" action="/">
              <div className="hero-form-input">
                <input
                  className="hero-input hero-name-input"
                  type="text"
                  placeholder="Your Name *"
                  required
                />
              </div>
              <div className="hero-form-input">
                <input
                  className="hero-input hero-email-input"
                  type="email"
                  placeholder="Your Email Address *"
                  required
                />
              </div>
              <div className="hero-form-input">
                <textarea
                rows="6" cols="50"
                  className="hero-input hero-password-input"
                  type="text"
                  placeholder="Your Message *"
                  required
                />
              </div>
              {/* <div class="hero-form-input">
                <input class="hero-form-submit" type="submit" value="Sign Up" />
              </div> */}
              <Link className="creative-hero__btn btn w-100p" to={'/shop'}>
                <span className="btn__text">Send A Message</span>
                <span className="btn__icon">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                    ></path>
                  </svg>
                </span>
              </Link>
            </form>
          </div>
        </div>
      </header>

      <Footer />
    </div>
  );
};

export default Contact;
