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
            <h1>Contact Us</h1>
            <hr/>
          <p data-aos="fade-up">



          <span><i className='fa fa-map-marker'></i> Veldman Ave, Hans Coverdale Rd Eersterust. Pretoria, South Africa 0001</span>
          <br/>
          <span><i className="fa fa-phone"></i> +27639172279</span>

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
