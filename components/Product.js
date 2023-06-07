import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import Rating from './Rating'
import Link from 'next/link'
import { Store } from '../utils/Store'
import axios from 'axios'
import { toast } from 'react-toastify';

const Product = ({ course }) => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  
  return (
    <Card className='my-3 p-3 rounded shadow-sm p-3 mb-5 bg-body'>
      <Link href={`/course/${course._id}`}>
        <Card.Img src={course.image} variant='top' style={{maxHeight: "150px"}} />
      </Link>

      <Card.Body>
        <Link href={`/course/${course._id}`}>
          <Card.Title as='div'>
            <span style={{color: "black"}}>{course.name.substr(0,20)}...</span>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={course.rating}
            text={`${course.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>N{course.price}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <a  href={`/course/${course._id}`} className="btn btn-sm form-control" 
     
        style={{backgroundColor: "#00018d", color: "white", border: "#00018d"}}>See Detail</a>
      </Card.Footer>
    </Card>
  )
}

export default Product