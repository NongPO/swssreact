import React, { useRef, useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    
  } from "mdb-react-ui-kit";
const DatePicker = () => {
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <MDBCol md="15">
      <MDBInput
        type="date"
        onChange={handleChange}
        ref={dateInputRef}
      />
    </MDBCol>
  );
};

export default DatePicker;