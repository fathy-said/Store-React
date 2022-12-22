import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar, Footer } from '../components';
import { Category, Details, Home } from "./"
const AllPages = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:category' element={<Category />} />
          <Route path='/detail/:detail' element={<Details />} />
        </Routes>
        <Footer />

      </BrowserRouter>

    </>
  );
}

export default AllPages;
