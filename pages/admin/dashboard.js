import axios from 'axios';
import Link from 'next/link';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import React, { useEffect, useReducer } from 'react';
import { getError } from '../../utils/error';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, summary: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      state;
  }
}


export default function adminDashboard() {
    const [{ loading, error, summary }, dispatch] = useReducer(reducer, {
        loading: true,
        summary: { salesData: [] },
        error: '',
      });
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            dispatch({ type: 'FETCH_REQUEST' });
            const { data } = await axios.get(`/api/admin/summary`);
            dispatch({ type: 'FETCH_SUCCESS', payload: data });
          } catch (err) {
            dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
          }
        };
    
        fetchData();
      }, []);
    
      const data = {
        labels: summary.salesData.map((x) => x._id), // 2022/01 2022/03
        datasets: [
          {
            label: 'Sales',
            backgroundColor: '#EE4B2B',
            data: summary.salesData.map((x) => x.totalSales),
          },
        ],
      };
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

        <Col md={9}>
        <Row>
            <Col md={3}>
                <Card className='shadow-sm p-3 mb-5 bg-body'>
                <Card.Body>
                <p className="h5">N{summary.ordersPrice} </p>
                  <p>Sales</p>

                  <Link href="/admin/orders">View sales</Link>
                </Card.Body>

                </Card>
            </Col>

            <Col md={3}>
                <Card className='shadow-sm p-3 mb-5 bg-body'>
                <Card.Body>
                <p className="h5">{summary.ordersCount} </p>
                  <p>Orders</p>

                  <Link href="/admin/orders">View orders</Link>
                </Card.Body>

                </Card>
            </Col>


            <Col md={3}>
                <Card className='shadow-sm p-3 mb-5 bg-body'>
                <Card.Body>
                <p className="h5">{summary.productsCount} </p>
                  <p>Products</p>

                  <Link href="/admin/products">View products</Link>
                </Card.Body>

                </Card>
            </Col>


            <Col md={3}>
                <Card className='shadow-sm p-3 mb-5 bg-body'>
                <Card.Body>
                <p className="h5">{summary.usersCount} </p>
                  <p>Users</p>

                  <Link href="/admin/users">View Users</Link>
                </Card.Body>

                </Card>
            </Col>

            <br/>

            <Col md={9}>

            <h2 className="text-xl">Sales Report</h2>
              <Bar
                options={{
                  legend: { display: true, position: 'right' },
                }}
                data={data}
              />
            </Col>



        </Row>
        
        </Col>
      </Row>
    </Container>
  )
}
adminDashboard.auth = { adminOnly: true };