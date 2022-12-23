import React, { useState } from "react";
import { searchProduct } from "../../RTK/Thunk/SearchProduct";
import "./Navbar.css";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";
import { HiOutlineSearch } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { chickSearch } from "../../RTK/Reducer/SearchReducer";
import { Link, useNavigate } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";

const Navbar = () => {
  let [menuActive, setMenuActive] = useState('');
  let dispatch = useDispatch();
  let navget = useNavigate('')
  return (

    <>
      <div className="navbar-box">
        <div className="container">
          <div className="nav-top">
            <ul className="left-box">
              <li>
                <a href="">Seller Center</a>
              </li>
              <li>
                <a href="">Download</a>
              </li>
              <li>
                Follow
                <a href="">
                  <IoLogoFacebook />
                </a>
                <a href="">
                  <IoLogoInstagram />
                </a>
              </li>
            </ul>
            <ul className="right-box">
              <li>
                <a href="">
                  <AiFillQuestionCircle />
                  Support
                </a>
              </li>
              <li>
                <a href="">Register</a>
              </li>
              <li>
                <a href="">Log in</a>
              </li>
            </ul>
          </div>
          <div className="nav-bottom">
            <div className="box-left">
              <span className="menu" onClick={(e) => {
                setMenuActive(true)
              }} >
                <TbMenu2 />
              </span>

              <Link to="/">SnapUp.</Link>
            </div>
            <div className="box-center">
              <form
                action=""
                className="d-none d-lg-flex"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search your preferred items here"
                  onChange={(e) => {
                    if (e.target.value.length > 0) {
                      dispatch(
                        searchProduct({
                          title: e.target.value,
                        })
                      );
                      // dispatch(searchProduct({ title: 'iphone' }))
                      dispatch(
                        chickSearch({ type: true })
                      );

                      navget('/')
                    } else {
                      dispatch(
                        chickSearch({ type: false })
                      );
                    }
                  }}
                />
                <button>
                  <HiOutlineSearch />
                </button>
              </form>
              <ul className="info d-none d-lg-flex">
                <Link to="/category/smartphones">
                  <li>Smartphones</li>
                </Link>
                <Link to="/category/laptops">
                  <li>Laptops</li>
                </Link>
                <Link to="/category/fragrances">
                  <li>Fragrances</li>
                </Link>
                <Link to="/category/skincare">
                  <li>Skincare</li>
                </Link>
                <Link to="/category/groceries">
                  <li>Groceries</li>
                </Link>
                <Link to="/category/home-decoration">
                  <li>Home Decoration</li>
                </Link>
                <Link to="/category/furniture">
                  <li>Furniture</li>
                </Link>
                <Link to="/category/tops">
                  <li>Tops</li>
                </Link>
              </ul>
            </div>

            <div className="box-right">
              <div className="shop">
                <span>2</span>
                <FaShoppingBag />
              </div>
            </div>
          </div>
          <div className="box-search d-flex  d-lg-none ">
            <form
              action=""
              className=""
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="text"
                name=""
                id=""
                placeholder="Search your preferred items here"
                onChange={(e) => {
                  if (e.target.value.length > 0) {
                    dispatch(
                      chickSearch({ type: true })
                    );
                    dispatch(
                      searchProduct({
                        title: e.target.value,
                      })
                    );
                    navget('/')

                    // dispatch(searchProduct({ title: 'iphone' }))
                  } else {
                    console.log("said");

                    dispatch(
                      chickSearch({ type: false })
                    );
                  }
                }}
              />
              <button>
                <HiOutlineSearch />
              </button>
            </form>
          </div>
        </div>

        <div className={menuActive == true ? "menu-box active" : 'menu-box'}>
          <div className="box">
            <div className="title">
              <h5>
                ALL CATEGORIES
              </h5>
              <span onClick={(e) => {
                setMenuActive(false)
              }}>
                <GrFormClose />
              </span>
            </div>
            <ul>
              <Link to={'/category/smartphones'}> <li>Smartphones</li></Link>

              <Link to={'/category/laptops'}><li>Laptops</li></Link>


              <Link to={'/category/fragrances'}><li>Fragrances</li></Link>


              <Link to={'/category/skincare'}> <li>Skincare</li></Link>


              <Link to={'/category/groceries'}>    <li>Groceries</li></Link>


              <Link to={'/category/home-decoration'}> <li>Home Decoration</li></Link>


              <Link to={'/category/furniture'}><li>Furniture</li></Link>
              <Link to={'/category/tops'}><li>tops</li></Link>


              <Link to={'/category/womens-dresses'}> <li>Womens Dresses</li></Link>


              <Link to={'/category/womens-shoes'}> <li>Womens Shoes</li></Link>


              <Link to={'/category/mens-shirts'}><li>Mens Shirts</li></Link>


              <Link to={'/category/mens-shoes'}><li>Mens Shoes</li></Link>


              <Link to={'/category/mens-watches'}> <li>Mens Watches</li></Link>


              <Link to={'/category/omens-bags'}><li>Womens Bags</li></Link>


              <Link to={'/category/womens-jewellery'}><li>Womens Jewellery</li></Link>


              <Link to={'/category/sunglasses'}>  <li>Sunglasses</li></Link>


              <Link to={'/category/automotive'}><li>Automotive</li></Link>


              <Link to={'/category/motorcycle'}> <li>Motorcycle</li></Link>


              <Link to={'/category/lighting'}> <li>Lighting</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </>

  );
};

export default Navbar;
