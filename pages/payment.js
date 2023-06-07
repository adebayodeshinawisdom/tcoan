
import React, { useContext, useEffect, useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import FormContainer from './../components/FormContainer'
import CheckOutSteps from './../components/CheckOutSteps'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router';
import { Store } from './../utils/Store'
import Cookies from 'js-cookie';

const payment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress, paymentMethod } = cart;

  const router = useRouter();

    const submitHandler = (e) => {
        e.preventDefault()
        if (!selectedPaymentMethod) {
          return toast.error('Payment method is required');
        }
        dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: selectedPaymentMethod });
        Cookies.set(
          'cart',
          JSON.stringify({
            ...cart,
            paymentMethod: selectedPaymentMethod,
          })
        );
    
        router.push('/placeorder');
      }

      useEffect(() => {
        if (!shippingAddress.address) {
          return router.push('/prospectiveStudent');
        }
        setSelectedPaymentMethod(paymentMethod || '');
      }, [paymentMethod, router, shippingAddress.address]);
    
    
      
  return (
    <div>
      <FormContainer>
      <CheckOutSteps step1 step2 step3 />

      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked={selectedPaymentMethod === 'PayPal'}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
            ></Form.Check>
            <br/>
             <Form.Check
              type='radio'
              label='Paystack'
              id='Paystack'
              name='paymentMethod'
              value='Paystack'
              checked={selectedPaymentMethod === 'Paystack'}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
            ></Form.Check> 
          </Col>
        </Form.Group>

        <Form.Group>
        <a  href='/prospectiveStudent' className='btn btn-secondary'>
          Back
        </a>
        <Button type="submit" variant='primary' style={{float: 'right', backgroundColor: '#00018d', color: 'white', border: '#00018dB'}}>
          Continue
        </Button>
        </Form.Group>
      </Form>
    </FormContainer>
    </div>
  )
}

export default payment
