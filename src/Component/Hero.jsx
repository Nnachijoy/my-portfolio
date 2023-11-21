import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import blackworkspace from "../assets/blackworkspace.jpg";

const Hero = () => {
  return (
    <div className='mt-5 p-3'>
        <Container>
            <Row>
                <Col md={6} xm={12} className='mt-5 mb-3'>
                <h2 className='fw-bolder display-4'>
                    <span  className="animated-bg">Frontend Developer</span> {" "}who writes clean & efficient code.
                </h2>
                <p>Picture me as a dedicated architect, driven by an unwavering
                    commitment to excellence. Nnachi is poised with a fusion of creativity and 
                    precision to turn ordinary concepts into extraordinary digital
                    experiences. Fueled by a passion for innovation and sustained 
                    by a careful blend of strategic thinking, I embark on every project
                    with an unwavering commitment to sculpt a web masterpiece that not only
                    meets but exceeds expectations.
                </p>
                </Col>

                <Col>
                <img src={blackworkspace} alt="" className="img-fluid w-100" />  
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Hero