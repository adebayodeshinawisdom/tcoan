import React from 'react'
import { Breadcrumb, BreadcrumbItem, Col, Row } from 'react-bootstrap'
import AdditionalInfo from '../components/AdditionalInfo'

const about = () => {

  return (
  <div>
    

    <div style={{backgroundImage: "url('/images/pst.jpeg')", height: "300px"}}>


    </div>
        

      <div className='container'>

        <Row>
          <Col md={6}>
            <br/>
            <br/>
            <h1>About Us</h1>
            <hr/>
          <p data-aos="fade-up">

The Temple Church Of All Nations (Tcoan).

Is a bible-based ministry and spiritual organization.
It is deliverance, healing, and prophetic ministries. Headed by the spiritual leader Pastor AJ Rufus.
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
