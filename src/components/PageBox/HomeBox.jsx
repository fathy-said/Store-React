import React, { useEffect } from 'react';
import { ProductBox } from "../index.js"
import { ProductThunk } from '../../RTK/Thunk/ProductThunk.jsx';
import { ContainerProduct, SliderBox, TitleBox } from ".."
import { useDispatch, useSelector } from 'react-redux';

const HomeBox = () => {
  let dispatch = useDispatch()
  let { products } = useSelector((state) => state.ProductReducer)
  console.log(products);
  useEffect(() => {
    dispatch(ProductThunk())
  }, []);
  return (
    <>
      <div className="container">
        <SliderBox />
        <TitleBox text={`SEE OUR Smartphones`} />
        <ContainerProduct >

          {
            products.length ? products.map((pro) => {

              return <ProductBox />


            }) : null
          }
        </ContainerProduct>
        {/* ================================================================ */}
        <TitleBox text={`SMARTPHONES`} />
        <ContainerProduct />        <ContainerProduct >
          <ProductBox />
        </ContainerProduct>
        {/* ================================================================ */}

        <TitleBox text={`LAPTOPS`} />
        <ContainerProduct >
          <ProductBox />
        </ContainerProduct>
        {/* ================================================================ */}

        <TitleBox text={`FRAGRANCES`} />
        <ContainerProduct >
          <ProductBox />
        </ContainerProduct>
        {/* ================================================================ */}

        <TitleBox text={`SKINCARE`} />
        <ContainerProduct >
          <ProductBox />
        </ContainerProduct>
        {/* ================================================================ */}

      </div>
    </>
  );
}

export default HomeBox;
