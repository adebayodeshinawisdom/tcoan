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
            <h1>Pastor A J Rufus</h1>
            <hr/>
          <p data-aos="fade-up">

          Pastor A. J. Rufus is the General Overseer of The Temple church of All Nations. He’s a faith healer, deliverance minister and a Prophet. The church is situated at 1617 Alwyn Road, Pretoria South Africa.
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
