import React from 'react'
import { useContext } from 'react';
import { Store } from './../utils/Store';
import Link from 'next/link'
import { useRouter } from 'next/router';
import {Row, Col, ListGroup, Card, Form, Button, Container, Image } from 'react-bootstrap'
import Loader from './../components/Loader'
import Message from './../components/Message'
import dynamic from 'next/dynamic';
import axios from 'axios';
import { toast } from 'react-toastify';

const cart = () => {
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const {
      cart: { cartItems },
    } = state;
    const removeItemHandler = (item) => {
      dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
      toast.warning('Product has been removed from the cart');
    }
    const updateCartHandler = async  (item, qty) => {
    const quantity = Number(qty);
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      return toast.error('Sorry. Product is out of stock');
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
    toast.success('Product updated in the cart');
  };
  return (
    <Container>
    <Row>
    <Col md={8}>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <Message>
          Your cart is empty <Link href='/'>Go Back</Link>
        </Message>
      ) : (
        <ListGroup variant='flush'>
          {cartItems.map((item) => (
            <ListGroup.Item key={item.product}>
              <Row>
                <Col md={2}>
                  <Image src={item.image} alt={item.name} fluid rounded />
                </Col>
                <Col md={3}>
                  <Link href={`/products/${item._id}`}>{item.name}</Link>
                </Col>
                <Col md={2}>N{item.price}</Col>
                <Col md={2}>
                  <Form.Control
                    as='select'
                    value={item.quantity}
                    onChange={(e) =>
                          updateCartHandler(item, e.target.value)
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type='button'
                    variant='light'
                    onClick={() => removeItemHandler(item)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Col>
    <Col md={4}>
      <Card>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h2>
              Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
              item(s)
            </h2>
            N
            {cartItems
              .reduce((acc, item) => acc + item.quantity * item.price, 0)
              .toFixed(2)}
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              type='button' style={{backgroundColor: "#EE4B2B", color: "black", border: "#EE4B2B"}}
              className='btn-block'
              disabled={cartItems.length === 0}
              onClick={() => router.push('login?redirect=/shipping')}
            >
              Proceed To Checkout
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  </Row>
  </Container>
)
}

export default dynamic(() => Promise.resolve(cart), { ssr: false });
