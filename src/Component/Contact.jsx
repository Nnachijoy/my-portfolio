import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import contactmee from '../assets/contactmee.jpg';

const Contact = () => {
  return (
    <div>
        <Row className='p-5'>
            <Col xs={12} md={6} className='mb-5 mt-5'>
            <h2 className='fw-bolder display-4'>Hire Me</h2>
            <p className='lead'>
I am eager to harness my extensive development experience and deep technical 
expertise in a dynamic role as a frontend developer. Specializing in crafting
 exceptional user interfaces, adept problem-solving, and the creation of impactful software, 
 I bring a collaborative spirit to every project, ensuring successful completion as a dedicated
  team player.</p>

  <div className='mt-2'>
  <a href='mailto:your-email@gmail.com' target='_blank' rel='noopener noreferrer'>
        <button className='btn btn-primary me-2'>
          <i className='bi bi-envelope'></i> Email Me
        </button>
      </a>

      {/* GitHub button */}
      <a href='https://github.com/your-github-username' target='_blank' rel='noopener noreferrer'>
        <button className='btn btn-dark me-2'>
          <i className='bi bi-github'></i> GitHub
        </button>
      </a>

      {/* WhatsApp button */}
      <a href='https://wa.me/1234567890' target='_blank' rel='noopener noreferrer'>
        <button className='btn btn-success'>
          <i className='bi bi-whatsapp'></i> WhatsApp
        </button>
      </a>

      
  </div>
            </Col>

            <Col xs={12} md={6} className=''>
            <img src={contactmee} alt="" className="img-fluid w-100" />
            </Col>
        </Row>
    </div>
  )
}

export default Contact