import React from "react";
import "./About.css";
import img from "../../../public/phone.png";
const About = () => {
  return (
    <>
      <div id="about" class="about bg-body-secondary pt-5">
        <div class="container">
          <div class="about-title text-center position-relative fw-bold mt-5">
            <h1 className="about-title text-center fw-bold">About Us</h1>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-6 mb-4 text-center text-md-start">
              <div class="about-text">
                <h2 className="fw-bold">Why Choose iFix?</h2>
                <p className="text-black-50 fs-3 mt-5">
                  At iFix, we understand the pivotal role your smartphone plays
                  in your daily life. Our team of skilled technicians is
                  dedicated to providing fast, reliable, and professional repair
                  services, ensuring your device is back in your hands in no
                  time.
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-image">
                <img class="img-fluid" src={img} alt="" />
                <span className="shadow"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
