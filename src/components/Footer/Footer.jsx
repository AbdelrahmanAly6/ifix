import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faHouse,
  faEnvelope,
  faPhone,
  faFax,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { HashLink as Link } from "react-router-hash-link";
const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start main-footer">
        <section className=" d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block fs-4">
            <span className="footer-connect">
              Get connected with us on social networks:
            </span>
          </div>
          <div className="fs-4 ft-links text-white-50">
            <Link to="" className="me-4 text-reset">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link to="" className="me-4 text-reset">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link to="" className="me-4 text-reset">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
        </section>

        <section className="text-white-50">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h3 className="text-uppercase fw-bold mb-4">
                  <FontAwesomeIcon icon={faGem} className="me-3" />
                  iFix
                </h3>
                <p className="fs-5">
                  Welcome to iFix, your one-stop destination for premium phone
                  repairs and high-quality spare parts. With a passion for
                  technology and a commitment to excellence, we take pride in
                  delivering top-notch solutions for all your mobile device
                  needs.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ft-links">
                <h3 className="text-uppercase fw-bold mb-4">Discover</h3>
                <p>
                  <Link to="/products#" className="text-reset fs-5">
                    Products
                  </Link>
                </p>
                <p>
                  <Link to="/home#" className="text-reset fs-5">
                    About
                  </Link>
                </p>
                <p>
                  <Link to="/contact#" className="text-reset fs-5">
                    Contact
                  </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 ft-links">
                <h3 className="text-uppercase fw-bold mb-4">Useful links</h3>
                <p>
                  <Link to="/signpage#" className="text-reset fs-5">
                    Sign Page
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 footer-contact">
                <h3 className="text-uppercase fw-bold mb-4">Contact</h3>
                <p className="fs-5">
                  <FontAwesomeIcon icon={faHouse} className="me-3" /> Egypt, EG
                  10001, EG
                </p>
                <p className="fs-5">
                  <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                  info@example.com
                </p>
                <p className="fs-5">
                  <FontAwesomeIcon icon={faPhone} className="me-3" />
                  +20 1xxxxxxxxx
                </p>
                <p className="fs-5">
                  <FontAwesomeIcon icon={faFax} className="me-3" />
                  +20 1xxxxxxxxx
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4 text-white-50">
          {" "}
          &copy; 2024 iFix. All rights reserved
        </div>
      </footer>
    </>
  );
};
export default Footer;
