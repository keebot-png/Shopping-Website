import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/products/products";
import ProductComponents from "./productComponents";
import "./productListing.css";

const ProductListing = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [products, searchTerm]);

  return (
    <div className="main">
      
      <div className="ui centered grid container">
      <div className="ui left corner labeled input">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
        <ProductComponents
          products={searchTerm.length > 0 ? searchResults : products}
        />
      </div>
    </div>
  );
};

export default ProductListing;
