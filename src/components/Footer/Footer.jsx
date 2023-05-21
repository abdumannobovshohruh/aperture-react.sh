import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FooterP from './Footer-img/Combined-Shape.png'
import './Footer.css'
import insta from './Footer-img/Frame (1).png'
export default function Footer() {
  return (
    <div>
      <footer>
        <Container>
            <Row className='justify-content-between border-bot'>
                <Col xl={5}>
                    <div className="footerP">
                        <img src={FooterP} alt="" className="FoPhoto" />
                        <p className="video-footer-text">Photographers  videographers capturing the world around us.</p>
                    </div>
                </Col>
                <Col xl={2}>
                    <p className="busines-text">Business areas</p>
                    <p className="drone-text">Product Photography</p>
                    <p className="drone-text">Architecture Photography</p>
                    <p className="drone-text">Drone Photography</p>
                    <p className="drone-text">Wildlife Photography</p>
                </Col>
                <Col xl={2}>
                    <p className="busines-text">Pages</p>
                    <p className="drone-text">Gear cage</p>
                    <p className="drone-text">Featured images</p>
                    <p className="drone-text">Contact</p>
                    <p className="drone-text">Style guide</p>
                    <p className="drone-text">Instructions</p>
                    <p className="drone-text">Changelog</p>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row className='top-bot justify-content-between'>
                <Col xl={4}>
                   <div className="subs">
                   <h5 className='our-text'>Subscribe to our newsletter</h5>
                    <p className="people-text">Read about all the things we do.</p>
                   </div>
                </Col>
                <Col xl={4}>
                    <form className='free' >
                        <input type="text" className='input' />
                        <button className='endF '></button>
                    </form>
                </Col>
            </Row>
            <Row className='justify-content-between'>
                <Col xl={4}>
                    <p className="ice-text">© Aperture Photography, Inc. All rights reserved.Licensing</p>
                </Col>
                <Col xl={2}>
                    <div className="insta">
                        <img src={insta} alt="" className="tele" />
                    </div>
                </Col>
            </Row>
        </Container>
      </footer>
    </div>
  )
}
