import React from "react";
import "./Products.css";
import { allProductsData } from "../AllProductsData";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useCart } from "react-use-cart";
import ViewProducts from "./ViewProducts";
import { useLocation } from "react-router-dom";
const Products = () => {
  const { addItem, inCart } = useCart();
  const [items, setItems] = useState(allProductsData);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const filterItems = (catItem) => {
    const updateItems = allProductsData.filter((curItem) => {
      return curItem.category === catItem;
    });
    setItems(updateItems);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    if (!searchTerm) {
      setItems(allProductsData);
    } else {
      const filteredItems = allProductsData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
      setItems(filteredItems);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("search");
    if (query) {
      setSearchTerm(query);
    }
  }, [location.search]);

  useEffect(() => {
    const filteredItems = allProductsData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setItems(filteredItems);
  }, [searchTerm]);

  return (
    <>
      <div class="products-section">
        <div class="row ms-1">
          <div class="col-lg-2 text-md-start">
            <h1 class="products-title">Products</h1>
            <hr className="divider"></hr>
            <Form className="d-flex search mb-3">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearch}
              />
            </Form>
            <div class="link">
              <button onClick={() => setItems(allProductsData)}>All</button>
            </div>
            <div class="link">
              <button onClick={() => filterItems("screen")}>Screen</button>
            </div>
            <div class="link">
              <button onClick={() => filterItems("charge flex")}>
                Charging Flex
              </button>
            </div>
            <div class="link">
              <button onClick={() => filterItems("back cover")}>
                Back Cover
              </button>
            </div>
            <div class="link">
              <button onClick={() => filterItems("battery")}>Batteries</button>
            </div>
            <div class="link">
              <button onClick={() => filterItems("other")}>Other</button>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="products-container">
              {items.map((item) => (
                <ViewProducts
                  key={item.id}
                  name={item.name}
                  img={item.img}
                  price={item.price}
                  item={item}
                  addItem={addItem}
                  inCart={inCart}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
