import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useReducer } from 'react';
import { getError } from '../../utils/error';
import { Card, Col, Container, ListGroup, Row, Table, Button } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, orders: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      state;
  }
}

export default function adminOrders() {
    const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
        loading: true,
        orders: [],
        error: '',
      });

      useEffect(() => {
        const fetchData = async () => {
          try {
            dispatch({ type: 'FETCH_REQUEST' });
            const { data } = await axios.get(`/api/admin/orders`);
            dispatch({ type: 'FETCH_SUCCESS', payload: data });
          } catch (err) {
            dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
          }
        };
        fetchData();
      }, []);
    
    
  return (
    <Container>
      <Row>
        <Col md={3}>
        <ListGroup>
            <ListGroup.Item>
                <Link href="/admin/dashboard">
                 Dashboard
                </Link>
            </ListGroup.Item>

            <ListGroup.Item>
                <Link href="/admin/orders">
                 Orders
                </Link>
            </ListGroup.Item>

            <ListGroup.Item>
                <Link href="/admin/products">
                 Products
                </Link>
            </ListGroup.Item>

            <ListGroup.Item>
                <Link href="/admin/users">
                 Users
                </Link>
            </ListGroup.Item>
        </ListGroup>

        </Col>

        {loading ? (<Loader/>)
        : error? (<Message>{error}</Message>) :(<Col md={9}>

        <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>ID</th>
          
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
             
              <td>{order.createdAt.substring(0, 10)}</td>
              <td>N{order.totalPrice}</td>
              <td>
                {order.isPaid ? (
                  order.paidAt.substring(0, 10)
                ) : (
                  <i className='fas fa-times' style={{ color: 'red' }}></i>
                )}
              </td>
              <td>
                {order.isDelivered ? (
                  order.deliveredAt.substring(0, 10)
                ) : (
                  <i className='fas fa-times' style={{ color: 'red' }}></i>
                )}
              </td>
              <td>
                <Link href={`/order/${order._id}`}>
                  <Button variant='light' className='btn-sm'>
                    Details
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
        
        
        </Col>)
        
        }
        



      </Row>
    </Container>
  )
}

adminOrders.auth = { adminOnly: true };