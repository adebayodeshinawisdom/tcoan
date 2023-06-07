import React from 'react'
import FormContainer from './../components/FormContainer'
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap'
import Message from './../components/Message'
import Loader from './../components/Loader'
import Link from 'next/link';
import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { getError } from './../utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const login = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);
    const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm();
 
        const submitHandler = async ({ email, password }) => {
          try {
            const result = await signIn('credentials', {
              redirect: false,
              email,
              password,
            });
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
      <h1>Sign In</h1>
      
      
      <Form onSubmit={handleSubmit(submitHandler)}>
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
                minLength: { value: 4, message: 'password is more than 5 chars' },
              })}
            placeholder='Enter password' autoFocus
        
        
          ></Form.Control>
          {errors.password && (
            <div className="text-danger ">{errors.password.message}</div>
          )}
        </Form.Group>

        <Button type='submit' style={{backgroundColor: "#00018d", color: "white", border: "#00018d"}}>
          Sign In
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link href={`/register?redirect=${redirect || '/'}`}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
    </>
  )
}

export default login
