import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from '../components';
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
    </>
  );
}

export default AllPages;
