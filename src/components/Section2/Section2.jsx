import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Section2.css'
import img1 from './img/IMAGE.jpg'
import img2 from './img/IMAGE (1).jpg'
import img3 from './img/IMAGE (2).jpg'
import img4 from './img/IMAGE (3).jpg'
import icon1 from './img/IMAGE icon.png'
import icon2 from './img/IMAGE (1) icon.png'
import icon3 from './img/IMAGE (2) icon.png'
import icon4 from './img/IMAGE (3) icon.png'
const Section2 = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col xl={12}>
              <p className="what-text">What we do.</p>
              <p className="the-text">The areas that we're specialized in.</p>
            </Col>
          </Row>
          <Row className='justify-content-around'>
          <Col xl={5}>
          <div className="watch-background">
            <img src={img1} alt="" className="photo-phone" />
          <div className="card2">
          <p className="pho-text">Product Photography</p>
            <p className="cards-text">Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</p>
           <div className="card3-button">
            <div className="while-black">

            </div>
           <button className="read">Read more</button>
           </div>
          </div>
          </div>
        </Col>
        <Col xl={5}>
          <div className="watch-background">
            <img src={img2} alt="" className="photo-phone" />
          <div className="card2">
          <p className="pho-text">Architecture Photography</p>
            <p className="cards-text">Architecture Photography
Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec.
Read more</p>
           <div className="card3-button">
            <div className="while-black">

            </div>
           <button className="read">Read more</button>
           </div>
          </div>
          </div>
        </Col>
          </Row>
          <Row className='justify-content-around'>
          <Col xl={5}>
          <div className="watch-background">
            <img src={img3} alt="" className="photo-phone" />
          <div className="card2">
          <p className="pho-text">Drone Photography</p>
            <p className="cards-text">Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</p>
           <div className="card3-button">
            <div className="while-black">

            </div>
           <button className="read">Read more</button>
           </div>
          </div>
          </div>
        </Col>
        <Col xl={5}>
          <div className="watch-background">
            <img src={img4} alt="" className="photo-phone" />
          <div className="card2">
          <p className="pho-text">Wildlife Photography</p>
            <p className="cards-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis.</p>
           <div className="card3-button">
            <div className="while-black">
            </div>
           <button className="read">Read more</button>
           </div>
          </div>
          </div>
        </Col>
          </Row>
        </Container>
              <div className="nature-mountain">
        <Container>
          <Row className='justify-content-end'>
            <Col xl={3}>
            <div className="nature-card">
            <h2 className="sunset-text">Sunset at Mount Fuji</h2>
                <p className="cras-text">Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.</p>
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
      </section>
    </>
  )
}
export default Section2