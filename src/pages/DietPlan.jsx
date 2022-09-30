import { React, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BsArrowUpRight, BsBag } from "react-icons/bs";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import dietPlans from "../diet-plans";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { useState } from "react";

const DietPlan = (props) => {
  const { dietPlanId } = useParams();
  const dietPlan = dietPlans.find((dietPlan) => dietPlan.id === dietPlanId);
  const { onAdd, cartItems } = props;
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(false);
    }, 5000);
    // To clear or cancel a timer, you call the clearTimeout(); method,
    // passing in the timer object that you created into clearTimeout().
    return () => clearTimeout(timer);
  }, []);

  const {
    imgUrl,
    name,
    price,
    salePrice,
    frontDesc1,
    frontDesc2,
    frontDesc3,
    frontDesc4,
    middleDesc1,
    middleDesc2,
    middleDesc3,
    middleDesc4,
    middleDesc5,
    middleDesc6,
    middleDesc7,
    middleDesc8,
    middleDesc9,
    middleDesc10,
    middleDesc11,
    middleDesc12,
    middleDesc13,
    middleDesc14,
    middleDesc15,
    middleDesc16,
    middleDesc17,
    cooperationHeadline,
    cooperation1,
    cooperation2,
    cooperation3,
    cooperation4,
    cooperation5,
    cooperation6,
    cooperation7,
    whatyougetTitle,
    whatyouget1,
    whatyouget2,
    whatyouget3,
    whatyouget4,
    importantTitle,
    importantp1,
    importantp2,
    importantp3,
    importantp4,
  } = dietPlan;

  return (
    <div>
      <Topbar />
      <Navbar countCartItems={cartItems.length} />
      {/* <button>{cartItems.length}</button> */}
      {modalOpen && <Modal setOpenModal={setModalOpen} />}

      <section className="diet-plan-section">
        <div className="flex-section diet-plan alt-hero-banner">
          <div className="left-column">
            {/* <img src="/assets/images/dietplan1.jpg" alt="diet plan" /> */}
            <img src={imgUrl} alt={name} />
          </div>
          <div className="right-column">
            <h1>{name}</h1>
            {/* <h3 className="price">€ {price}</h3>
            <h3 className="price">{salePrice}</h3> */}
              <div className="prices">
            <del className="price">{dietPlan.salePrice}</del>
              <h4 className="price">€ {dietPlan.price}</h4>
                {/* <h4 className="price ">
                € {dietPlan.price ? dietPlan.price : ""}{" "}
                </h4> */}
                {/* <h4 className="price">€ {dietPlan.salePrice} </h4> */}
              </div>
            <div className="summary">
              <p>{frontDesc1}</p>
              <p>{frontDesc2}</p>
              <p>{frontDesc3}</p>
              <p>{frontDesc4}</p>
            </div>
            <button
              onClick={() => {
                onAdd(dietPlan);
                setModalOpen(true);
              }}
              className="creative-hero__btn btn"
            >
              <span className="btn__text">Add to Cart</span>
              <span className="btn__icon">
                <BsBag />
              </span>
            </button>

            {/* <Link className="creative-hero__btn btn" to="/shop">
              <span className="btn__text">Add to Cart</span>
              <span className="btn__icon">
                <BsBag />
              </span>
            </Link> */}
          </div>
        </div>

        <div className="diet-plan-details-wrapper">
          <p className="mb-1">{middleDesc1}</p>
          <p>{middleDesc2}</p>
          <div>
            <h4 style={{ margin: "2rem 0rem 1rem" }}>{cooperationHeadline}</h4>
            <p style={{ marginBottom: "0.3rem" }}>{cooperation1}</p>
            <p style={{ marginBottom: "0.3rem" }}>{cooperation2}</p>
            <p style={{ marginBottom: "0.3rem" }}>{cooperation3}</p>
            <p style={{ marginBottom: "0.3rem" }}>{cooperation4}</p>
            <p style={{ marginBottom: "0.3rem" }}>{cooperation5}</p>
            <p style={{ marginBottom: "0.3rem" }}>{cooperation6}</p>
            <p style={{ marginBottom: "0.3rem" }}>{cooperation7}</p>
          </div>
          <br />
          <p>{middleDesc3}</p>
          <br />
          <p style={{ fontWeight: "700" }}>{whatyougetTitle}</p>
          <br />
          <p style={{ fontWeight: "700" }}>{whatyouget1}</p>
          <p style={{ fontWeight: "700" }}>{whatyouget2}</p>
          <p style={{ fontWeight: "700" }}>{whatyouget3}</p>
          <p style={{ fontWeight: "700" }}>{whatyouget4}</p>
          <br />
          <div>
            <p style={{ marginBottom: "0.3rem" }}>{middleDesc4}</p>
            <p style={{ marginBottom: "0.3rem" }}>{middleDesc5}</p>
            <p style={{ marginBottom: "0.3rem" }}>{middleDesc6}</p>
          </div>
          <div>
            <h4 style={{ marginBottom: "1rem" }}>{importantTitle}</h4>

            <p className="mb-1" style={{ fontStyle: "italic" }}>
              {importantp1}
            </p>
            <p className="mb-1" style={{ fontStyle: "italic" }}>
              {importantp2}
            </p>
            <p className="mb-1" style={{ fontStyle: "italic" }}>
              {importantp3}
            </p>
            <p style={{ fontStyle: "italic" }}>{importantp4}</p>
          </div>
          <p className="mb-1" style={{ fontWeight: "700", marginTop: "1rem" }}>
            {middleDesc7}
          </p>
          <p>{middleDesc8}</p>
          <p>{middleDesc9}</p>
          <p>{middleDesc10}</p>
          <p className="mb-1">{middleDesc11}</p>
          <p className="mb-1">{middleDesc12}</p>
          <p>{middleDesc13}</p>
          <p>{middleDesc14}</p>
          <p>{middleDesc15}</p>
          <p className="mb-1">{middleDesc16}</p>
          <p className="mb-1">{middleDesc17}</p>
        </div>

        <div className="cta-plan">
          <h2>
            Want to see more diet plans? <br></br> Look no further!
          </h2>
          <div className="btn-wrap">
            <Link className="creative-hero__btn btn" to="/shop">
              <span className="btn__text">Diet plans</span>
              <span className="btn__icon">
                <BsArrowUpRight />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DietPlan;
