import React, {useContext, useState} from 'react'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {Row, Col, ListGroup, Card, Form, Button, Container, Image } from 'react-bootstrap'
import Rating from '../../components/Rating'
import { Store } from '../../utils/Store'
import axios from 'axios'
import Course from '../../model/coursesModel'
import db from '../../utils/db'
import { getError } from '../../utils/error'
import { toast } from 'react-toastify';
import { useSession } from 'next-auth/react'


export default function Enrol (props) {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')
  const { state, dispatch } = useContext(Store);

  const   router   = useRouter()
  const { course } = props;
  const { status, data: session } = useSession()

  
  const payFeesHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post('/api/fees', {
        course: course && course._id
      });
      setLoading(false);
       
      router.push(`/payment/${data._id}`);
    } catch (err) {
      setLoading(false);
      toast.error(getError(err));
    }
  };
  
  if (!course) {
    return <div className='text-center'>Course Not Found</div>
  }
  return (
    <div className='container'>
    <Link className='btn btn-light my-3' href='/'>
      Go Back
    </Link>
    {loading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error}</Message>
    ) : (
      <>
    
        <Row>
          <Col  md={6}>
            <Image src={course.image} alt={course.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{course.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={course.rating}
                  text={`${course.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: N{course.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {course.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>N{course.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      Registration in Progress
                    </Col>
                  </Row>
                </ListGroup.Item>

                

                <ListGroup.Item>
                <Button style={{backgroundColor: "#00018d", color: "white", border: "#00018d"}}
                    onClick={payFeesHandler}
                    className='btn-block'
                    type='button'
                    
                  >
                   Process Payment
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        
      </>
    )}
  </div>



  )
}

export async function getServerSideProps(context) {
  const { params } = context;
 const { id } = params;

  await db.connect()
  const course = await Course.findById( params.id ).lean();
  await db.disconnect();
  return {
    props: {
      course: course ? db.convertDocToObj(course): null,
    },
  };
}

Enrol.auth =true;
