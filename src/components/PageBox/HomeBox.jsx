import React, { useEffect, useRef } from 'react';
import { ProductBox } from "../index.js"
import { ProductThunk } from '../../RTK/Thunk/ProductThunk.jsx';
import { ContainerProduct, SliderBox, TitleBox } from ".."
import { useDispatch, useSelector } from 'react-redux';

const HomeBox = () => {
  let dispatch = useDispatch()
  let { products } = useSelector((state) => state.ProductReducer)
  let { searchData } = useSelector((state) => state.SearchReducer)

  let showData = useRef(true)
  useEffect(() => {
    if (showData.current === true) {
      dispatch(ProductThunk())
      showData.current = false

    }
  }, []);
  return (
    <>

      {
        searchData.length > 0 ? (
          <>
            <div className="container">
              <SliderBox />
              <TitleBox text={`Search data`} />
              <ContainerProduct >

                {
                  searchData.length ? searchData.map((pro) => {

                    return <ProductBox img={pro.thumbnail} id={pro.id} key={pro.id} name={pro.title} brand={pro.brand} />




                  }) : null
                }

              </ContainerProduct>

            </div>
          </>) : (
          <>
            <div className="container">
              <SliderBox />
              <TitleBox text={`SEE OUR PRODUCTS`} />
              <ContainerProduct >

                {
                  products.length ? products.map((pro) => {

                    return <ProductBox img={pro.thumbnail} id={pro.id} key={pro.id} name={pro.title} brand={pro.brand} />




                  }) : null
                }

              </ContainerProduct>
              {/* ================================================================ */}
              <>
                <TitleBox text={`SMART PHONES`} />
                <ContainerProduct />
                <ContainerProduct >
                  {
                    products.length ? products.map((pro) => {
                      if (pro.category === "smartphones") {
                        return <ProductBox img={pro.thumbnail} id={pro.id} key={pro.id} name={pro.title} brand={pro.brand} />

                      }


                    }) : null
                  }
                </ContainerProduct>
              </>

              {/* ================================================================ */}
              <>
                <TitleBox text={`LAPTOPS`} />
                <ContainerProduct >
                  {
                    products.length ? products.map((pro) => {
                      if (pro.category === "laptops") {
                        return <ProductBox img={pro.thumbnail} id={pro.id} key={pro.id} name={pro.title} brand={pro.brand} />

                      }
                    }) : null
                  }
                </ContainerProduct>
              </>

              {/* ================================================================ */}
              <>
                <TitleBox text={`FRAGRANCES`} />
                <ContainerProduct >
                  {
                    products.length ? products.map((pro) => {
                      if (pro.category === "fragrances") {
                        return <ProductBox img={pro.thumbnail} id={pro.id} key={pro.id} name={pro.title} brand={pro.brand} />

                      }
                    }) : null
                  }


                </ContainerProduct>
              </>

              {/* ================================================================ */}
              <>
                <TitleBox text={`SKINCARE`} />
                <ContainerProduct >
                  {
                    products.length ? products.map((pro) => {
                      if (pro.category === "skincare") {
                        return <ProductBox img={pro.thumbnail} id={pro.id} key={pro.id} name={pro.title} brand={pro.brand} />

                      }
                    }) : null
                  }          </ContainerProduct>
              </>

              {/* ================================================================ */}


              {/* ================================================================ */}

            </div>
          </>)

      }



    </>

  )
}

export default HomeBox;
