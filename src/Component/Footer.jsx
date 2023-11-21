// import React from "react";
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
// } from "mdb-react-ui-kit";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { NavLink } from "react-router-dom";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//   faFacebookF,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import "./Footer.css";


// library.add(fab, faFacebookF, faTwitter, faYoutube);

// export default function App() {
//   return (
//     <MDBFooter
//       bgColor="white"
//       className="text-center text-lg-start text-muted footer "
//       linkColor="red"
//     >
//       <section className="">
//         <MDBContainer className="text-center text-md-start mt-5">
//           <MDBRow className="mt-3">
//             <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">
//                 Nnachi
//               </h6>
//               <p>
//               Transforming Visions into Ventures. Accelerating Innovation, Empowering Entrepreneurs, and Shaping the Future.
//               </p>
//             </MDBCol>

//             <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
//               <h6
//                 className="text-uppercase fw-bold mb-4"
//                 style={{ color: "#7C6512" }}
//               >
//                 OUR PAGES
//               </h6>
//               {/* <p>
//     <a href='#!' className='custom-link-color text-decoration-none'>
//       About
//     </a>
//   </p> */}

//               <p>
//                 <NavLink
//                   to="/about"
//                   className="custom-link-color text-decoration-none"
//                 >
//                   About
//                 </NavLink>
//               </p>



//               <p>
//                 <NavLink
//                   to="/contactus"
//                   className="custom-link-color text-decoration-none"
//                 >
//                   Contact Us
//                 </NavLink>
//               </p>
//             </MDBCol>

//             <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
//               <h6
//                 className="text-uppercase fw-bold mb-4"
//                 style={{ color: "#7C6512" }}
//               >
//                 PATNERSHIP
//               </h6>
//               <p>
//                 <a href="#!" className="custom-link-color text-decoration-none">
//                   Partners
//                 </a>
//               </p>
              
//             </MDBCol>

//             <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
//               <h6
//                 className="text-uppercase fw-bold mb-4"
//                 style={{ color: "#7C6512" }}
//               >
//                 GET IN TOUCH
//               </h6>
//               <h6 className="">Contact us any time for getting support.</h6>

//               <a
//                 href="mailto:contact@catalyst.com.com"
//                 style={{ color: "#F8CA25" }}
//                 className="text-decoration-none footer"
//               >
//                 <FontAwesomeIcon icon="" className="me-3 mt-5" />
//                 contact@catalyst.com.com
//               </a>
//               <div className="social-icons mt-4 custom-link-color">
//                 <a
//                   href="https://www.facebook.com"
//                   className="me-4  custom-link-color"
//                 >
//                   <FontAwesomeIcon icon={faFacebookF} />
//                 </a>
//                 <a
//                   href="https://www.twitter.com"
//                   className="me-4  custom-link-color "
//                 >
//                   <FontAwesomeIcon icon={faTwitter} />
//                 </a>
//                 <a
//                   href="https://www.youtube.com"
//                   className="me-4  custom-link-color "
//                 >
//                   <FontAwesomeIcon icon={faYoutube} />
//                 </a>
//               </div>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </section>

//       <div className="text-center p-4" style={{ fontSize: "12px" }}>
//         © 2023 Catalyst All rights reserved
//       </div>
//     </MDBFooter>
//   );
// }














import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-white text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-white'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with me on social networks:</span>
        </div>

        <div>
        <a href="https://www.facebook.com/nnachijoy" className="me-4 text-reset">
           <MDBIcon fab icon="facebook-f" />
        </a>

          <a href="https://www.twitter.com/nnachijoy" className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="mailto:nnachijoychima2000@gmail.com" className="me-4 text-reset">
  <MDBIcon fab icon="google" />
</a>

          <a href="https://www.linkedin.com/nnachijoy" className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="https://github.com/nnachijoy" className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5 text-white'>
          <MDBRow className='mt-3'>
            <MDBCol md="4" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Nnachi
              </h6>
            </MDBCol>

            <MDBCol md="4" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Address</h6>
              <p>
               Rivers State
              </p>
              <p>
               Nigeria
              </p>
            </MDBCol>

            <MDBCol md="4" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                  07043560704
              </p>
              <p>
               Nnachijoychima2000@gmail.com
              </p>
            </MDBCol>

           
          </MDBRow>
        </MDBContainer>
      </section>

    </MDBFooter>
  );
}