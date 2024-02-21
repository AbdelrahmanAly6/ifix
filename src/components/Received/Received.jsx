import React from "react";
import { Link } from "react-router-dom";
import "./Received.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Received = () => {
  return (
    <div className="received text-center align-items-center justify-content-center">
      <div>
        <FontAwesomeIcon icon={faCheck} className="check-icon" />

        <h1 className="fw-bold"> Thanks for Contacting Us!</h1>
        <p>
          We appreciate that you've taken the time to write us. We'll get back
          to you very soon
        </p>

        <Link to="/home">Go Back To Home</Link>
      </div>
    </div>
  );
};

export default Received;
