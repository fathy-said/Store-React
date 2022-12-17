import React from 'react';
import { ProductBox } from "../index.js"

import { ContainerProduct, SliderBox, TitleBox } from "../"
const PageBox = () => {
  return (
    <>
      <div className="container">
        <SliderBox />
        <TitleBox text={`SEE OUR Smartphones`} />
        <ContainerProduct >
          <ProductBox />
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

export default PageBox;
