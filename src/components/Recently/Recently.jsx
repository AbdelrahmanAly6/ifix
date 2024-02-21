import React from "react";
import "./Recently.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useCart } from "react-use-cart";
const Recently = (props) => {
  const { addItem, inCart } = useCart();
  return (
    <div className="recently">
      <Card style={{ width: "20rem" }} className="text-center">
        <Card.Img variant="top" src={props.img} className="mb-4" />
        <Card.Body>
          <Card.Title className="fw-bold">{props.name}</Card.Title>
          <Card.Text className="text-black-50">{props.price}</Card.Text>
          {inCart(props.id) === true ? (
            <h2 className="incart">In Cart</h2>
          ) : (
            <Button className="atc" onClick={() => addItem(props.item)}>
              Add To Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
export default Recently;
