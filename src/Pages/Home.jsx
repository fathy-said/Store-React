import React from 'react';
import { TitleBox, SliderBox, ContainerProduct } from '../components';
const Home = () => {
  return (
    <>
      <div className="container">
        <SliderBox />


        <TitleBox text={`SEE OUR Smartphones`} />
        <ContainerProduct />
        <TitleBox text={`SEE OUR Smartphones`} />
        <ContainerProduct />
        <TitleBox text={`SEE OUR Smartphones`} />
        <ContainerProduct />

      </div>
    </>
  );
}

export default Home;
