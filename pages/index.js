import Head from 'next/head'
import { Container, Row, Card, Button, Col } from 'react-bootstrap'
import Products from './../components/Product'
import axios from 'axios';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import Course from '../model/coursesModel';
import db from '../utils/db';
import { Store } from './../utils/Store';
import Slide from '../components/Slide';
import AOS from 'aos';
import { useEffect } from 'react';
import AdditionalInfo from '../components/AdditionalInfo';

export default function Home() {
 
  useEffect(() => {
    AOS.refresh(); // Refresh AOS whenever your component re-renders or new content is added dynamically
  });
      const sectionStyle = {
        backgroundImage: "url('/images/background1.jpeg')",
        backgroundColor: 'rgba(255, 255, 255,0.8)',
        width: "700px",
        height: '800px',
        

      }
      const writeUpStyle = {
        textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)',
       color: 'white'
      
      }
      const overlayStyle = {
        content: "''",
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
      }

  return (
    <>
    <Head>
        <title>Tcoan</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      
    <Slide/>
    <div className='container'>
      

      
      <Row>
        

        <Col md={6}>
          <br/>
          <br/>
          <div>
            <h1 data-aos="fade-up" style={{textTransform: "upperCase"}}>Welcome to the temple church of all nations</h1>
          <br/>
          <p data-aos="zoom-in">The Temple Church Of All Nations (Tcoan). Is a bible based ministries and spiritual organizations. It’s a deliverance, healing and a prophetic ministries, headed by the spiritual leader Pastor A.J. Rufus.
              Pastor A. J. Rufus is the General Overseer of The Temple church of All Nations. He’s a faith healer, deliverance minister and a Prophet.</p>
          </div>
        </Col> 
        <Col md={6}>
          <br/>
          <Card>
            <Card.Body>
              <Card.Img data-aos="fade-left" src="/images/homepage1.jpg"/>
            </Card.Body>
          </Card>
          </Col>  
      </Row>

    <br/>

      <Row>
        <Col sm={12} md={4} xl={4}>
          <Card.Img data-aos="fade-right" src="/images/watch-us-live.jpg"/>
        </Col>

        <Col sm={12} md={4} xl={4}>
          <Card.Img data-aos="fade-up" src="/images/watch-videos.png"/>
        </Col>

        <Col sm={12} md={4} xl={4}>
          <Card.Img data-aos="fade-left" src="/images/give-live.jpg"/>
        </Col>
      </Row>
   
      <Row>
        
        <Col data-aos="fade-right" md={4}>
        <br/>
        <br/>
          <h1 style={{color: 'brown'}}><i className='fas fa-calendar'></i></h1>
          <h2 style={{color: 'brown'}}>DAYS OF CHURCH SERVICES</h2>

          <h5 >SUNDAY’S</h5>
          <p>

Releasing the undiluted word of GOD</p>

      <h5>WEDNESDAY’S</h5>
      <p>

Prophetic Service

</p>

<h5>FRIDAY’S</h5>
<p>

Counselling</p>
        </Col>

        <Col data-aos="fade-up" md={7}>
          <br/>
          <br/>
          <div>
            <h4 style={{color: 'brown'}}>BE EXEMPTED</h4>
            <p>Psalm 37:25 -I have been young, and now am old; yet have I not seen the righteous forsaken, nor his seed begging bread.</p>
          
          <p>You are the righteousness of God in Christ Jesus; that is why God will exempt you from anything that will want to make you beg in the name of Jesus! Shame will come to an end in your life!
          Many people are walking the streets of life without hope</p>

          <p>Prov.18:15 -An intelligent heart acquires knowledge, and the ear of the wise seeks knowledge.
            Wisdom is not common sense; it is a very costly sense. Benjamin Franklin; one of the founding fathers of the United State of America, read his way to greatness. He did not wish for greatness; he worked himself into greatness. He had only 2years formal education but he founded a university which is still relevant up till date</p>
          
          <h4 style={{color: 'brown'}}>KEEP LEARNING</h4>
          <p>

Prov.24:5 –A wise man is strong; yea, a man of knowledge increaseth strength.

A wise man said that destiny is like stock exchange – it changes per day based on the value attached to it. Don’t be deceived that you will still be in the same level with your classmates or peers in the future because twenty children don’t play together for twenty years. By destiny, you are not rated the same with your peers.
</p>

<Button className="btn btn-outline text-center">Sign up as a Partner</Button>
          </div>
        </Col>
      </Row> 
      <br/>
      <br/>     
        <Row>
            <Col md={4}>
              <img src="/images/pst4.jpeg" style={{borderRadius: "100px", width: "150px", height: '150px' }}/>
          </Col>

          <Col md={7}>
              <p>

              “Champions are not crowned for desiring
to be crowned, champions are crown for winning their battles” “Your dream is your personal prophecy”
“Even marriages made in Heaven need earthly maintenance” “Do a little bits of good in the environment
you’re, it’s those little bits of good that will overwhelm the world” “The difference between God and
human is that God gives and forgives while human gets and forgets”
              </p>
          </Col>



        </Row>

        <div className="text-center">
          <h1 style={{fontSize: "80px", fontFamily: "impact"}}>GET <br/> INVOLVED</h1>

          <p>Get involved today in helping our man of God fulful the <br/> mission of this great commission in making Heaven and <br/> to take as many as possible.</p>
        </div>
        <br/>
        <br/>
       <Row>
       <p className="col-4 text-center">
OUR MISSION<br/>

Is to depopulate the kingdom of Darkness and to populate the kingdom of God.
</p>
<p className='col-4 text-center'>
OUR VISION <br/>

Is to make Heaven and to take as many as possible.
</p>

<p className='col-4 text-center'>
BECOME A PARTNER<br/>

Become a partner today and join our man of God in propagating the word of God
</p>
</Row>
<br/>
<br/>
<div className='container' style={sectionStyle}>
    <div style={overlayStyle}>

      <div style={writeUpStyle}>
        <Row>
          

          <Col md={6}>
            <br/>
            <br/>
            <br/>
            <br/>
            <Card.Img src="/images/testimony.jpeg"/>
          </Col>

          <Col md={6}>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 style={{fontSize: '60px'}}>Do you have a Testimony?</h1>
            <br/>
            <p>Remember whenever you testify of the goodness of God the devil flee and he is defeated</p>
              <Button className="btn btn-outline">Share your Testimony</Button>
          </Col>

        </Row>

      </div>
    </div>

</div>

      <AdditionalInfo/>
      
    </div>
    </>
    
  )
}

