import React from 'react';
import "./ContainerProduct.css"
import { ProductBox } from "../index.js"
const ContainerProduct = ({ children }) => {
  return (
    <div className='product-container  '>
      {children}
    </div>
  );
}

export default ContainerProduct;
