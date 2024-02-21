import { React, useState } from "react";
import "./Checkout.css";
import Payments from "../../../public/card_img.png";
import { useCart } from "react-use-cart";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../../public/Blogo.png";
import brokenCart from "../../../public/broken-cart.png";
const Checkout = () => {
  const { items, cartTotal, updateItemQuantity, removeItem } = useCart();
  const [billingInfo, setBillingInfo] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    phoneNumber: "",
    cardNumber: "",
  });
  const [submittedBillingInfo, setSubmittedBillingInfo] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    let newValue = value;

    if (name === "phoneNumber") {
      newValue = value.replace(/\D/g, "").slice(0, 11);
    }

    if (name === "cardNumber") {
      newValue = value.replace(/\D/g, "").slice(0, 16);

      newValue = newValue
        .replace(/\s+/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim();

      if (!/^[3-5]/.test(newValue)) {
        newValue = newValue.slice(0, -1);
      }
    }

    if (name === "expm" || name === "expy") {
      newValue = value.slice(0, 2);
    }

    if (name === "cvv") {
      newValue = value.slice(0, 4);
    }

    setBillingInfo({
      ...billingInfo,
      [name]: newValue,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    const expMonth = parseInt(billingInfo.expm);
    const currentMonth = new Date().getMonth() + 1;
    if (expMonth < 1 || expMonth > 12 || expMonth < currentMonth) {
      alert("Invalid expiration month.");
      return;
    }

    const expYear = parseInt(billingInfo.expy);
    const currentYear = new Date().getFullYear() % 100;
    if (expYear < currentYear) {
      alert("Invalid expiration year.");
      return;
    }
    setSubmittedBillingInfo(billingInfo);
    if (
      !billingInfo.fullName ||
      !billingInfo.email ||
      !billingInfo.address ||
      !billingInfo.city ||
      !billingInfo.phoneNumber ||
      !billingInfo.cardName ||
      !billingInfo.cardNumber ||
      !billingInfo.expm ||
      !billingInfo.expy ||
      !billingInfo.cvv
    ) {
      alert("Please fill in all fields.");
      return;
    }
  };

  const allFieldsFilled =
    billingInfo.fullName &&
    billingInfo.email &&
    billingInfo.address &&
    billingInfo.city &&
    billingInfo.phoneNumber &&
    billingInfo.cardName &&
    billingInfo.cardNumber &&
    billingInfo.expm &&
    billingInfo.expy &&
    billingInfo.cvv;

  const handleProceedToCheckout = () => {
    if (!allFieldsFilled) {
      alert("Please fill in all fields before proceeding to checkout.");
    } else {
    }
  };

  return (
    <>
      {cartTotal === 0 ? (
        <div className="noproducts text-center align-items-center justify-content-center">
          <div>
            <img src={brokenCart} />

            <h1> Your Cart Is Empty</h1>

            <Link to="/products#">Go Back To Products</Link>
          </div>
        </div>
      ) : (
        <div className="checkout">
          <Link to="/home#" className="checkout-logo">
            <img src={logo} />
          </Link>
          <div className="row">
            <div className="col-lg-7 text-md-start">
              <div className="container checkout-container">
                <form onSubmit={handleSave}>
                  <div className="row">
                    <div className="col">
                      <h3 className="title">billing address</h3>

                      <div className="inputBox">
                        <span>full name</span>
                        <input
                          type="text"
                          placeholder="Your Name"
                          name="fullName"
                          value={billingInfo.fullName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="inputBox">
                        <span>email</span>
                        <input
                          type="email"
                          placeholder="example@example.com"
                          name="email"
                          value={billingInfo.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="inputBox">
                        <span>address</span>
                        <input
                          type="text"
                          placeholder="Address Line 1"
                          name="address"
                          value={billingInfo.address}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="inputBox">
                        <span>city</span>
                        <input
                          type="text"
                          placeholder="EX: Cairo"
                          name="city"
                          value={billingInfo.city}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="inputBox">
                        <span>Phone Number</span>
                        <input
                          type="text"
                          placeholder="01xxxxxxxxx"
                          name="phoneNumber"
                          value={billingInfo.phoneNumber}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="col">
                      <h3 className="title">payment</h3>

                      <div className="inputBox">
                        <span>cards accepted</span>
                        <img src={Payments} alt="Payments Methods" />
                      </div>
                      <div className="inputBox">
                        <span>name on card</span>
                        <input
                          type="text"
                          placeholder="Your Name"
                          onChange={handleInputChange}
                          name="cardName"
                          value={billingInfo.cardName}
                        />
                      </div>
                      <div className="inputBox">
                        <span>card number</span>
                        <input
                          type="text"
                          placeholder="0000 0000 0000 0000"
                          name="cardNumber"
                          value={billingInfo.cardNumber}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="flex">
                        <div className="inputBox">
                          <span>exp year</span>
                          <input
                            type="number"
                            placeholder="YY"
                            onChange={handleInputChange}
                            name="expy"
                            value={billingInfo.expy}
                          />
                        </div>
                        <div className="inputBox">
                          <span>exp month</span>
                          <input
                            type="number"
                            placeholder="MM"
                            onChange={handleInputChange}
                            name="expm"
                            value={billingInfo.expm}
                            max="12"
                          />
                        </div>
                      </div>

                      <div className="inputBox">
                        <span>CVV</span>
                        <input
                          type="number"
                          placeholder="0000"
                          onChange={handleInputChange}
                          name="cvv"
                          value={billingInfo.cvv}
                        />
                      </div>
                    </div>
                  </div>

                  <input type="submit" value="Save" className="submit-btn" />
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <Container className="py-4 px-0 checkout-cart">
                <Row className="justify-content-center">
                  <div className="col-12">
                    <Table className="table-light table-hover m-0">
                      <tbody>
                        {items.map((item, id) => {
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
                                <td>
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
                        })}
                      </tbody>
                    </Table>
                  </div>
                  <div className="col-auto ms-auto mt-5">
                    <h2>Total Price: {cartTotal}£</h2>
                  </div>
                </Row>
              </Container>
              <hr></hr>
              <div className="billing-address text-black-50">
                <h2 className="text-black mb-3">Billing Address</h2>
                <p>Name: {submittedBillingInfo.fullName}</p>
                <p>Email: {submittedBillingInfo.email}</p>
                <p>City: {submittedBillingInfo.city}</p>
                <p>Address: {submittedBillingInfo.address}</p>
                <p>Phone Number: {submittedBillingInfo.phoneNumber}</p>

                {allFieldsFilled ? (
                  <Link to="/success">
                    <input
                      type="submit"
                      value="Procced To Checkout"
                      className="submit-btn text-center checkout-btn"
                    />
                  </Link>
                ) : (
                  <input
                    type="button"
                    value="Proceed To Checkout"
                    className="submit-btn text-center checkout-btn"
                    onClick={handleProceedToCheckout}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
