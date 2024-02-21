import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Success.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Success = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const generateRandomNumber = () => {
    const min = 100000000;
    const max = 999999999;
    const generatedNumber = Math.floor(Math.random() * (max - min + 1) + min);
    setRandomNumber(generatedNumber);
  };
  return (
    <div className="success text-center align-items-center justify-content-center">
      <div>
        <FontAwesomeIcon icon={faCircleCheck} className="check-icon" />

        <h1 className="fw-bold"> Thank You</h1>
        <p>order successfully placed</p>
        {randomNumber && <p>Your Reference Number Is #{randomNumber}</p>}

        <Link to="/home">Go Back To Home</Link>
      </div>
    </div>
  );
};

export default Success;
