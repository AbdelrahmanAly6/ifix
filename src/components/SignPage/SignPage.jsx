import React, { useState } from "react";
import "./SignPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../../public/Blogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useUsername } from "../usernameProvider";
const SignPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { setUsername, username } = useUsername();
  const [isSignInActive, setIsSignInActive] = useState(true);

  const handleSignIn = (e) => {
    e.preventDefault();

    if (email === "admin@admin.com" && password === "123456") {
      const username = email.split("@")[0];
      setUsername(username);
      navigate("/home");
    } else {
      setErrorMessage("Wrong credentials. Please try again.");
    }
  };

  const forgotPassword = () => {
    alert("Email: admin@admin.com\nPassword: 123456");
  };

  return (
    <>
      <div className="sign">
        <div className="mb-5">
          <Link to="/home" className="sign-logo">
            <img src={logo} />
          </Link>
        </div>
        <div className={`sign-container ${isSignInActive ? "" : "active"}`}>
          <div className="form-container sign-up">
            <form>
              <h2>Create Account</h2>
              <div className="sign-social-icons">
                <a href="#" className="icon">
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="#" className="icon">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="icon">
                  <FontAwesomeIcon icon={faApple} />
                </a>
              </div>
              <span>or use your email for registeration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
          <div
            className={`form-container sign-in ${
              isSignInActive ? "active" : ""
            }`}
          >
            <form>
              <h1>Sign In</h1>
              <div className="sign-social-icons">
                <a href="#" className="icon">
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="#" className="icon">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="icon">
                  <FontAwesomeIcon icon={faApple} />
                </a>
              </div>
              <span>or use your email password</span>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <a href="#" onClick={forgotPassword}>
                Forget Your Password?
              </a>
              <button onClick={handleSignIn}>Sign In</button>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div
                className={`toggle-panel toggle-left ${
                  isSignInActive ? "active" : ""
                }`}
              >
                <h1>Start Your Fixing Journey</h1>
                <p>
                  Register with your personal details to use all of site
                  features
                </p>
                <button
                  className="hidden"
                  id="login"
                  onClick={() => setIsSignInActive(true)}
                >
                  Sign In
                </button>
              </div>
              <div
                className={`toggle-panel toggle-right ${
                  isSignInActive ? "" : "active"
                }`}
              >
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button
                  className="hidden"
                  id="register"
                  onClick={() => setIsSignInActive(false)}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sign-footer">
          <p className="text-center text-white">
            &copy; 2024 iFix. All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};
export default SignPage;
