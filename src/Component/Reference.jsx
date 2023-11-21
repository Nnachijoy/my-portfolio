import React from 'react'
import secondperson from '../assets/secondperson.png';
import { Col, Row, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import './References.css'; 

const Reference = () => {
  return (
    <div>

        <Container className='reference-container p-3 text-black mt-5'>

        <div className='p-3'>
  <h2 className='display-4 fw-bolder'>
    <FontAwesomeIcon icon={faQuoteLeft} size='2x' className='text-black' />
  </h2>
</div>

        <Row>
            <Col  className='mb-5'>
            <div className="d-flex">
                <div className="avatar">
                  <img src={secondperson} alt="reference1"/>
                </div>
                <div className="m-2 mb-0">
                  <h3 className="mb-0 ">Ebibote Doutimi</h3>
                  <p className="text-small">CEO | ElitePath Software</p>
                  <p className="lead mb-0">
                  Nnachi displays exemplary professionalism and is able to
                   take on challenges. She delivers timely and is an asset to any team.
                </p>
                </div>
                </div>
            </Col>

            <Col>
            <div className="d-flex">
                <div className="avatar">
                  <img src={secondperson} alt="reference2" />
                </div>
                <div className="m-2 mb-0">
                  <h3 className="mb-0">Ubong Patrick</h3>
                  <p className="text-small">CEO | Web Design Company</p>
                  <p className="lead mb-0">
                  Joy is a great co-worker and problem solver. She is quick to extend her
                   helping hand and makes a good team player.
                </p>
                </div>
                </div>
            </Col>
        </Row>
        </Container>

           


              </div>
  )
}

export default Reference