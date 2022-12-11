import React from 'react';

import './Navbar.css';
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";
import { HiOutlineSearch } from "react-icons/hi";

const Navbar = () => (
  <div className='navbar-box'>
    <div className="container">
      <div className="nav-top">

        <ul className="left-box">
          <li><a href="">Seller Center</a></li>
          <li><a href="">Download</a></li>
          <li>Follow
            <a href="">
              <IoLogoFacebook />
            </a>
            <a href="">
              <IoLogoInstagram />
            </a>
          </li>
        </ul>
        <ul className="right-box">
          <li><a href="">
            <AiFillQuestionCircle />
            Support</a></li>
          <li><a href="">Register</a></li>
          <li><a href="">Log in</a></li>
        </ul>

      </div>
      <div className="nav-bottom">
        <div className="box-left">
          <span className='menu'>
            <TbMenu2 />
          </span>

          <a href="">SnapUp.</a>
        </div>
        <div className="box-center">
          <form action="" className='d-none d-lg-flex'>

            <input type="text" name="" id="" placeholder="Search your preferred items here" />
            <button>
              <HiOutlineSearch />
            </button>

          </form>
          <ul className="info d-none d-lg-flex">
            <li>Smartphones</li>
            <li>Laptops</li>
            <li>Fragrances</li>
            <li>Skincare</li>
            <li>Groceries</li>
            <li>Home Decoration</li>
            <li>Furniture</li>
            <li>Tops</li>
          </ul>

        </div>

        <div className="box-right">
          <div className='shop'>
            <span>2</span>
            <FaShoppingBag />
          </div>
        </div>
      </div>
      <div className="box-search d-flex  d-lg-none ">
        <form action="" className=''>

          <input type="text" name="" id="" placeholder="Search your preferred items here" />
          <button>
            <HiOutlineSearch />
          </button>

        </form>


      </div>
    </div>
  </div>
);

export default Navbar;