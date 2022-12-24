import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { RemoveFromCart, ClearCart, ChangeProductCount } from "../../RTK/Reducer/CartReducer";
import "./CartBox.css";
import { CartEmpty } from "../index"
const CartBox = () => {
  // const [count, setCount] = useState(1);
  let { cart } = useSelector((state) => state.CartReducer)
  let dispatch = useDispatch()
  let totalPrice = cart.reduce((acc, product) => {

    acc = Number(acc) + (product.price * product.productCount);
    return (
      acc
    )
  }, [0])
  return (
    <>
      {
        cart.length ? (<div className="cart-box">

          <div className="container">
            <div className="box-table">
              <Table>
                <thead>
                  <tr>
                    <th>
                      <div>#</div>
                    </th>
                    <th>
                      <div>Product</div>
                    </th>
                    <th>
                      <div>image</div>
                    </th>
                    <th>
                      <div>Unit Price</div>
                    </th>

                    <th>
                      <div>Quantity</div>
                    </th>
                    <th>
                      <div>Total Price
                      </div>
                    </th>
                    <th>
                      <div>Actions</div>
                    </th>
                  </tr>
                </thead>
                <div className="empty"></div>
                {
                  cart.map((el, index) => {
                    return (

                      <tbody key={el.id}>
                        <tr>
                          <td>
                            {index + 1}
                          </td>
                          <td>
                            <div>
                              <p>
                                {el.description}
                              </p>
                            </div>
                          </td>
                          <td>
                            <div>

                              <img src={el.thumbnail} alt="" />
                            </div>
                          </td>
                          <td>
                            <div>
                              ${el.price}
                            </div>
                          </td>
                          <td>
                            <div>
                              <div className="quantity">
                                <div>
                                  <button onClick={(e) => {
                                    if (e.target.parentElement.querySelector("span").innerHTML > 1) {
                                      // e.target.parentElement.querySelector("span").innerHTML -= 1
                                      dispatch(ChangeProductCount({ type: 'decrease', id: el.id, }))
                                    }
                                  }}>-</button> <span>{el.productCount}</span><button onClick={(e) => {
                                    // e.target.parentElement.querySelector("span").innerHTML = parseInt(e.target.parentElement.querySelector("span").innerHTML) + 1
                                    dispatch(ChangeProductCount({ type: 'increase', id: el.id, }))

                                  }}>+</button>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div>
                              ${
                                el.price * el.productCount
                              }
                            </div>
                          </td>
                          <td>
                            <div>
                              <button onClick={(e) => {
                                dispatch(RemoveFromCart(el.id))
                              }}>delete</button>
                            </div>
                          </td>

                        </tr>


                      </tbody>
                    )

                  })

                }

              </Table>
            </div>

            <div className="info">
              <div className="box">
                <h6>Total ({cart.length}) items: <span>$ {totalPrice}</span></h6>
                <button>check out</button>
              </div>
              <button onClick={(e) => {
                dispatch(ClearCart())
              }}>
                <RiDeleteBinLine />
                clear Cart
              </button>

            </div>
          </div>
        </div>) : (<CartEmpty />)


      }

    </>
  );
};

export default CartBox;
