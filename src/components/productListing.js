import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import ProductComponents from './productComponents';
import { setProducts } from '../redux/actions/productActions';

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  // const inputEl = useRef("");

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('Error', err);
      });
      // console.log(response.data);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  
  // getSearchTerm = () => {
  //   props.searchKeyword(inputEl.current.value);
  // }
  console.log(products)

  return (
    <div className="ui centered grid container">
      {/* <div className="ui search">
        <div className="ui icon input">
          <input 

          type="text" 
          placeholder="Search Items" 
          className='prompt' 
          value={props.term} 
          onChange={getSearchTerm} />

          <i className="search icon"></i>
        </div>
      </div> */}
      <ProductComponents />
    </div>
  );
};

export default ProductListing;
