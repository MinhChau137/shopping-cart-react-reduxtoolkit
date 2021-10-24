import React from 'react';
import ProductCard from '../components/ProductCard';
import Products from '../Data';
import "../styles/Home.css"

const Home = () => {
  return (
    <div className="container product-list">
      <div className="row">
        {!!Products &&
          Products.map((product, index) => <ProductCard product={product} key={index} />)}
      </div>
    </div>
  );
};

export default Home;
