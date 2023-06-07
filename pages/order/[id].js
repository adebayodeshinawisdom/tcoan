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
      return { ...state, loading: false, order: action.payload, error: '' };
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
function OrderScreen() {
  // order/:id
  const { data: session } = useSession();
  const { query } = useRouter();
  const orderId = query.id;
  const [email, setEmail] = useState()
  const [name, setName] = useState()

  const [{ loading, error, order, publicKey, successPay, loadingPay, loadingDeliver,
    successDeliver}, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: '',
  });
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/orders/${orderId}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    
    }
    if (!order._id || successPay || successDeliver || (order._id && order._id !== orderId)) {
      fetchOrder();
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
    
    if(!loading){
      setEmail(order && order.user.email)
      setName(order && order.user.name)
    }
  
  }, [order, orderId,  publicKey, successPay, successDeliver, ]);

  
  
  const {
    shippingAddress,
    paymentMethod,
    orderItems,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    isPaid,
    paidAt,
    isDelivered,
    deliveredAt,
  } = order;

 

  const onApprove = async () => {
 
      try {
        dispatch({ type: 'PAY_REQUEST' });
        const { data } = await axios.put(
          `/api/orders/${order._id}/pay`
        );
        dispatch({ type: 'PAY_SUCCESS', payload: data });
        toast.success('Order is paid successgully');
      } catch (err) {
        dispatch({ type: 'PAY_FAIL', payload: getError(err) });
        toast.error(getError(err));
      }
    
  }

  async function deliverOrderHandler() {
    try {
      dispatch({ type: 'DELIVER_REQUEST' });
      const { data } = await axios.put(
        `/api/admin/orders/${order._id}/deliver`,
        {}
      );
      dispatch({ type: 'DELIVER_SUCCESS', payload: data });
      toast.success('Order is delivered');
    } catch (err) {
      dispatch({ type: 'DELIVER_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
  }

  const amount = Math.round(totalPrice * 100)


  const componentProps = {

    email,

    amount,

    metadata: {

      name,

    

    },

    publicKey,

    text: "Pay Now",

    onSuccess: () =>

     onApprove(),

    onClose: () => alert("Wait! You need this oil, don't go!!!!"),

  }
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Container>
      <h1>Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong> {shippingAddress.fullName}
              </p>
              <p>
                <strong>Email: </strong>{' '}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Address:</strong>
                {shippingAddress.address}, {shippingAddress.city}{' '}
                {shippingAddress.postalCode},{' '}
                {shippingAddress.country}
              </p>
              {isDelivered ? (
                <Message variant='success'>
                  Delivered on {deliveredAt}
                </Message>
              ) : (
                <Message variant='danger'>Not Delivered</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {paymentMethod}
              </p>
              {isPaid ? (
                <Message variant='success'>Paid on {paidAt}</Message>
              ) : (
                <Message variant='danger'>Not Paid</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message>Order is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={`../${item.image}`}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link href={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.quantity} x N{item.price} = N{item.quantity * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>N{itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>N{shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>N{taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>N{totalPrice}</Col>
                </Row>
              </ListGroup.Item>
             {loadingPay && <Loader/>}
             {!order.isPaid && order.paymentMethod === 'Paystack' && (
              <ListGroupItem>
                <PaystackButton {...componentProps} className="form-control" />
              </ListGroupItem>
             )}
             {session.user.isAdmin && order.isPaid && !order.isDelivered && (
               <Button className="btn btn-block" style={{backgroundColor: "#EE4B2B", color: 'black', border: '#EE4B2B'}} onClick={deliverOrderHandler}>{loadingDeliver? "Loading..." : "Mark as Delivered"}</Button>
             )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  )

}

OrderScreen.auth = true;
export default OrderScreen
