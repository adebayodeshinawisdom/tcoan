import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useReducer } from 'react';
import { getError } from '../../utils/error';
import { Card, Col, Container, ListGroup, Row, Table, Button } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, products: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
      case 'CREATE_REQUEST':
        return { ...state, loadingCreate: true };
      case 'CREATE_SUCCESS':
        return { ...state, loadingCreate: false };
      case 'CREATE_FAIL':
        return { ...state, loadingCreate: false };
      case 'DELETE_REQUEST':
        return { ...state, loadingDelete: true };
      case 'DELETE_SUCCESS':
        return { ...state, loadingDelete: false, successDelete: true };
      case 'DELETE_FAIL':
        return { ...state, loadingDelete: false };
      case 'DELETE_RESET':
        return { ...state, loadingDelete: false, successDelete: false };
  
  
    default:
      state;
  }
}

export default function adminProducts() {
  const router = useRouter();

    const [{ loading, error, products, loadingCreate, successDelete, loadingDelete }, dispatch] = useReducer(reducer, {
        loading: true,
        products: [],
        error: '',
      });

      useEffect(() => {
        const fetchData = async () => {
          try {
            dispatch({ type: 'FETCH_REQUEST' });
            const { data } = await axios.get(`/api/admin/products`);
            dispatch({ type: 'FETCH_SUCCESS', payload: data });
          } catch (err) {
            dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
          }
        };
        if (successDelete) {
          dispatch({ type: 'DELETE_RESET' });
        } else {
          fetchData();
        }
      }, [successDelete]);
    
      const createHandler = async () => {
        if (!window.confirm('Are you sure?')) {
          return;
        }
        try {
          dispatch({ type: 'CREATE_REQUEST' });
          const { data } = await axios.post(`/api/admin/products`);
          dispatch({ type: 'CREATE_SUCCESS' });
          toast.success('Product created successfully');
          router.push(`/admin/products/${data.product._id}`);
        } catch (err) {
          dispatch({ type: 'CREATE_FAIL' });
          toast.error(getError(err));
        }
      };
     
    
  
    const deleteHandler = async (productId) => {
      if (!window.confirm('Are you sure?')) {
        return;
      }
      try {
        dispatch({ type: 'DELETE_REQUEST' });
        await axios.delete(`/api/admin/products/${productId}`);
        dispatch({ type: 'DELETE_SUCCESS' });
        toast.success('Product deleted successfully');
      } catch (err) {
        dispatch({ type: 'DELETE_FAIL' });
        toast.error(getError(err));
      }
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

        {loading ? (<Loader/>)
        : error? (<Message>{error}</Message>) :(<Col md={9}>
          <div> 
                <span className='h3'>Product list</span> <span className='pull-right'>
                    <button className="btn btn" disabled={loadingCreate}
              onClick={createHandler} style={{backgroundColor: "#EE4B2B", float: "right", color: "black"}} >{loadingCreate ? 'Loading' : 'Create'}</button>
                    
                </span>
            </div>
            <br/>

        <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>ID</th>
          
            <th>NAME</th>
            <th>IMAGE</th>
            <th>STOCK</th>
            <th>PRICE</th>
            <th>RATING</th>
            <th>CATEGORY</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.name}</td>
             
              <td><img src={product.image} width="50" height="50"/></td>
              <td>{product.countInStock}</td>
              <td>
                N{product.price}
              </td>

               <td>
                {product.rating}
              </td>
              <td>
                {product.category}
              </td>
              <td>
                <Link href={`products/${product._id}`}>
                  <span className='fa fa-edit text-danger'></span>
                </Link> 
                <Button variant='light' className='btn-sm text-danger' onClick={() => deleteHandler(product._id)}>
                    <span className='fa fa-trash'></span>
                  </Button>
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

adminProducts.auth = { adminOnly: true };