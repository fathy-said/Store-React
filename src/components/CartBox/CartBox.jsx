import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import "./CartBox.css";
const CartBox = () => {
  const [count, setCount] = useState(1);
  let { cart } = useSelector((state) => state.CartReducer)
  let dispatch = useDispatch()
  console.log(cart)
  return (
    <>
      <div className="cart-box">
        <div className="container">
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
                                  e.target.parentElement.querySelector("span").innerHTML -= 1

                                }


                              }}>-</button> <span>{count}</span><button onClick={(e) => {
                                e.target.parentElement.querySelector("span").innerHTML = parseInt(e.target.parentElement.querySelector("span").innerHTML) + 1

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
                          <button>delete</button>
                        </div>
                      </td>

                    </tr>


                  </tbody>
                )

              })

            }

          </Table>
        </div>
      </div>
    </>
  );
};

export default CartBox;
