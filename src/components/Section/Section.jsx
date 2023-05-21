import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Section.css'
import img1 from './img/IMAGE.png'
import img2 from './img/IMAGE (1).png'
import img3 from './img/IMAGE (2).png'
import img4 from './img/IMAGE (3).png'
export default function Section() {
  return (
    <div>
      <div className="nature-background">
<Container>
    <Row className='justify-content-center'>
        <Col xl={12}>
   <div className="nature-card">
   <p className="pho">Photographer  Filmmaker</p>
          <h1 className='aper'>Aperture Studios</h1>
   <div className="pro-2">
   </div>
   </div>
        </Col>
        <Col xl={5}>
        <p className="ispum-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p> 
        </Col>
    </Row>
    <Row className='justify-content-end'>
        <Col  xl={3}>
            <div className="icons">
                    <img src={img1} alt="" />
                    <p className="ice">1/2000s</p>
                    <img src={img2} alt="" />
                    <p className="ice">f/11</p>
                    <img src={img3} alt="" />
                    <p className="ice">100</p>
                    <img src={img4} alt="" />
                    <p className="ice">Iceland</p>
            </div>
        </Col>
    </Row>
</Container>
      </div>
    </div>
  )
}
