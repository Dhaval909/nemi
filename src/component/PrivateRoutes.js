import React from 'react'
import {  Outlet } from 'react-router';
import Header from '../pages/Header/Header';
import Footer from '../pages/Footer/Footer';

const PrivateRoutes = ({children}) => {
  return (
    <>
      <Header  />
      <main style={{minHeight:"90vh"}}>{ <Outlet /> }</main>
      <Footer></Footer>
    </>
  );
}

export default PrivateRoutes