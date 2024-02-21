import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Error.css";

const Error = () => {
  return (
    <div className="error text-center align-items-center justify-content-center">
      <div>
        <h1 className="fw-bold">ERROR</h1>
        <p>This Page Doesn't Exist</p>
        <Link to="/home">Go Back To Home</Link>
      </div>
    </div>
  );
};

export default Error;
