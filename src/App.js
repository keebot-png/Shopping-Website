// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, ProductDetail, ProductListing } from './components';

function App() {
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
