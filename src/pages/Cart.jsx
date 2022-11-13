import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import dietPlans from "../diet-plans";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { motion as m } from "framer-motion";

const Cart = (props) => {
  const { cartItems, onAdd, onRemove, onRemoveItemFromCart } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  // const taxPrice = itemsPrice * 0.14;
  // const shippingPrice = itemsPrice > 2000 ? 0 : 10;
  const totalPrice = itemsPrice;

  return (
    <m.div   initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.75, ease: "easeOut" }}>
      <Topbar />
      <Navbar countCartItems={cartItems.length} />

      <section className="cart">
        <div className="cart__title">
          <h2>Shopping Cart</h2>
        </div>

        {/* <h2>Cart items</h2> */}
        <hr className="border-slate-200 dark:border-slate-700 my-10 xl:my-12" />

        {cartItems.length === 0 && (
          <div className="cart__empty-cart">
            <h3>YOUR CART IS EMPTY</h3>
            <p>Please add items to the cart</p>
            <a className="creative-hero__btn btn" href="/shop">
              <span className="btn__text">Shop Now</span>
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
            </a>
          </div>
        )}

        <div className="cart__wrapper">
          <div className="cart__items-wrapper">
            {cartItems.map((item) => (
              <div className="cart__item-wrapper" key={item.id}>
                <div className="cart__image-wrapper">
                  <img src={item.imgUrl} alt={item.name} />
                  <Link to={`/shop/diet-plan/${item.id}`}></Link>
                </div>
                <div className="cart__item-info">
                  <div className="cart__item-info__name">
                    <h3>
                      <Link to={`/shop/diet-plan/${item.id}`}>{item.name}</Link>
                    </h3>
                  </div>

                  <div className="cart__item-info__add-remove">
                    <button
                      className="removeBtn disabled"
                      onClick={() => onRemove(item)}
                    >
                      <AiOutlineMinus />
                    </button>
                    <span> {item.qty} </span>
                    <button className="addBtn" onClick={() => onAdd(item)}>
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <div className="cart__item-info__price-wrap">
                    <div className="cart__item-info__price-wrap__value">
                      <span> €{item.price} </span>
                    </div>
                  </div>
                  <div className="rmv-btn">
                    <button onClick={() => onRemoveItemFromCart(item)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="side-divider"></div>

          <div className="cart__items-summary-wrapper">
            {cartItems.length !== 0 && (
              <>
                <h3>Order Summary</h3>
                {/* <hr /> */}
                {/* <div>
                  <div>Items price</div>
                  <div>€ {itemsPrice}</div>
                </div> */}
                {/* <div>
                  <div>Tax price</div>
                  <div>€ {taxPrice.toFixed(2)}</div>
                </div>
                <div>
                  <div>Shipping price</div>
                  <div>€ {shippingPrice}</div>
                </div> */}

                <div className="order-total">
                  <span> Order total</span> <span> € {totalPrice} </span>
                </div>

                <Link
                  className="creative-hero__btn btn btn-checkout"
                  to={"/shop"}
                >
                  <span className="btn__text">Checkout</span>
                  <span className="btn__icon">
                    <BsArrowUpRight />
                  </span>
                </Link>

                <div className="more-info">
                  <p className="block relative pl-5">
                    <AiOutlineInfoCircle />
                    Learn more{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="##"
                      className="text-slate-900 dark:text-slate-200 underline font-medium"
                    >
                      Taxes
                    </a>
                    <span> and </span>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="##"
                      className="text-slate-900 dark:text-slate-200 underline font-medium"
                    >
                      Shipping
                    </a>{" "}
                    infomation
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* checkout btn */}
        {/* <hr />
        <div>
          <button onClick={() => alert("implement checkout")}>Chekcout</button>
        </div> */}
      </section>

      <Footer />
    </m.div>
  );
};

export default Cart;
