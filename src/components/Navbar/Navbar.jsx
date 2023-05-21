import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logoP from './img/Combined-Shape (1).png'
import './Navbar.css'

export default function Navbar() {
  return (
      <body>
    <div className='zeroNav'>
    <Container>  
        <Row className='justify-content-between'>
            <Col xl={2}>
                <div className="logoPhoto">
                    <img src={logoP} alt="" />
                </div>
            </Col>
            <Col xl={5} className="d-none d-sm-block">
              <ul className="list">
                <li className="list_iteam"><a href="#!" className="li_a">Business areas</a></li>
                <li className="list_iteam"><a href="#!" className="li_a">Featured images</a></li>
                <li className="list_iteam"><a href="#!" className="li_a">Gear cage</a></li>
                <li className="list_iteam"><a href="#!" className="li_a">Contact</a></li>
              </ul>
            </Col>
            <Col xl={2}>
              <button className='get-button'>Get template</button>
            </Col>
        </Row>
        </Container> 
    </div>
      </body>
  )
}
