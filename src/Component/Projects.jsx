import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import firstproject from '../assets/firstproject.png';
import secondproject from '../assets/secondproject.png';
import thirdproject from '../assets/thirdproject.png';

const Projects = () => {
  return (
    <section>
      <div className="text-center">
        <h1 className="fw-bolder display-3">PROJECTS</h1>
        <p>Let's explore some of the projects I have built!</p>
      </div>

      <Row className="p-5">
        <Col md={4} className="mb-5">
          <Card>
            <img src={firstproject} alt="" className="img-fluid w-100" />
            <Card.Body>
              <Card.Title>
              <div className="d-flex">
                <div>
                <h4 className='fw-bolder'>REACT,BOOTSTRAP, CSS</h4>
                <p>
                I co-developed the frontend interface of this venture
                capitalist <span className='fw-bolder'>Web Application </span> that consist of three dashboards 
                and a pitch application.
              </p>
              <div className='d-flex'>
              <p className='fw-bolder'>
                <a href="https://catalyst-pi.vercel.app/" target="_blank" 
                rel="noopener noreferrer" className='git'>
                 catalyst-pi.vercel.app/
                </a>
               <span> 18 Nov. 2023</span>
             </p>

              </div>
              </div>
             <h3 className='faPlusCircle'>
             <a href="https://catalyst-pi.vercel.app/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faPlusCircle} style={{ color: 'black' }} />
            </a>

              </h3>
              </div>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-5">
          <Card>
            <img src={secondproject} alt="" className="img-fluid w-100" />
            <Card.Body>
              <Card.Title>
              <div className="d-flex">
                <div>
                <h4 className='fw-bolder'>REACT, BOOTSTRAP</h4>
                <p>
                This simple landing page marks my first project into the realm of React JS.
                 Leveraging the power of bootstrap, I engineered a highly responsive interface 
                 that not only adapts seamlessly to various devices but also captivates with its aesthetic
                  allure. 
              </p>
              <div className='d-flex'>
              <p className='fw-bolder'>
                <a href="https://strong-kheer-787e1b.netlify.app/" target="_blank" 
                rel="noopener noreferrer" className='git'>
                 Cleva
                </a>
               <span> 18 Nov. 2023</span>
             </p>

              </div>
              </div>
             <h3 className='faPlusCircle'>
             <a href="https://strong-kheer-787e1b.netlify.app/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faPlusCircle} style={{ color: 'black' }} />
            </a>

              </h3>
              </div>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-5">
          <Card>
            <img src={thirdproject} alt="" className="img-fluid w-100" />
            <Card.Body>
              <Card.Title>
              <div className="d-flex">
                <div>
                <h4 className='fw-bolder'>HTML, CSS, JAVASCRIPT</h4>
                <p>
                Delve into my inaugural HTML,CSS and JAVASCRIPT Project. Uncover the fusion of creativity
                 that defines this project,
                  showcasing smooth user experience and captivating UI.
              </p>
              <div className='d-flex'>
              <p className='fw-bolder'>
                <a href="https://gilded-belekoy-5db105.netlify.app/" target="_blank" 
                rel="noopener noreferrer" className='git'>
                 TechSchool.com
                </a>
               <span> 18 Nov. 2023</span>
             </p>

              </div>
              </div>
             <h3 className='faPlusCircle'>
             <a href="https://gilded-belekoy-5db105.netlify.app/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faPlusCircle} style={{ color: 'black' }} />
            </a>

              </h3>
              </div>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Projects;
