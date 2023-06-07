import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import { Store } from '../utils/Store';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import { Form, Button } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import CheckOutSteps from '../components/CheckOutSteps'

export default function shipping() {
    const {
        handleSubmit,
        register,
        formState: { errors },
        setValue,
      } = useForm();
    
      const { state, dispatch } = useContext(Store);
      const { cart } = state;
      const { shippingAddress } = cart;
      const router = useRouter();
    
      useEffect(() => {
        setValue('fullName', shippingAddress.fullName);
        setValue('address', shippingAddress.address);
        setValue('city', shippingAddress.city);
        setValue('postalCode', shippingAddress.postalCode);
        setValue('country', shippingAddress.country);
      }, [setValue, shippingAddress]);
    
      const submitHandler = ({ fullName, address, city, postalCode, country }) => {
        dispatch({
          type: 'SAVE_SHIPPING_ADDRESS',
          payload: { fullName, address, city, postalCode, country },
        });
        Cookies.set(
          'cart',
          JSON.stringify({
            ...cart,
            shippingAddress: {
              fullName,
              address,
              city,
              postalCode,
              country,
            },
          })
        );
    
        router.push('/payment');
      };
    
    
    
  return (
    <>

<FormContainer>
      <CheckOutSteps step1 step2 />
      <h1>Student's Info</h1>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Form.Group controlId='fullname'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter fullname'
           
            id="fullName"
            autoFocus
            {...register('fullName', {
              required: 'Please enter full name',
            })}
        
          ></Form.Control>
           {errors.fullName && (
            <div className="text-danger">{errors.fullName.message}</div>
          )}
        </Form.Group>


        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            id="address"
            {...register('address', {
              required: 'Please enter address',
              minLength: { value: 3, message: 'Address is more than 2 chars' },
            })}
            
        
          ></Form.Control>
           {errors.address && (
            <div className="text-danger">{errors.address.message}</div>
          )}

        </Form.Group>


        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            id="city"
            {...register('city', {
              required: 'Please enter city',
            })}
          ></Form.Control>
          {errors.city && (
            <div className="text-danger">{errors.city.message}</div>
          )}
        </Form.Group>

        <Form.Group controlId='postalCode'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter postal code'

            id="postalCode"
            {...register('postalCode', {
              required: 'Please enter postal code',
            })}
           ></Form.Control>
           {errors.postalCode && (
            <div className="text-danger">{errors.postalCode.message}</div>
          )}
        </Form.Group>

        <Form.Group controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            id="country"
            {...register('country', {
              required: 'Please enter country',
            })}
          
          ></Form.Control>
          {errors.country && (
            <div className="text-danger">{errors.country.message}</div>
          )}
        </Form.Group>

        <Button type='submit'  style={{backgroundColor: '#00018d', color: 'white', border: '#00018d'}}>
          Continue
        </Button>
      </Form>
    </FormContainer>


    
      
    </>
  )
}

shipping.auth = true;

