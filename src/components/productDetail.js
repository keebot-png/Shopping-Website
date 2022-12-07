import React, { useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../redux/products/products';
import "./productDetail.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.selectedProduct);
  const {
    image, title, price, category, description,
  } = product;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== '') dispatch(getProductDetails(productId));
  }, [dispatch, productId]);

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
                <h2 className="ui teal tag label">${price}</h2>
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