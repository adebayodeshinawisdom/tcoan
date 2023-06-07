import React, { useContext, useEffect, useState } from 'react'
import CheckOutSteps from './../components/CheckOutSteps'
import Message from './../components/Message'
import Loader from './../components/Loader'
import { Form, Button, Col, Row, ListGroup, Card, Image, Container } from 'react-bootstrap'
import { Store } from './../utils/Store';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { getError } from './../utils/error';
import axios from 'axios'
import Cookies from 'js-cookie'
import { useSession } from 'next-auth/react'

export default function placeorder () {
    const { state, dispatch } = useContext(Store);
  const { cart } = state;

  

  const { cartItems, shippingAddress, paymentMethod } = cart;

  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

  const itemsPrice = round2(
    cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  ); // 123.4567 => 123.46

  const shippingPrice = itemsPrice > 200000 ? 0 : 1500;
  const taxPrice = round2(itemsPrice * 0.075);
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);

  const router = useRouter();
  useEffect(() => {
    if (!paymentMethod) {
      router.push('/payment');
    }
  }, [paymentMethod, router]);

  const [loading, setLoading] = useState(false);

  const placeOrderHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post('/api/orders', {
        orderItems: cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
       
      });
      setLoading(false);
      dispatch({ type: 'CART_CLEAR_ITEMS' });
      Cookies.set(
        'cart',
        JSON.stringify({
          ...cart,
          cartItems: [],
        })
      );
      router.push(`/order/${data._id}`);
    } catch (err) {
      setLoading(false);
      toast.error(getError(err));
    }
  };


  return (
    <Container>

<CheckOutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Student's Details </h2>
              <p><strong> Name: </strong>{shippingAddress.fullName}</p>
              <p>
                <strong> Address: </strong>
                {shippingAddress.city}{' '}
                {shippingAddress.postalCode},{' '}
                {shippingAddress.country}
              </p>
              <p><Link href="/shipping">Edit</Link></p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method: </strong>
              {paymentMethod}
              <p><Link href="/payment">Edit</Link></p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link href={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.quantity} x N{item.price} = N{item.quantity * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>N{itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>N{shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>N{taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>N{totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  style={{float: 'right', backgroundColor: '#EE4B2B', color: 'black', border: '#EE4B2B'}}
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                   {loading ? 'Loading...' : 'Place Order'}
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>

      
    
  )
}


placeorder.auth = true
