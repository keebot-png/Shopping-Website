// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Header, ProductDetail, ProductListing } from "./components";

function App() {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [products, setProducts] = useState([]);
  // const [searchResults, setSearchResults] = useState([]);

  // const searchHandler = (searchItem) => {
  //   setSearchTerm(searchItem);
  //   if (searchItem !== "") {
  //     const newItemList = products.filter((product) => {
  //       return Object.values(product)
  //         .join(" ")
  //         .toLowerCase()
  //         .includes(searchItem.toLowerCase());
  //     });
  //   }
  // };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ProductListing />
            }
          />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
