import React, { useState } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBoxOpen,
  faCircleInfo,
  faPhone,
  faUser,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../../public/logo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { useUsername } from "../usernameProvider";
import { HashLink as Link } from "react-router-hash-link";
const NavBar = ({ handleShow }) => {
  const { totalUniqueItems } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSearch = (event) => {
    event.preventDefault();
    const searchTermValue = searchTerm.trim().toLowerCase();
    if (!searchTermValue) {
      return;
    }
    setSearchTerm(searchTermValue);
    navigate(`/products?search=${searchTermValue}`);
  };
  const { username } = useUsername();

  return (
    <Navbar expand="lg" variant="dark" className="fixed-top">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/home#">
            <img src={logo} alt="Ifix-Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to="/home#">
              <FontAwesomeIcon icon={faHouse} /> Home
            </Link>

            <Link className="nav-link" to="/products#">
              <FontAwesomeIcon icon={faBoxOpen} /> Products
            </Link>

            <Link className="nav-link" to="/home#about">
              <FontAwesomeIcon icon={faCircleInfo} /> About
            </Link>

            <Link className="nav-link" to="/contact#">
              <FontAwesomeIcon icon={faPhone} /> Contact
            </Link>
          </Nav>

          <Form onSubmit={handleSearch} className="d-flex search">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              type="submit"
              className="search-btn"
              variant="outline-success"
            >
              Search
            </Button>
          </Form>

          <Nav className="socials">
            {username ? (
              <span className="nav-link username">Welcome, {username}!</span>
            ) : (
              <Link className="nav-link user me-0" to="/signpage#">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            )}

            <Nav.Link
              className="cart me-0 .cart-counter-container"
              onClick={handleShow}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              {totalUniqueItems === 0 ? (
                ""
              ) : (
                <span className="cart-counter">{totalUniqueItems}</span>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
