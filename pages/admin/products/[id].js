import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useReducer, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { getError } from '../../../utils/error';
import  FormContainer  from '../../../components/FormContainer'
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';


function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

      case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true, errorUpdate: '' };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false, errorUpdate: '' };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false, errorUpdate: action.payload };

    case 'UPLOAD_REQUEST':
      return { ...state, loadingUpload: true, errorUpload: '' };
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        loadingUpload: false,
        errorUpload: '',
      };
    case 'UPLOAD_FAIL':
      return { ...state, loadingUpload: false, errorUpload: action.payload };


    default:
      return state;
  }
}


 function AdminProductEditScreen() {
    
    const { query } = useRouter();
    const productId = query.id;
    const [{ loading, error, loadingUpdate,  loadingUpload }, dispatch] = useReducer(reducer, {
      loading: true,
      error: '',
    });
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
    } = useForm();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          dispatch({ type: 'FETCH_REQUEST' });
          const { data } = await axios.get(`/api/admin/products/${productId}`);
          dispatch({ type: 'FETCH_SUCCESS' });
          setValue('name', data.name);
          setValue('price', data.price);
          setValue('image', data.image);
          setValue('category', data.category);
          setValue('brand', data.brand);
          setValue('countInStock', data.countInStock);
          setValue('description', data.description);
        } catch (err) {
          dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
        }
      };
  
      fetchData();
    }, [productId, setValue]);
  
    const router = useRouter();


    const uploadHandler = async (e, imageField = 'image') => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const {
        data: { signature, timestamp },
      } = await axios('/api/admin/cloudinary-sign');

      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('signature', signature);
      formData.append('timestamp', timestamp);
      formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
      const { data } = await axios.post(url, formData);
      dispatch({ type: 'UPLOAD_SUCCESS' });
      setValue(imageField, data.secure_url);
      toast.success('File uploaded successfully');
    } catch (err) {
      dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
  };
    
    

  
    const submitHandler = async ({
      name,
      price,
      category,
      image,
      brand,
      countInStock,
      description,
    }) => {
      try {
        dispatch({ type: 'UPDATE_REQUEST' });
        await axios.put(`/api/admin/products/${productId}`, {
          name,
          price,
          category,
          image,
          brand,
          countInStock,
          description,
        });
        dispatch({ type: 'UPDATE_SUCCESS' });
        toast.success('Product updated successfully');
        router.push('/admin/products');
      } catch (err) {
        dispatch({ type: 'UPDATE_FAIL', payload: getError(err) });
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

          <Col md={9}>
            <>
            <h1>Edit Product {productId}</h1>
        
        
        <Form onSubmit={handleSubmit(submitHandler)}>
        <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              {...register('name', {
                  required: 'Please enter name',
                  
                })}
              placeholder='Enter name' autoFocus
          
          
            ></Form.Control>
            {errors.name && (
              <div className="text-danger">{errors.name.message}</div>
            )}
          </Form.Group>
          <Form.Group controlId='price'>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type='text'
              {...register('price', {
                  required: 'Please enter price',
                 })}
              placeholder='Enter price' autoFocus
              
            ></Form.Control>
             {errors.price && (
              <div className="text-danger">{errors.price.message}</div>
            )}
          </Form.Group>
  
          <Form.Group controlId='image'>
            <Form.Label>Image</Form.Label>
            <Form.Control
              type='text'
              {...register('image', {
                  required: 'Please enter image',
                })}
              placeholder='Enter image' autoFocus
            ></Form.Control>
            {errors.image && (
              <div className="text-danger">{errors.image.message}</div>
            )}

            <Form.Control type="file" lable="choose file" onChange={uploadHandler}></Form.Control>
            {loadingUpload && <div>Uploading....</div>}
          </Form.Group>


          <Form.Group controlId='category'>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type='text'
              {...register('category', {
                  required: 'enter category',
                })}
              placeholder='enter category' autoFocus
                
            ></Form.Control>
            {errors.category && (
              <div className="text-danger">{errors.category.message}</div>
            )}
            
          </Form.Group>

          <Form.Group controlId='brand'>
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type='text'
              {...register('brand', {
                  required: 'enter brand',
                })}
              placeholder='enter brand' autoFocus
                
            ></Form.Control>
            {errors.brand && (
              <div className="text-danger">{errors.brand.message}</div>
            )}
            
          </Form.Group>

          <Form.Group controlId='countInStock'>
            <Form.Label>CountInStock</Form.Label>
            <Form.Control
              type='text'
              {...register('countInStock', {
                  required: 'enter countInStock',
                })}
              placeholder='enter count in Stock' autoFocus
                
            ></Form.Control>
            {errors.countInStock && (
              <div className="text-danger">{errors.countInStock.message}</div>
            )}
            
          </Form.Group>


          <Form.Group controlId='description'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text' as='textarea'
              {...register('description', {
                  required: 'enter description',
                })}
              placeholder='enter description' autoFocus
                
            ></Form.Control>
            {errors.description && (
              <div className="text-danger">{errors.description.message}</div>
            )}
            
          </Form.Group>


          
  
          <Button type="submit" variant='danger'>
            Update
          </Button>
        </Form>




            </>
          
          </Col>

          </Row>

          </Container>
    
        )
}

export default AdminProductEditScreen

AdminProductEditScreen.auth = { onlyAdmin: true }