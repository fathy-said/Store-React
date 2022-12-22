import React from 'react';
import "./DetailsBox.css"
const DetailsBox = () => {
  return (
    <>
      <div className="detail-box">
        <div className="container">
          <div className="box-img">
            <div className="img-top">
              <img src="https://i.dummyjson.com/data/products/5/1.jpg" alt="" />

            </div>
            <div className="img-info">
              <img src="https://i.dummyjson.com/data/products/5/1.jpg" alt="" />
              <img src="https://i.dummyjson.com/data/products/5/1.jpg" alt="" />
              <img src="https://i.dummyjson.com/data/products/5/1.jpg" alt="" />
            </div>
          </div>
          <div className="box-content">
            <h5 className='name'>iphone 8</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eius odit ipsa sapiente officia aut asperiores. Expedita iste </p>
            <div className="info">
              <h6>

                <span>Rating:</span>499

              </h6>
              <h6>
                <span>brand:</span>L'Oreal Paris
              </h6>
              <h6>
                <span>Category:</span>Skincare
              </h6>
            </div>

            <div className="content-detail">
              <div>
                <h5>$00</h5>
                <h6>Lorem ipsum dolor</h6>

              </div>
              <div>
                <h5>$11</h5>
                <span>10.4 %off</span>

              </div>
            </div>
            <div className="quantity">
              <h6>Quantity :</h6>
            </div>
            <div className="button-box">
              <button>add to cart</button>
              <button>buy now</button>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}

export default DetailsBox;
