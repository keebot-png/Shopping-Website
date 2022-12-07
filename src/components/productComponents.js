import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductComponents = ({ products }) => {
  const renderList = products.map((product) => {
    const {
      id, title, image, price, category,
    } = product;

    return (
      <div className="twelve wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">
                  {' '}
                  $
                  {price}
                </div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

ProductComponents.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number,
      title: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
      category: PropTypes.string,
    },
  )).isRequired,
};

export default ProductComponents;
