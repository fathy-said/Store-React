import React from 'react';
import "./CartEmpty.css"
import Img from "../../assets/shopping_cart.png"
import { Link } from 'react-router-dom';
const CartEmpty = () => {
  return (
    <>
      <div className="cart-empty">
        <div className="box">
          <img src={Img} alt="" />
          <h6>Your shopping cart is empty.</h6>
          <Link to={"/"}>
            <button>Go shopping Now</button>
          </Link>

        </div>

      </div>
    </>
  );
}

export default CartEmpty;
