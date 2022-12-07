import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import ProductComponents from './productComponents';
import { setProducts } from '../redux/actions/productActions';

const ProductListing = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => err);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui centered grid container">
      <ProductComponents />
    </div>
  );
};

export default ProductListing;
