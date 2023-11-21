// import React from 'react';
// import { Container, Navbar } from 'react-bootstrap';



// function MyNavbar() {
//   return (
//     <Navbar>
//       <Container>

//         <Navbar.Brand href="#home" className="text-white fw-bolder navbarBrand">
//           NNACHI
//         </Navbar.Brand>

//         <Navbar.Toggle />
//         <Navbar.Collapse className="justify-content-end">

//         <Navbar.Text className="me-3">
//         <a href="https://github.com/nnachijoy" target="_blank" className="text-white git">
//            GitHub
//         </a>
//         </Navbar.Text>

//           <Navbar.Text className="text-white">
//             Download CV
//           </Navbar.Text>

//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default MyNavbar;


import React, { useState, useEffect } from 'react';
import { Container, Navbar } from 'react-bootstrap';

function MyNavbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar className={`sticky-top ${scrolling ? 'bg-white' : ''}`} expand="lg">
      <Container>
        <Navbar.Brand href="#home" className={`fw-bolder navbarBrand ${scrolling ? 'text-dark' : 'text-white'}`}>
          NNACHI
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">

          <Navbar.Text className={`me-3 ${scrolling ? 'text-dark' : 'text-white'}`}>
            <a href="https://github.com/nnachijoy" target="_blank" rel="noopener noreferrer" className={`git ${scrolling ? 'text-dark' : 'text-white'}`}>
              GitHub
            </a>
          </Navbar.Text>

          <Navbar.Text className={`text-dark ${scrolling ? 'text-dark' : 'text-white'}`}>
            Download CV
          </Navbar.Text>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
