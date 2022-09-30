import React from "react";
import Home from "./Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./About";
import Shop from "./Shop";
// import DietPlan from "./DietPlan";
import Recipe from "./Recipe";
import Recipes from "./Recipes";
import Contact from "./Contact";
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";
import RefundPolicy from "./RefundPolicy";
import ErrorPage from "./ErrorPage";
// import Products from "./Products";
// import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import { useState } from "react";
import { useEffect } from "react";
import Searched from "./Searched";
import DietPlan from "./DietPlan";

const Pages = () => {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    console.log(product);
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  const onRemoveItemFromCart = (product) => {
    const deleteItem = cartItems.filter((x) => x.id !== product.id);
    setCartItems(deleteItem);
    localStorage.setItem("cartItems", JSON.stringify(deleteItem));
  };

  useEffect(() => {
    setCartItems(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
    );
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cartItems={cartItems} />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/about" element={<About cartItems={cartItems} />} />
        <Route path="/shop" element={<Shop cartItems={cartItems} />} />
        <Route path="/recipes" element={<Recipes cartItems={cartItems} />} />
        <Route
          path="/recipes/:type"
          element={<Recipes cartItems={cartItems} />}
        />
        <Route path="/contact" element={<Contact cartItems={cartItems} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onRemoveItemFromCart={onRemoveItemFromCart}
            />
          }
        />
        <Route
          path="/terms-of-service"
          element={<TermsOfService cartItems={cartItems} />}
        />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy cartItems={cartItems} />}
        />
        <Route
          path="/refund-policy"
          element={<RefundPolicy cartItems={cartItems} />}
        />
        <Route
          path="/shop/diet-plan/:dietPlanId"
          element={<DietPlan onAdd={onAdd} cartItems={cartItems} />}
        />
        <Route
          path="/recipe/:name"
          element={<Recipe cartItems={cartItems} />}
        />

        {/* <Route path="/products/" element={<Products />} /> */}
        {/* <Route path="/products/:dietPlanId" element={<SingleProduct />} /> */}
        <Route path="/searched/:search" element={<Searched cartItems={cartItems} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
