import React from "react";
import "./ShoppingCart.css";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useCart } from "react-use-cart";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import NavBar from "../NavBar/NavBar";
import { HashLink as Link } from "react-router-hash-link";

const ShoppingCart = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { items, cartTotal, updateItemQuantity, removeItem } = useCart();
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fs-1 fw-bold">Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container className="py-4 px-0 cart-container">
            <Row className="justify-content-center">
              <div className="col-12">
                <Table className="table-light table-hover m-0">
                  <tbody>
                    {cartTotal === 0 ? (
                      <h1 className="text-center mb-5 text-black-50 fs-2">
                        Your Cart Is Empty
                      </h1>
                    ) : (
                      items.map((item, id) => {
                        return (
                          <>
                            <tr key={id}>
                              <td>
                                <img
                                  src={item.img}
                                  style={{ height: "6rem" }}
                                />
                              </td>
                              <td>{item.name}</td>
                              <td style={{ textWrap: "nowrap" }}>
                                <Button
                                  className="btn-info counter-button increase-button me-2"
                                  onClick={() =>
                                    updateItemQuantity(
                                      item.id,
                                      item.quantity + 1
                                    )
                                  }
                                >
                                  +
                                </Button>
                                {item.quantity}
                                <Button
                                  className="btn-info counter-button decrease-button ms-2"
                                  onClick={() =>
                                    updateItemQuantity(
                                      item.id,
                                      item.quantity - 1
                                    )
                                  }
                                >
                                  -
                                </Button>
                              </td>
                              <td>{item.price * item.quantity}</td>
                              <td>
                                <Button
                                  className="btn btn-danger ms-2"
                                  onClick={() => removeItem(item.id)}
                                >
                                  Remove
                                </Button>
                              </td>
                            </tr>
                          </>
                        );
                      })
                    )}
                  </tbody>
                </Table>
              </div>
              {cartTotal > 1 ? (
                <>
                  {" "}
                  <div className="row-auto ms-auto mt-4">
                    <h2>Total Price: {cartTotal}£</h2>
                  </div>
                  <Link className="col-auto mt-3 gt-checkout" to="/checkout#">
                    <Button>Checkout</Button>
                  </Link>
                </>
              ) : (
                ""
              )}
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
      <NavBar handleShow={handleShow} />
    </>
  );
};

export default ShoppingCart;
