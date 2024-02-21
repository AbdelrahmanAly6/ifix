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

  window.addEventListener("load", function () {
    const container = document.getElementById("sign-container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");
    registerBtn.addEventListener("click", () => {
      container.classList.add("active");
    });

    loginBtn.addEventListener("click", () => {
      container.classList.remove("active");
    });
  });

  return (
    <>
      <div className="sign">
        <div className="mb-5">
          <Link to="/home" className="sign-logo">
            <img src={logo} />
          </Link>
        </div>
        <div class="sign-container" id="sign-container">
          <div class="form-container sign-up">
            <form>
              <h2>Create Account</h2>
              <div class="sign-social-icons">
                <a href="#" class="icon">
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="#" class="icon">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" class="icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" class="icon">
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
          <div class="form-container sign-in">
            <form>
              <h1>Sign In</h1>
              <div class="sign-social-icons">
                <a href="#" class="icon">
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="#" class="icon">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" class="icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" class="icon">
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
          <div class="toggle-container">
            <div class="toggle">
              <div class="toggle-panel toggle-left">
                <h1>Start Your Fixing Journey</h1>
                <p>
                  Register with your personal details to use all of site
                  features
                </p>
                <button class="hidden" id="login">
                  Sign In
                </button>
              </div>
              <div class="toggle-panel toggle-right">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button class="hidden" id="register">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sign-footer">
          <p class="text-center text-white">
            &copy; 2024 iFix. All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};
export default SignPage;
