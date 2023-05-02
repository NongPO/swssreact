import Form from 'react-bootstrap/Form';
import index from ".././index.css"
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

function CheckApiExample() {
  return (
    
    <Form>
      {['checkbox'].map((type) => (
        
        <MDBCol key={type} className="mb-15 "  >
          <Form.Check  type={type} id={`check-api-${type}`}>
            <Form.Check.Input  type={type} isValid />
            
            <Form.Check.Label>{`ฉันได้อ่านและยอมรับ ข้อกำหนดการใช้งาน และ นโยบายความเป็นส่วนตัว ของสเวนเซ่นส์ ${type}`}</Form.Check.Label>
          </Form.Check>
          <Form.Check bg="danger" type={type} id={`check-api-${type}`}>
            <Form.Check.Input type={type} isValid />
            
            <Form.Check.Label > {`ฉันยินยอมรับข้อมูลข่าวสาร กิจกรรมส่งเสริมการขายต่างๆ จากสเวนเซ่นส์และบริษัทในเครือ โดยเราจะเก็บข้อมูลของท่านไว้เป็นความลับ สามารถศึกษาเงื่อนไขหรือข้อตกลง นโยบายความเป็นส่วนตัว เพิ่มเติมได้ที่เว็บไซต์ของบริษัทฯ ${type}`}</Form.Check.Label>
          </Form.Check>
        </MDBCol>
        
      ))}
    </Form>
  );
}

export default CheckApiExample;