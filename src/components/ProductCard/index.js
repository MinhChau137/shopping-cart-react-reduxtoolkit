import React from 'react';
import '../../styles/ProductCard.css';

const ProductCard = ({product}) => {
  return (
        <div className="col-xl-4 col-lg-4 col-md-4 col-6">
          <div className="product-card">
            <img src={product.image} alt = ""/>
            <div className="product-information">
              <h2 className="product-name"> {product.name}</h2>
              <div className="product-detail">
                <div className="cost">{product.price}</div>
                <div className="quantity">In stock: {product.in_stock}</div>
              </div>
              <p className="product-describe">
                {product.desc}
              </p>
              <div className="buttons">
                <button class="btn btn-warning">View</button>
                <button class="btn btn-danger">Buy</button>
              </div>
            </div>
          </div>
        </div>
  );
};

export default ProductCard;
