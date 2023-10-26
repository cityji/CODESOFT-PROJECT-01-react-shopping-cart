import React from 'react'
import Badge from 'react-bootstrap/Badge';
import './Footer.css'
// import {   CDBBox,CDBBtn, CDBIcon, CDBAnimation} from 'cdbreact';
import {   CDBBox, } from 'cdbreact';
const Footer = () => {
  return (
<div className="shadow mt-3 px-5">
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
        <div className='smMaxWidthZero' style={{maxWidth:'30svw'}}>
          <small className="ms-2"> Address : Shop No 3, 4, Suruchi Complex, Collectorate Road, Near Khanna Chowk, Rewa, Madhya Pradesh, 486001, India</small>
          <br/>
          <Badge bg="dark" className="p-2 m-2 ms-2"><a className='link' style={{color:'white'}} href='tel:919999999999'>Call Now</a></Badge>
          <Badge bg="info" className="ms-2 p-2 m-2"><a className='link' href='https://maps.app.goo.gl/fh9aYTJTmJoHWP3g6'>See Location</a></Badge>
          
        </div>
        <CDBBox>
          <small className="ms-2">&copy; KhannaRadio, 2023. All rights reserved.</small>
          <br/>
          <a href='https://cityji.github.io/portfolio' style={{textDecoration:'none'}}>
          <Badge bg="info" className="ms-2 p-2 m-2">Made By <a className='link' href='https://cityji.github.io/portfolio'>Nikhil Tiwari</a></Badge>
          </a>
         
        </CDBBox>

        {/* Social Icons */}
        
        {/* <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox> */}

      </CDBBox>
    </div>
  )
}

export default Footer