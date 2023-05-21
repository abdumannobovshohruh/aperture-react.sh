import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Section3.css'
import photoK from './img-section3/IMAGE.jpg'
import icon1 from './img-section3/IMAGE icon.png'
import icon2 from './img-section3/IMAGE (2) icon.png'
import icon3 from './img-section3/IMAGE (2) icon.png'
import icon4 from './img-section3/IMAGE (3) icon.png'
import photoS from "./img-section3/Frame.png"

export default function Section3() {
  return (
    <div>
            <div className="big-black-background">
        <Container>
            <Row className='justify-content-between'>
                <Col xl={6}>
                    <div className="gear-card">
                        <p className="the-gear-text">The Gear cage</p>
                        <p className="tools-text">The tools that we use.</p>
                        <p className="say-text">The say that "no place is boring if you've had a good night's sleep and have a pocket full of unexposed film". While we don't shoot (a lot) of film these days — these are the tools that we actually use everyday to capture the amazing things around us.</p>
                        <div className="card3-button">
            <div className="while-black">

            </div>
           <button className="read">Check it out</button>
           </div>
                    </div>
                </Col>
                <Col xl={6}>
                    <div className="photo-camera-div">
                        <img src={photoK} alt="" className="photo-camera" />
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-end'>
            <Col xl={3}>
            <div className="icons-3">
                    <img src={icon1} alt="" />
                    <p className="ice">0,8''</p>
                    <img src={icon2} alt="" />
                    <p className="ice">f/5,6</p>
                    <img src={icon3} alt="" />
                    <p className="ice">100</p>
                    <img src={icon4} alt="" />
                    <p className="ice">Sweden</p>
            </div>
        </Col>
            </Row>
        </Container>
    <div className="nature-mount-2">
    <Container>
          <Row className='justify-content-end'>
            <Col xl={3}>
            <div className="nature-card">
            <h2 className="sunset-text">Monstera Leafs</h2>
                <p className="cras-text">Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
            </div>
            
            </Col>
          </Row>
          <Row className='justify-content-end'>
        <Col xl={3}>
            <div className="icons">
                    <img src={icon1} alt="" />
                    <p className="ice">1''</p>
                    <img src={icon2} alt="" />
                    <p className="ice">f/16</p>
                    <img src={icon3} alt="" />
                    <p className="ice">400</p>
                    <img src={icon4} alt="" />
                    <p className="ice">Japan</p>
            </div>
        </Col>
    </Row>
        </Container>    
    </div>
    <Container>
        <Row>
            <Col xl={12}>
                <div className="past-card">
                    <h3 className="past-text">Past clients</h3>
                    <p className="trusted-text">Trusted by your favourite companies</p>
                </div>
              <div className="photoS_Card d-none d-sm-block">
              <img src={photoS} alt="" className='photoS' />
              </div>
            </Col>
        </Row>
    </Container>
  <div className="himalay-card">
  <Container>
    <Row className='justify-content-end'>
            <Col xl={3}>
            <div className="nature-card">
            <h2 className="sunset-text">Star fall in the Himalayas</h2>
                <p className="cras-text">Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.</p>
            </div>
            
            </Col>
          </Row>
          <Row className='justify-content-end'>
        <Col xl={3}>
            <div className="icons">
                    <img src={icon1} alt="" />
                    <p className="ice">1''</p>
                    <img src={icon2} alt="" />
                    <p className="ice">f/16</p>
                    <img src={icon3} alt="" />
                    <p className="ice">400</p>
                    <img src={icon4} alt="" />
                    <p className="ice">Japan</p>
            </div>
        </Col>
    </Row>
    </Container>
  </div>
        </div>
    </div>
  )
}
