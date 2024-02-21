import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Landing from "./components/Landing/Landing";
import Recently from "./components/Recently/Recently";
import { productData, responsive } from "./components/data";
import Title from "./components/Title/Title";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SeeMore from "./components/SeeMore/SeeMore";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import SignPage from "./components/SignPage/SignPage";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import Checkout from "./components/checkout/checkout";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Contact from "./components/Contact/Contact";
import { CartProvider } from "react-use-cart";
import Success from "./components/Success/Success";
import { UsernameProvider } from "./components/usernameProvider";
import Error from "./components/Error/Error";
function App() {
  const product = productData.map((item) => (
    <Recently
      name={item.name}
      img={item.img}
      price={item.price + "£"}
      item={item}
      id={item.id}
    />
  ));

  const [username, setUsername] = useState(null);
  const handleSetUsername = (name) => {
    setUsername(name);
  };
  return (
    <UsernameProvider>
      <CartProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <NavBar username={username} />
                <Landing />
                <Title />
                <div
                  className="ra"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                  <Carousel partialVisible={false} responsive={responsive}>
                    {product}
                    <SeeMore />
                  </Carousel>
                </div>
                <About />
                <Footer />
                <ShoppingCart />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                {" "}
                <NavBar username={username} />
                <Landing />
                <Title />
                <div
                  className="ra"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                  <Carousel partialVisible={false} responsive={responsive}>
                    {product}
                    <SeeMore />
                  </Carousel>
                </div>
                <About />
                <Footer />
                <ShoppingCart />
              </>
            }
          />
          <Route
            path="/signPage"
            element={<SignPage setUsername={handleSetUsername} />}
          />
          <Route
            path="/products"
            element={
              <>
                <Products />
                <ShoppingCart />
                <Footer />
              </>
            }
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/contact"
            element={
              <>
                <Contact />
                <ShoppingCart />
                <Footer />
              </>
            }
          />
          <Route path="/success" element={<Success />}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </CartProvider>
    </UsernameProvider>
  );
}

export default App;
