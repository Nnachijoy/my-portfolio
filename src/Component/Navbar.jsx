
import React, { useState, useEffect } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import chapter from '../assets/chapter.pdf';




function MyNavbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };


    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar className={`sticky-top ${scrolling ? 'bg-white' : ''} hero`} expand="lg">
      <Container>
        <Navbar.Brand href="#home" className={`fw-bolder navbarBrand ${scrolling ? 'text-dark' : 'text-white'}`}>
          NNACHI
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">

          <Navbar.Text className={`me-4 ${scrolling ? 'text-dark' : 'text-white'}`}>
            <a href="https://github.com/nnachijoy" target="_blank" rel="noopener noreferrer" className={`git ${scrolling ? 'text-dark' : 'text-white'}`}>
              GitHub
            </a>
          </Navbar.Text>


            {/* <Navbar.Text>
              <a href={chapter} download={true} className={`text-dark ${scrolling ? 'text-dark' : 'text-white'}`}>
                  Download CV
              </a>
            </Navbar.Text> */}

           
<Navbar.Text>
  <a href={chapter} download={true} className={`text-dark ${scrolling ? 'text-dark' : 'text-white'}`}
  style={{textDecoration:'none'}}>
   Download CV <i className="fas fa-download"></i> 
  </a>
</Navbar.Text>




          

  
    



        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
