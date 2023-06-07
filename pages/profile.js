import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { getError } from './../utils/error';
import axios from 'axios';
import FormContainer from './../components/FormContainer'
import { Form, Button, Row, Col } from 'react-bootstrap'


export default function ProfileScreen() {
  const { data: session } = useSession();

  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue('name', session.user.name);
    setValue('email', session.user.email);
  }, [session.user, setValue]);

  const submitHandler = async ({ name, email, password }) => {
    try {
      await axios.put('/api/auth/update', {
        name,
        email,
        password,
      });
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      toast.success('Profile updated successfully');
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
        <>
          <FormContainer>
          <h1>Update Profile</h1>
          
          
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
                <div className="text-danger ">{errors.name.message}</div>
              )}
            </Form.Group>
            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                {...register('email', {
                    required: 'Please enter email',
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                      message: 'Please enter valid email',
                    },
                  })}
                placeholder='Enter email' autoFocus
                
                
              ></Form.Control>
               {errors.email && (
                <div className="text-danger">{errors.email.message}</div>
              )}
            </Form.Group>
    
            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                {...register('password', {
                    required: 'Please enter password',
                    minLength: { value: 5, message: 'password is more than 4 chars' },
                  })}
                placeholder='Enter password' autoFocus
            
            
              ></Form.Control>
              {errors.password && (
                <div className="text-danger ">{errors.password.message}</div>
              )}
            </Form.Group>
  
            <Form.Group controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: (value) => value === getValues('password'),
                    minLength: { value: 5, message: 'password is more than 4 chars' },
                  })}
                placeholder='confirm your password' autoFocus
            
            
              ></Form.Control>
              {errors.confirmPassword && (
                <div className="text-danger ">{errors.confirmPassword.message}</div>
              )}
               {errors.confirmPassword &&
              errors.confirmPassword.type === 'validate' && (
                <Message variant="danger">Password do not match</Message>
              )}
            </Form.Group>
    
            <Button type="submit" variant='danger'>
              Update
            </Button>
          </Form>
    
          </FormContainer>
        </>
    )
  }
  
  ProfileScreen.auth = true;