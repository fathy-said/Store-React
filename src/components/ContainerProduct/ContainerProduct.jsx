import React from 'react';
import "./ContainerProduct.css"
import { ProductBox } from "../index.js"
const ContainerProduct = () => {
  return (
    <div className='product-container row '>
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
    </div>
  );
}

export default ContainerProduct;
