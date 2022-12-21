import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar, Footer } from '../components';
import { Category, Home } from "./"
const AllPages = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:category' element={<Category />} />
        </Routes>
        <Footer />

      </BrowserRouter>

    </>
  );
}

export default AllPages;
