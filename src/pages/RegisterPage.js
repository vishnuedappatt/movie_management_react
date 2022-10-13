import React from 'react'
import Register from '../Components/Register/Register'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import NavBar from '../Components/NavBar/NaveBar'



function RegisterPage() {
  return (
    <div>
        <Row>
            <NavBar/>
        </Row>
        <Row className='justify-content-center mt-1 pt-5'>
   
        <Col lg={5}>        
            <div><Register /></div>
            </Col>
        </Row>  

    </div>

    
  )
}

export default RegisterPage