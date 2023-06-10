import React from 'react'
import Head from 'next/head'
import { Container, Row, Col, Navbar, NavLink, NavbarBrand, Nav, Form, Button, Offcanvas, Dropdown, NavDropdown } from 'react-bootstrap'
import { useState } from 'react';
import { useContext,  useEffect } from 'react';
import { Store } from '../utils/Store';
import { signOut, useSession } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => {
  const [show, setShow] = useState(false);
  const router = useRouter()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const { status, data: session } = useSession();

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const handleLogout = () => {
    
     Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  }

  const [query, setQuery] = useState('');


  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };



  const userHistory = () => {
    router.push('/orderhistory')
  }

  const mylearning = () => {
    router.push('/mylearning')
  }

  const updateUser = () => {
    router.push('/profile')
  }

  const adminDashboard = () => {
    router.push('/admin/dashboard')
  }

  return (
    <>
    <ToastContainer position="bottom-center" limit={1} />
    <Navbar   variant="light" expand="lg"  style={{color: "white"}}>
        
        <Container>
        <NavbarBrand><Link href="/"><span style={{color: 'brown'}}><img src="/images/logo2.jpg" width="70px" height="50px"/></span><span style={{color: "black", textDecoration: "none",}}>The Temple Church Of All Nations <br/> <span style={{fontSize: "14px",}}>Changing lives, changing nations and making it happen</span></span></Link></NavbarBrand>
        <Navbar.Toggle/>
        <Navbar.Collapse id='basic-navbar-nav'>

        <Nav className='ml-auto'>
        <Nav.Link href="/">Home</Nav.Link>
        
        <NavDropdown title="About us" id="basic-nav-dropdown">
            <NavDropdown.Item href="/about">About TCOAN</NavDropdown.Item>
            <NavDropdown.Item href="/pastorAJRufus">Pastor AJ Rufus</NavDropdown.Item>
           
          </NavDropdown>
        <Nav.Link href="/contact">Contact Us</Nav.Link>
        <Nav.Link href="/prayerrequest">
         Prayer Request
         
        </Nav.Link>
        
        <Nav.Link href="/liveservice">Live Service</Nav.Link>
        <Nav.Link href="/partnership">Partnership</Nav.Link>


        </Nav>
        </Navbar.Collapse>
        </Container>


    </Navbar>

    <div className="container-fluid shadow p-3 mb-5 bg-body rounded">
   
    <Container>
    
    <Row>

      <Col md={2} sm={6}>
       
       </Col>

      <Col md={7} sm={6}>
      
      </Col>

      <Col md={3} sm={6}>
        
      
      </Col>    
    
    
        
      
    </Row>
    </Container>

     

    
    </div>
      
    </>
  )
}

export default Header
