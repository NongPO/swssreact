import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer "
import Body from '../Components/BodyRegis';

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    
  }
  from 'mdb-react-ui-kit';


function Register() {
  return (
   <MDBContainer fluid>

   
   
 {/*  { <Navbar /> } */}

   { <Body /> }

    <Footer/>

    </MDBContainer>
  );
}

export default Register;