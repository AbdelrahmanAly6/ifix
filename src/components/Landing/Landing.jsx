import React from "react";
import "./Landing.css";
import { HashLink as Link } from "react-router-hash-link";
const Landing = () => {
  return (
    <div
      id="home"
      className="landing d-flex justify-content-center align-items-center"
    >
      <div className="text-center text-light">
        <h1 className="fw-bold">
          Welcome To <span>iFix</span>
        </h1>
        <p className="text-white-50 mb-4">
          Your Trusted Partner for Quick and Reliable Phone Repairs
        </p>
        <Link
          to="/products#"
          className="btn btn-primary main-btn landing-btn btn-lg"
        >
          Fix Now
        </Link>
      </div>
    </div>
  );
};
export default Landing;
