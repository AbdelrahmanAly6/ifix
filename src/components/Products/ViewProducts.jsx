import React from "react";
import "./Products.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useCart } from "react-use-cart";

const ViewProducts = (props) => {
  const { addItem, inCart } = useCart();
  return (
    <>
      <Card style={{ width: "18rem" }} className="text-center">
        <Card.Img variant="top" src={props.img} className="mb-4" />
        <Card.Body>
          <Card.Title className="fw-bold">{props.name}</Card.Title>
          <Card.Text className="text-black-50">{props.price + "£"}</Card.Text>
          {inCart(props.item.id) === true ? (
            <h2 className="incart">In Cart</h2>
          ) : (
            <Button className="atc" onClick={() => addItem(props.item)}>
              Add To Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default ViewProducts;
