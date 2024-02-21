import React from "react";
import "./SeeMore.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const SeeMore = () => {
  return (
    <Link to="/products">
      <div className="more">
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </Link>
  );
};
export default SeeMore;
