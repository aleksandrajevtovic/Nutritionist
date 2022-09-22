import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";

const RefundPolicy = (props) => {
  const { cartItems } = props;
  return (
    <div>
      <Topbar />
      <Navbar countCartItems={cartItems.length} />
      <section className="narrow h-60vh">
        <h1 className="main-title">REFUND POLICY</h1>
        <div className="narrow__body">
          <h2>MylahFit Return Policy</h2>
          <p>
            All MylahFit Guides are digital download ebooks only. You will
            receive an email confirmation with a download link after checkout
            and a download link on the checkout confirmation page. We do not
            offer refunds on ebook purchases, as this is a digital item that
            cannot be restocked.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
