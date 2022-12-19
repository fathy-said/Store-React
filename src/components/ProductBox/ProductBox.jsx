import React from 'react';
import "./ProductBox.css"
import img1 from "../../assets/pexels-helena-lopes-933964.jpg"
const ProductBox = ({ img, name, id, brand }) => {
  return (
    <>
      <div className="product-box ">
        <div className="box">
          <span className='title'>go home</span>

          <div className="box-img">
            <img src={img} alt="" />
          </div>
          <div className="info">
            <h5>
              brand: <span>{brand}</span>
            </h5>
            <hr />
            <h5>
              {name}
            </h5>

            <div className="box-span">
              <span>$22</span>
              <span>$124</span>
              <span>(%off)</span>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default ProductBox;
