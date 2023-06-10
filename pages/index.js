import Head from 'next/head';
import { Container, Row, Card, Button, Col } from 'react-bootstrap';
import Slide from '../components/Slide';
import AdditionalInfo from '../components/AdditionalInfo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    AOS.refresh();
  });

  return (
    <>
      <Head>
        <title>Tcoan</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Container fluid>
        <Row>
          <Col>
            <Slide />
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <h1 data-aos="fade-up" style={{ textTransform: "uppercase", textAlign: "center" }}>Welcome to the Temple Church of All Nations</h1>
            <br />
            <p data-aos="zoom-in" style={{ textAlign: "center" }}>The Temple Church Of All Nations (Tcoan) is a Bible-based ministry and spiritual organization. It’s a deliverance, healing, and prophetic ministry, headed by the spiritual leader Pastor A.J. Rufus.
            Pastor A. J. Rufus is the General Overseer of The Temple Church of All Nations. He’s a faith healer, deliverance minister, and a Prophet.</p>
          </Col>

          <Col sm={12}>
            <Card>
              <Card.Body>
                <Card.Img data-aos="fade-left" src="/images/homepage1.jpg" />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <Card.Img data-aos="fade-right" src="/images/watch-us-live.jpg" />
          </Col>
          <Col sm={4}>
            <Card.Img data-aos="fade-up" src="/images/Watch-Videos.png" />
          </Col>
          <Col sm={4}>
            <Card.Img data-aos="fade-left" src="/images/give-live.jpg" />
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <br />
            <br />
            <h1 style={{ color: 'brown', textAlign: 'center' }}><i className='fas fa-calendar'></i></h1>
            <h2 style={{ color: 'brown', textAlign: 'center' }}>DAYS OF CHURCH SERVICES</h2>
            <h5 style={{ textAlign: 'center' }}>SUNDAY’S</h5>
            <p style={{ textAlign: 'center' }}>Releasing the undiluted word of GOD</p>
            <h5 style={{ textAlign: 'center' }}>WEDNESDAY’S</h5>
            <p style={{ textAlign: 'center' }}>Prophetic Service</p>
            <h5 style={{ textAlign: 'center' }}>FRIDAY’S</h5>
            <p style={{ textAlign: 'center' }}>Counselling</p>
          </Col>

          <Col sm={6}>
            <br />
            <br />
            <div>
              <h4 style={{ color: 'brown', textAlign: 'center' }}>BE EXEMPTED</h4>
              <p>Psalm 37:25 - I have been young, and now am old; yet have I not seen the righteous forsaken, nor his seed begging bread.</p>
              <p>You are the righteousness of God in Christ Jesus; that is why God will exempt you from anything that will make you beg in the name of Jesus! Shame will come to an end in your life!
              Many people are walking the streets of life without hope.</p>
              <p>Prov.18:15 - An intelligent heart acquires knowledge, and the ear of the wise seeks knowledge.
              Wisdom is not common sense; it is a very costly sense. Benjamin Franklin, one of the founding fathers of the United States of America, read his way to greatness. He did not wish for greatness; he worked himself into greatness. He had only 2 years of formal education but he founded a university which is still relevant up till date.</p>
              <h4 style={{ color: 'brown', textAlign: 'center' }}>KEEP LEARNING</h4>
              <p>Prov.24:5 – A wise man is strong; yea, a man of knowledge increaseth strength.
              A wise man said that destiny is like the stock exchange – it changes per day based on the value attached to it. Don’t be deceived that you will still be at the same level with your classmates or peers in the future because twenty children don’t play together for twenty years. By destiny, you are not rated the same as your peers.</p>
              <Button className="btn btn-outline text-center" onClick={() => router.push('/partnership')}>Sign up as a Partner</Button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <img src="/images/pst4.jpeg" style={{ borderRadius: "100px", width: "150px", height: '150px' }} />
          </Col>
          <Col sm={8}>
            <p>
              “Champions are not crowned for desiring to be crowned, champions are crowned for winning their battles.”
              “Your dream is your personal prophecy.”
              “Even marriages made in Heaven need earthly maintenance.”
              “Do a little bit of good in the environment you’re in; it’s those little bits of good that will overwhelm the world.”
              “The difference between God and humans is that God gives and forgives while humans get and forget.”
            </p>
          </Col>
        </Row>

        <div className="text-center">
          <h1 style={{ fontSize: "80px", fontFamily: "impact" }}>GET <br /> INVOLVED</h1>
          <p>Get involved today in helping our man of God fulfill the mission of this great commission in making Heaven and taking as many as possible.</p>
        </div>
        <br />
        <br />
        <Row>
          <p className="col-12 col-sm-4 text-center">
            OUR MISSION<br />
            Is to depopulate the kingdom of Darkness and to populate the kingdom of God.
          </p>
          <p className='col-12 col-sm-4 text-center'>
            OUR VISION <br />
            Is to make Heaven and to take as many as possible.
          </p>
          <p className='col-12 col-sm-4 text-center'>
            BECOME A PARTNER<br />
            Become a partner today and join our man of God in propagating the word of God.
          </p>
        </Row>

        <div className='container' style={{ backgroundImage: "url('/images/background1.jpeg')", backgroundColor: 'rgba(255, 255, 255,0.8)', width: "700px", height: '800px' }}>
          <div style={{ content: "''", position: 'relative', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1 }}></div>
          <div style={{ position: 'relative', top: "-660px", zIndex: 2 }}>
            <h3 style={{ color: 'brown', textAlign: 'center' }}>Testimonies</h3>
            <p style={{ color: 'white', textAlign: 'center', paddingTop: '20px' }}>Our Ministry has witnessed incredible testimonies of healing, deliverance, and breakthrough. Here are a few testimonies from our members:</p>
            <br />
          </div>
        </div>
      </Container>

      <AdditionalInfo />
    </>
  );
}
