import React from 'react'
import { Breadcrumb, BreadcrumbItem, Col, Row, Form, Button } from 'react-bootstrap'
import AdditionalInfo from '../components/AdditionalInfo'
import FormContainer from '../components/FormContainer'

const about = () => {

  return (
  <div>
    

    <div style={{backgroundImage: "url('/images/pst.jpeg')", height: "300px"}}>


    </div>
        

      <div className='container'>
            <br/>
            <br/>
            <h1>Prayer Request</h1>
            <hr/>
            <FormContainer> 

                <Form>
                    <Form.Group data-aos="fade-up">
                    <Form.Label>Name</Form.Label>
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
                    <Form.Label>Prayer Request</Form.Label>
                    <Form.Control as="textarea">


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
