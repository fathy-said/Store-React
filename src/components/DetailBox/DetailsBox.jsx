import React, { useEffect, useState } from 'react';
import "./DetailsBox.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsThunk } from '../../RTK/Thunk/DetailsThunk';
const DetailsBox = () => {
  let dispatch = useDispatch()
  let { detailsData } = useSelector((state) => state.DetailsReducer)
  const [count, setCount] = useState(1);
  const [imgBg, setImgBg] = useState(null);
  let param = useParams()
  useEffect(() => {
    dispatch(detailsThunk({ id: param.detail }))
  }, [param.detail]);
  return (
    <>

      {
        detailsData.id ? (
          <>
            <div className="detail-box">
              <div className="container">
                <div className="box-img">
                  <div className="img-top">
                    {
                      imgBg !== null ? (
                        <img src={imgBg} alt="" />
                      ) : (<img src={detailsData.thumbnail} alt="" />)
                    }

                  </div>
                  <div className="img-info">

                    {
                      detailsData.images ? (
                        detailsData.images.map((el, index) => {
                          return (
                            <img src={el} alt="" key={index} onClick={(e) => {
                              setImgBg(e.target.src)

                            }} />
                          )
                        })
                      ) : (null)
                    }
                  </div>
                </div>
                <div className="box-content">
                  <h5 className='name'>
                    {detailsData.title}
                  </h5>
                  <p>
                    {detailsData.description}
                  </p>
                  <div className="info">
                    <h6>

                      <span>Rating:</span>{detailsData.rating}

                    </h6>
                    <h6>
                      <span>brand:</span>{detailsData.brand}
                    </h6>
                    <h6>
                      <span>Category:</span>{detailsData.category}
                    </h6>
                  </div>

                  <div className="content-detail">
                    <div>
                      <h5>${detailsData.price}</h5>
                      <h6>Inclusive of all taxes</h6>

                    </div>
                    <div>
                      <h5>${detailsData.price}</h5>
                      <span>{detailsData.discountPercentage}% off</span>

                    </div>
                  </div>
                  <div className="quantity">
                    <h6>Quantity :</h6>
                    <div>
                      <button onClick={(e) => {
                        let res = count - 1
                        if (res > 0) {
                          setCount(res)
                        }
                      }}>-</button> <span>{count}</span><button onClick={(e) => {
                        let res = count + 1
                        setCount(res)
                      }}>+</button>
                    </div>
                  </div>
                  <div className="button-box">
                    <button><AiOutlineShoppingCart /> add to cart</button>
                    <button>buy now</button>
                  </div>

                </div>
              </div>

            </div>
          </>
        ) : (null)
      }

    </>
  );
}

export default DetailsBox;
{/* <>
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
            <h6>Inclusive of all taxes</h6>

          </div>
          <div>
            <h5>$11</h5>
            <span>10.4 %off</span>

          </div>
        </div>
        <div className="quantity">
          <h6>Quantity :</h6>
          <div>
            <button onClick={(e) => {
              let res = count - 1
              if (res > 0) {
                setCount(res)
              }
            }}>-</button> <span>{count}</span><button onClick={(e) => {
              let res = count + 1
              setCount(res)
            }}>+</button>
          </div>
        </div>
        <div className="button-box">
          <button><AiOutlineShoppingCart /> add to cart</button>
          <button>buy now</button>
        </div>

      </div>
    </div>

  </div>
</> */}