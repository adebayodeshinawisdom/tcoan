import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useReducer, useState } from 'react';
import { getError } from '../../utils/error';
import { Row, Col, ListGroup, Image, Card, Button, Container, ListGroupItem } from 'react-bootstrap'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import  { PaystackButton } from 'react-paystack'
import { toast } from 'react-toastify'
import { useSession } from 'next-auth/react';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, fee: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
       case 'PAY_REQUEST':
      return { ...state, loadingPay: true };
    case 'PAY_SUCCESS':
      return { ...state, loadingPay: false, successPay: true, publicKey: action.payload };
    case 'PAY_FAIL':
      return { ...state, loadingPay: false, errorPay: action.payload };
    case 'PAY_RESET':
      return { ...state, loadingPay: false, successPay: false, errorPay: '' };
      case 'DELIVER_REQUEST':
        return { ...state, loadingDeliver: true };
      case 'DELIVER_SUCCESS':
        return { ...state, loadingDeliver: false, successDeliver: true };
      case 'DELIVER_FAIL':
        return { ...state, loadingDeliver: false };
      case 'DELIVER_RESET':
        return {
          ...state,
          loadingDeliver: false,
          successDeliver: false,
        };
    default:
      state;
  }
}


export default function courseFeePayment ()  {

  const { data: session } = useSession();
  const { query } = useRouter();
  const orderId = query.id;
  const [email, setEmail] = useState()
  const [name, setName] = useState()

  const [{ loading, error, fee, publicKey, successPay, loadingPay, loadingDeliver,
    successDeliver}, dispatch] = useReducer(reducer, {
    loading: true,
    fee: {},
    error: '',
  });

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/courseFees/${orderId}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
        
        setEmail(data.user.email || '');
        setName(data.user.name || '');

      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    
    }
    if (!fee._id || successPay || successDeliver || (fee._id && fee._id !== orderId)) {
      fetchOrder();
      
      console.log(fee)
        if(successPay){
      dispatch({ type:  'PAY_RESET' });
        
      }
      if (successDeliver) {
        dispatch({ type: 'DELIVER_RESET' });
      }
    }else{
      const fetchPay = async () => {
        try {
          dispatch({ type: 'PAY_REQUEST' });
          const { data } = await axios.get(`/api/keys/paystack`);
          dispatch({ type: 'PAY_SUCCESS', payload: data });
           
        } catch (err) {
          dispatch({ type: 'PAY_FAIL', payload: getError(err) });
        }
      
    
      };
        if(!publicKey){
          fetchPay();
        }
    }
    
   
  
  }, [fee, orderId,  publicKey, successPay, successDeliver, ]);
    const courseAmount = fee && fee.course && fee.course.price
  const componentProps = {

    email,

    amount:  courseAmount * 100,

    metadata: {

      name,

    

    },

    publicKey,

    text: "Pay Now",

    onSuccess: () =>

     handleSuccess(),

    onClose: () => alert("Wait! You need this course, don't go!!!!"),

  }

  
    // Callback function triggered after a successful payment
    const handleSuccess = (response) => {
      const reference = response.reference; // Get the payment reference
  
      // Send the reference to your server for confirmation
      confirmPayment(reference);
    };
  
  
    // Function to confirm the payment on your server
    const confirmPayment = async (reference, orderId) => {
      try {
        const response = await fetch(`/api/confirmPayment?orderId=${orderId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ reference }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log(data.message); // Payment confirmation message
        } else {
          console.log('Payment confirmation failed.');
        }
      } catch (error) {
        console.error('An error occurred while confirming the payment:', error);
      }  
    }
     
  



    return loading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error}</Message>
    ) : (
      <Container>
        <h1> Invoice No {fee._id}</h1>
        <Row>
          <Col md={8}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Payment Details</h2>
                
          
   
      <p>
        <strong>Student's Name: </strong> {fee && fee.user.name}
      </p>
      <p>
        <strong>Email: </strong>{' '}
        <a href={`mailto:${fee && fee.user.email}`}>{fee && fee.user.email}</a>
      </p>
   
                
              </ListGroup.Item>
  
              <ListGroup.Item>
                
                {fee.isPaid ? (
                  <Message variant='success'>Paid on {paidAt}</Message>
                ) : (
                  <Message variant='danger'>Not Paid</Message>
                )}
              </ListGroup.Item>
  
              <ListGroup.Item>
                <h2>Course Details</h2>
                
              
                            <Image
                              src={`../${fee.course.image}`}
                              alt={fee.course.name}
                              fluid
                              rounded
                            />
                         
                            <Link href={`/product/${fee.course.product}`}>
                              {fee.course.name}
                            </Link>
                          <p>{fee.course.price}</p>
                       
                  
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2>Course Summary</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Duration</Col>
                    <Col>{fee.course.duration}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Course Title</Col>
                    <Col>{fee.course.name}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Course Category</Col>
                    <Col>{fee.course.category}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Total</Col>
                    <Col>{fee.course.price}</Col>
                  </Row>
                </ListGroup.Item>
               {loadingPay && <Loader/>}
               {!fee.isPaid?  (
                <ListGroupItem>
                  <PaystackButton {...componentProps} className="form-control" />
                </ListGroupItem>
               ) : (<><a href="mylearning">My Learning </a></>)}
               
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  
  };

  

  

 courseFeePayment.auth = true;