import React from 'react'
import { FaEnvelope, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import contactt from '../assets/contactt.jpg';
import './Contact.css'; 


const Contact = () => {
  return (
    <div className='hero'>
        <Row className='p-5'>
            <Col xs={12} md={6} className='mb-5 mt-3'>
            <h2 className='fw-bolder display-4'>Hire Me</h2>
            <p className='lead'>
I am eager to harness my extensive development experience and deep technical 
expertise in a dynamic role as a frontend developer. Specializing in crafting
 exceptional user interfaces, adept problem-solving, and the creation of impactful software, 
 I bring a collaborative spirit to every project, ensuring successful completion as a dedicated
  team player.</p>

<div className='mt-2'>
  <a href='mailto:Nnachijoychima2000@gmail.com' target='_blank' rel='noopener noreferrer' className='rounded-icon me-3'>
    <FaEnvelope size={20} />
  </a>

  <a href='https://github.com/Nnachijoy' target='_blank' rel='noopener noreferrer' className='rounded-icon me-3'>
    <FaGithub size={20} />
  </a>

  <a href='https://wa.me/07043560704' target='_blank' rel='noopener noreferrer' className='rounded-icon me-3'>
    <FaWhatsapp size={20} />
  </a>

  <a href='https://www.linkedin.com/in/your-linkedin-profile' target='_blank' rel='noopener noreferrer' className='rounded-icon me-3'>
    <FaLinkedin size={20} />
  </a>
</div>


            </Col>

            <Col xs={12} md={6} className=''>
            <img src={contactt} alt="" className="img-fluid w-100" />
            </Col>
        </Row>
    </div>
  )
}

export default Contact