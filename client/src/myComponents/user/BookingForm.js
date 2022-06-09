import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form,Button,Row,Col, Container } from "react-bootstrap";
import "./styles.css";
import { dark, light } from "@material-ui/core/styles/createPalette";
import { shadows } from "@mui/system";
import {Paper} from "@material-ui/core"

export const BookingForm = () => {
    const linkstyle = {
        textDecoration: "none",
        cursor: "pointer",
      };
    
      const signinBtnStyle = {
        backgroundColor: "black",
        color: "white",
        width:"200",
           
      };
      const paperstyle = {
        padding: 20,
        height: "110vh",
        width: 500,
        margin: "50px auto",
        backgroundColor:"white",
        align:"center",    
      };
      const avatarStyle = {
        backgroundColor: "black",
      };
    return (
     <Paper elevation={10} style={paperstyle}>
       <Row>
           <Form.Group as={Col} ><img
      src='https://cdn-icons-png.flaticon.com/512/562/562674.png'
      className='img-fluid shadow-2-strong'
      alt=''
      style={{ maxWidth: '5rem'}}
    />
    </Form.Group>
    <Form.Group as={Col} >
         <h4><strong>Book Room</strong></h4>
         </Form.Group>
    </Row> 
        <Form  >
  <Row className="mb-3">
  <Form.Group as={Col} controlId="formGriduser" >
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="Enter your username" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPhone">
      <Form.Label>Contact Number</Form.Label>
      <Form.Control type="number" placeholder="" />
    </Form.Group>

    
  </Row>

  <Form.Group className="mb-3" controlId="formGridemail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter valid email" />
  </Form.Group>

<Row>
    <Form.Group controlId="dob">
                            <Form.Label> Booking From</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
                        <Form.Group controlId="dob">
                            <Form.Label> Booking To</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
</Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Room Number</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Payment</Form.Label>
      <Form.Select defaultValue="Choose">
      <option>Choose</option>
        <option>Bank Transfer</option>
        <option>Jazzcash</option>
        <option>Easypaisa</option>


      </Form.Select>
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
      <label>Service(s) you want to avail</label>
    <Form.Check type="checkbox" label="Laundry Service" />
    <Form.Check type="checkbox" label="Mess Service" />
    <Form.Check type="checkbox" label="Landline Service" />

  </Form.Group>
  <Form.Group>
  <label className="mx-3">Upload the screenshoot of Payment </label>
      <input className="d-none" type="file" />
      <button className="btn btn-outline-primay">Upload</button>
      </Form.Group>
  <Button variant="primary" type="submit" style={signinBtnStyle }>
    Submit
  </Button>
</Form>
</Paper>
      );
    };
    export default BookingForm;
  
    