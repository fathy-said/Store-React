import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ContainerProduct, LoadingBox, ProductBox, TitleBox } from '../';
import { categoryThunk } from '../../RTK/Thunk/CategoryThunk';
const CategoryBox = () => {
  let dispatch = useDispatch()
  let { categoryProduct, categoryLoading } = useSelector((state) => state.CategoryReducer)
  let param = useParams()
  useEffect(() => {
    dispatch(categoryThunk({ category: param.category }))
  }, [param.category]);
  return (
    <>
      <div className="category-box">
        <div className="container">
          <TitleBox text={`SEE OUR ${param.category}`} />
          {
            categoryLoading == true ? (
              <LoadingBox />
            ) : (
              <>
                <ContainerProduct>
                  {
                    categoryProduct.length ? (
                      categoryProduct.map((pro) => {
                        return <ProductBox img={pro.thumbnail} price={pro.price} discountPercentage={pro.discountPercentage} category={pro.category} id={pro.id} key={pro.id} name={pro.title} brand={pro.brand} />
                      })
                    ) : (<h2>not found data</h2>)

                  }
                </ContainerProduct>
              </>
            )


          }

        </div>
      </div>


    </>
  );
}

export default CategoryBox;
