import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useReducer } from 'react';
import { Col, Container, ListGroup, Row, Table, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Message from '../../components/Message';
import Loader from '../../components/Loader';

import { getError } from '../../utils/error';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, users: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true };
    case 'DELETE_SUCCESS':
      return { ...state, loadingDelete: false, successDelete: true };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false };
    case 'DELETE_RESET':
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      return state;
  }
}


function AdminUsersScreen() {
    const [{ loading, error, users, successDelete, loadingDelete }, dispatch] =
      useReducer(reducer, {
        loading: true,
        users: [],
        error: '',
      });
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          dispatch({ type: 'FETCH_REQUEST' });
          const { data } = await axios.get(`/api/admin/users`);
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
  
    const deleteHandler = async (userId) => {
      if (!window.confirm('Are you sure?')) {
        return;
      }
      try {
        dispatch({ type: 'DELETE_REQUEST' });
        await axios.delete(`/api/admin/users/${userId}`);
        dispatch({ type: 'DELETE_SUCCESS' });
        toast.success('User deleted successfully');
      } catch (err) {
        dispatch({ type: 'DELETE_FAIL' });
        toast.
  error(getError(err));
      }
    };
  
    return(
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
            
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th>ACTION</th>
              
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email }</td>
               
                <td>{user.isAdmin? "Yes" : "No"}</td>
           
          
               
               
                <td>
                  <Link href={`users/${user._id}`}>
                    <span className='fa fa-edit text-danger'></span>
                  </Link> 
                  <Button variant='light' className='btn-sm text-danger' onClick={() => deleteHandler(user._id)}>
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

export default  AdminUsersScreen

AdminUsersScreen.auth = { adminOnly: true }
  