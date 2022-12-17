import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar, Footer } from '../components';
import { Home } from "./"
const AllPages = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </>
  );
}

export default AllPages;
