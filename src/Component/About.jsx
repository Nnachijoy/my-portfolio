import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import avatar from "../assets/avatar.png";
import ProgressBar from 'react-bootstrap/ProgressBar';
import './About.css'; 

const About = () => {
  const now = 90;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('myElement'); // Replace 'myElement' with the actual ID of your container element
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  

  return (
    <section className='bg-black hero'>
        <Container className='bg-black p-5'>
            <Row>

                <Col md={7} className='mt-5 mb-5'>
                 <Row>
                 <Col sm={6} md={5} className={`slide-in ${isVisible ? 'active' : ''}`} id="myElement">
                      <div >
                        <img src={avatar} alt="" className="img-fluid w-100 border p-5" />   
                      </div>
                    </Col>

                    <Col sm={6} md={7} className={`slide-in ${isVisible ? 'active' : ''}`} id="myElement">
                      <div className="mt-2">
                        <p><span>Name: </span> <span>Nnachi Joy</span></p>
                        <p><span>Profile: </span> <span>Frontend Developer</span></p>
                        <p><span>Email: </span> <span><a href="gmail.com"  className="git text-white">
                          Nnachijoychima2000@gmail.com
                          </a></span></p>
                          <p><span>Git UserName: </span> <span>NnachiJoy</span></p>
                          <p><span>Linkedin: </span> <span>NnachiJoy</span></p>
                        <p><span>Phone: </span> <span>07043560704</span></p>
                      </div>
                    </Col>
                       <div className='mt-5'>
                        <h4 className='fw-bolder display-6'>Professional Skills</h4>
                        <Row>
                          <Col md={6}>
                          <div className='mt-2'>
                             
                             <Row>
                              <Col md={6}>
                            <div>
                          <h5 className='fw-bolder'>Git 60%</h5>
                          <ProgressBar striped now={60} label={'Intermediate'} variant="dark" className="mb-3" style={{ height: '17px' }}/>
                          </div>
                          </Col>
                          
                          <Col md={6}>
                          <div>
                          <h5 className='fw-bolder'>Collab 80%</h5>
                          <ProgressBar striped now={80} label={'Advance'} variant="warning" className="mb-3" style={{ height: '17px' }} />
                          </div> 
                          </Col>

                          
                          </Row>

                          <Row classname=''>
                              <Col md={6}>
                            <div>
                          <h5 className='fw-bolder'>Javascript 80%</h5>
                          <ProgressBar striped now={80} label={'Advance'} variant="warning" className="mb-3" style={{ height: '17px' }}/>
                          </div>
                          </Col>
                          
                          <Col md={6}>
                          <div>
                          <h5 className='fw-bolder'>React JS 80%</h5>
                          <ProgressBar striped now={80} label={'Advance'} variant="dark" className="mb-3" style={{ height: '17px' }} />
                          </div> 
                          </Col>
                          </Row>

                          <Row>
                              <Col md={6}>
                            <div>
                          <h5 className='fw-bolder'>CSS 70%</h5>
                          <ProgressBar striped now={70} label={'Advance'} variant="dark" className="mb-3" style={{ height: '17px' }}/>
                          </div>
                          </Col>
                          
                          <Col md={6}>
                          <div>
                          <h5 className='fw-bolder'>Bootstrap 90%</h5>
                          <ProgressBar striped now={80} label={'Expert'} variant="warning" className="mb-3" style={{ height: '17px' }} />
                          </div> 
                          </Col>
                          </Row>

                          <Row>
                              <Col md={6}>
                            <div>
                          <h5 className='fw-bolder'>Tailwind 60%</h5>
                          <ProgressBar striped now={70} label={'Intermediate'} variant="warning" className="mb-3" style={{ height: '17px' }}/>
                          </div>
                          </Col>
                          
                          <Col md={6}>
                          <div>
                          <h5 className='fw-bolder'>Logic 80%</h5>
                          <ProgressBar striped now={80} label={'Advance'} variant="dark" className="mb-3" style={{ height: '17px' }} />
                          </div> 
                          </Col>
                          </Row>

                        </div>
                          </Col>
                          <Col>
                          {/* emptycol */}
                          </Col>
                        </Row>
                        </div>
                            
                 </Row>
                 
                </Col>

                <Col md={5}>
                  <div className="">
                    <div>
                      <h3 className="fw-bolder">
                        About me
                      </h3>
                     <div className='curvedline'></div>
                      <p className='lead mt-3'>
                      Are you in search of a seasoned frontend developer with a wealth of experience 
                      and expertise? Look no further, as you have just found one. As a seasoned and 
                      adept developer, I bring years of hands-on experience in conceiving, crafting, 
                      and deploying applications and solutions across a spectrum of cutting-edge technologies 
                      and programming languages.
                      </p>

                      <p className='lead'>
                      I am enthusiastic about channeling my skills and proficiency into propelling your 
                      team's endeavors to new heights.
                      </p>

                      <p className='lead'>
                      Possessing the proficiency to seamlessly translate user stories into
                      compelling user interface designs is where I hone my skills. My strength
                       lies in not only conceptualizing innovative 
                      designs but also in executing them with scalable and efficient code, ensuring a superior user 
                      experience. 
                      </p>

                      <p className='lead'>
                      I would appreciate an interview at your earliest convinience. I'm eager to discuss how my
                       personality and skills fit into your prerequisite. Thank You.
                      </p>
                    </div>

                  </div>
                </Col>

            </Row>
        </Container>
    </section>
  )
}

export default About











