import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const AdditionalInfo = () => {
  return (
    <div className='container'>
        <br/>
        <br/>
      <Row>
        <Col md={4}>
            <h4>THE TEMPLE CHURCH OF ALL NATIONS</h4>
            <Card.Img src="/images/pst2.jpeg"/>
            
        </Col>

        <Col md={4}>
            <p>Wisdom is not common sense; it is a very costly sense. Benjamin Franklin; one of the founding fathers of the United State of America, read his way to greatness. He did not wish for greatness; he worked himself into greatness. He had only 2years formal education but he founded a university which is still relevant up till date</p>
            <p>Dico primis cum et, et verear aliquid equidem ius, mel no nonumes nostrum dissentiunt.</p>
        </Col>

        <Col md={4}>
            <h4>More about us</h4>
            <ul>
                <li><a href="/">Our Blog</a></li>
                <li><a href="/">Watch our Media</a></li>
                <li><a href="/">Contact and Help</a></li>
                <li><a href="/">Give</a></li>

            </ul>
        </Col>
        <hr/>
      </Row>
    </div>
  )
}

export default AdditionalInfo
