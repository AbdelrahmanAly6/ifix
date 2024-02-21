import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faHouse,
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeqygwwa");
  const navigate = useNavigate();
  if (state.succeeded) {
    navigate("/received");
  }
  return (
    <>
      <div class="contact">
        <div class="contact-container">
          <div class="contact-row row align-items-center ms-5 mt-5">
            <div class="col-lg-6 display-flex justify-content-start align-items-start text-md-start">
              <div class="contact-title fw-bold">
                <h1 className="fw-bold contact-title">Contact Us</h1>
              </div>
              <div class="contact-text">
                <p className="text-black-50 fs-5 mb-5 mt-4 text-start">
                  Whether you're in need of assistance, have inquiries, or
                  simply want to connect, we're here for you. Feel free to reach
                  out to us via direct message or by filling out the form below.
                  We're committed to providing top-notch support to help you
                  resolve any phone-related issues.
                </p>
              </div>
              <div class="mt-5 text-black-50 fs-5">
                <div class="d-flex">
                  <p>
                    <FontAwesomeIcon icon={faHouse} className="me-3" />
                    Egypt, EG 10001, EG
                  </p>
                </div>
                <hr />
                <div class="d-flex">
                  <p>
                    {" "}
                    <FontAwesomeIcon icon={faPhone} className="me-3" />
                    +20 1xxxxxxxxx
                  </p>
                </div>
                <hr />
                <div class="d-flex">
                  <p>
                    {" "}
                    <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                    info@example.com
                  </p>
                </div>
                <hr />
                <div class="d-flex">
                  <p>
                    {" "}
                    <FontAwesomeIcon icon={faGlobe} className="me-3" />
                    ifix-app.netlify.app/
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="contact-title fw-bold">
                <h1 className="fw-bold contact-title">Send Us a Message</h1>
              </div>
              <div class="contact-section">
                <form onSubmit={handleSubmit}>
                  <div class="contact-form">
                    <input
                      type="text"
                      placeholder="Your Name"
                      id="name"
                      name="name"
                      required
                    />

                    <input
                      type="email"
                      placeholder="Your E-mail"
                      id="email"
                      name="email"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>

                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="7"
                    placeholder="Your Message"
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <input
                    class="send"
                    type="submit"
                    value="Send"
                    disabled={state.submitting}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
