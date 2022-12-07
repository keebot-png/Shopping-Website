import React, { useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {
  selectedProduct,
  removeSelectedProduct,
} from '../redux/actions/productActions';

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const {
    image, title, price, category, description,
  } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => err);
      // console.log(response.data);
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== '') fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider" />
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <div href="#" className="ui teal tag label">
                    $
                    {price}
                  </div>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button">
                  <div className="hidden content">
                    <i className="shop icon" />
                  </div>
                  <div className="visible content">Add To Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default ProductDetail;
