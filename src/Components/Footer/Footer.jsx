import React from 'react'
import './Footer.css'
import {   CDBBox,CDBBtn, CDBIcon, } from 'cdbreact';
const Footer = () => {
  return (
<div className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        // style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img className='logo'
              alt="logo"
              src={require('./logo.png')}
              
            />
            <span className="ms-4 h5 mb-0 font-weight-bold"></span>
          </a>
        </CDBBox>
        <div className='smMaxWidthZero' style={{maxWidth:'40svw'}}>
          <small className="ms-2"> Address : Shop No 3, 4, Suruchi Complex, Collectorate Road, Near Khanna Chowk, Rewa, Madhya Pradesh, 486001, India</small>
          <br/>
          <small className="ms-2"><a className='link' href='tel:919999999999'>Call Now</a></small>
        </div>
        <CDBBox>
          <small className="ms-2">&copy; KhannaRadio, 2023. All rights reserved.</small>
          <br/>
          <small className="ms-2">Made By <a className='link' href='https://cityji.github.io/portfolio'>Nikhil Tiwari</a></small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </div>
  )
}

export default Footer