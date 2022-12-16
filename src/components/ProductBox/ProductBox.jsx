import React from 'react';
import "./ProductBox.css"
import img1 from "../../assets/pexels-helena-lopes-933964.jpg"
const ProductBox = () => {
  return (
    <>
      <div className="product-box col col-md-4 col-xl-3">
        <div className="box">
          <span className='title'>go home</span>

          <div className="box-img">
            <img src={img1} alt="" />
          </div>
          <div className="info">
            <h5>
              Lorem ipsum: <span>ipsum</span>
            </h5>
            <hr />
            <h5>
              Lorem ipsum
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
