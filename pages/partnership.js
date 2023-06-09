import React from 'react'
import { Breadcrumb, BreadcrumbItem, Col, Row, Form, Button } from 'react-bootstrap'
import AdditionalInfo from '../components/AdditionalInfo'
import FormContainer from '../components/FormContainer'

const about = () => {

  return (
  <div>
    

    <div style={{backgroundImage: "url('/images/onlinegiving.png')", height: "100px"}}>


    </div>
        

      <div className='container'>
            <br/>
            <br/>
            <h1>Partnership</h1>
            <hr/>
            <FormContainer> 

                <Form>
                    <Form.Group data-aos="fade-up">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control>


                    </Form.Control>
                    </Form.Group>

                    <Form.Group data-aos="fade-up">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control>


                    </Form.Control>
                    </Form.Group>


                    <Form.Group data-aos="fade-up">
                    <Form.Label>Email</Form.Label>
                    <Form.Control>


                    </Form.Control>
                    </Form.Group>

                    <Form.Group data-aos="fade-up">
                    <Form.Label>Country</Form.Label>
                    <Form.Control>


                    </Form.Control>
                    </Form.Group>

                    <Form.Group data-aos="fade-up">
                    <Form.Label>City</Form.Label>
                    <Form.Control>


                    </Form.Control>
                    </Form.Group>

                    <Form.Group data-aos="fade-up">
                    <Form.Label>Address</Form.Label>
                    <Form.Control>


                    </Form.Control>
                    </Form.Group>

                    <Form.Group data-aos="fade-up">
                    <Form.Label>Partnership</Form.Label>
                    <Form.Control as="select">
                        <option> Silver Partner $1000</option>
                        <option> Gold Partner $2000</option>
                        <option> Diamond Partner $3000</option>

                    </Form.Control>
                    </Form.Group>
                    <Form.Group data-aos="fade-up">
                  
                    <Button style={{backgroundColor: 'brown', border: 'brown'}}>Submit</Button>
                    </Form.Group>

                </Form>
     



          
            </FormContainer>
      </div>
      <br/>
      <br/>
      <br/>

      <AdditionalInfo/>
    </div>
  )
}

export default about
