import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, Col, Row } from 'react-bootstrap'
import AdditionalInfo from '../components/AdditionalInfo'

const about = () => {

  return (
  <div>
    

    <div style={{backgroundImage: "url('/images/Watchusonline.jpg')", height: "300px"}}>


    </div>
        

      <div className='container'>

        <Row>
          <Col md={12}>
            <br/>
            <br/>
            <h1>Live Service</h1>
            <hr/>
          <p data-aos="fade-up" className="text-center">

            <Card.Img src="/images/online.jpg" />
            <br/>
          <span className="text-center">We are currently offline.We are live every Sunday by 8 am</span>
        </p>
          </Col>
        </Row>
      </div>
      <br/>
      <br/>
      <br/>
      <AdditionalInfo/>
    </div>
  )
}

export default about
