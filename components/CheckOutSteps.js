import React from 'react'
import { Nav } from 'react-bootstrap'


const CheckOutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
    <Nav.Item>
      {step1 ? (
        <a href='/login' style={{color: '#00018d', textDecoration: 'none'}}>
          <Nav.Link style={{color: '#00018d', textDecoration: 'none'}}>Sign In</Nav.Link>
        </a>
      ) : (
        <Nav.Link disabled>Sign In</Nav.Link>
      )}
    </Nav.Item>

    <Nav.Item>
      {step2 ? (
        <a href='/prospectiveStudent' style={{color: '#00018d', textDecoration: 'none'}}>
          <Nav.Link style={{color: '#00018d', textDecoration: 'none'}}>Prospective Student's Info</Nav.Link>
        </a>
      ) : (
        <Nav.Link disabled>Prospective Student's Info</Nav.Link>
      )}
    </Nav.Item>

    <Nav.Item>
      {step3 ? (
        <a href='/payment' style={{color: '#00018d', textDecoration: 'none'}}>
          <Nav.Link style={{color: '#00018d', textDecoration: 'none'}}>Payment</Nav.Link>
        </a>
      ) : (
        <Nav.Link disabled>Payment</Nav.Link>
      )}
    </Nav.Item>

    <Nav.Item>
      {step4 ? (
        <a href='/placeorder' style={{color: '#00018d', textDecoration: 'none'}}>
          <Nav.Link style={{color: '#00018d', textDecoration: 'none'}}>Place Order</Nav.Link>
        </a>
      ) : (
        <Nav.Link disabled>Place Order</Nav.Link>
      )}
    </Nav.Item>
  </Nav>
)
}

  

export default CheckOutSteps
