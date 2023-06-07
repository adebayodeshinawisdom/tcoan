import React from 'react';
import Head from 'next/head';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import Course from '../model/coursesModel';
import db from '../utils/db';
import { Store } from './../utils/Store';
import { useEffect, useRef, useState } from 'react';
import 'video.js/dist/video-js.css';
import VideoPlayer from '../components/VideoPlayer';
import Link from 'next/link';
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, registeredcourses: action.payload, error: '' };
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
      return state; // Add a return statement to the default case
  }
}

export default function Home() {
  const { state } = useContext(Store);
  const { cart } = state;
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  const [{ loading, error, registeredcourses, publicKey, successPay, loadingPay, loadingDeliver,
    successDeliver }, dispatch] = useReducer(reducer, {
    loading: true,
    registeredcourses: [],
    error: '',
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/registeredcourses`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }

    };
    fetchCourses();
    console.log(registeredcourses)
  }, []);

  return (
    <Container>
      <Head>
        <title>2020Plus</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Row>
      {loading ? (
          <p>Loading courses...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          registeredcourses.map((course) => (
            <Col sm={12} md={6} lg={4} xl={3} key={course._id}>
              <Link href={`/course/${course._id}`}>
                <Card.Img src={course.image}/>
              </Link>
            </Col>
          ))
        )}
      </Row>

      {selectedCourse && (
        <div className="video-player">
          <h2>{selectedCourse.title}</h2>
          {/* Render the video playlist component here */}
          {/* Pass the selectedCourse.videos array to the VideoPlaylist component */}
          <VideoPlaylist videos={selectedCourse.videos} />
        </div>
      )}
    </Container>
  );
}

// VideoPlaylist component
function VideoPlaylist({ videos }) {
  return (
    <div>
      {/* Render the list of videos */}
      {videos.map((video) => (
        <VideoPlayer key={video.id} video={video} />
      ))}
    </div>
  );
}
