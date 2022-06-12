import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Formik, Form, validateYupSchema } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { TextFieldCom } from "../TextFieldCom";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup } from "react-bootstrap";
import { FormControlLabel } from "@mui/material";
import { Footer } from "../Footer";

import {
  Paper,
  Avatar,
  Grid,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TemporaryDrawer from "./TemporaryDrawer";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function AddRoom() {
  const [wifi, setWifi] = useState(true);
  const [parking, setParking] = useState(true);
  const [availability, setAvailability] = useState(true);

  const signupBtnStyle = {
    backgroundColor: "black",
    color: "white",
  };
  const paperstyle = {
    padding: 20,
    height: "100%",
    width: 600,
    margin: "20px auto",
  };
  const avatarStyle = {
    backgroundColor: "black",
  };
  const linkstyle = {};
  const navigate = useNavigate();

  function signinPage() {
    navigate("/signin");
  }

  return (
    <>
      <TemporaryDrawer />
      <Grid justifyContent="center">
        <Typography variant="h4" className="text-center my-5">
          Add new Room
        </Typography>
        <Typography variant="h5" className="text-center my-5">
          Enter the Details of the Room and mark as available for it to show
        </Typography>
        <Formik
          initialValues={{
            type: "",
            price: "",
            noOfBeds: "",
          }}
          onSubmit={(values) => {
            var obj = {
              name: values.type,
              price: values.price,
              noOfBeds: values.noOfBeds,
              wifi: wifi,
              parking: parking,
              availability: availability,
            };
            axios({
              url: "http://localhost:5000/addRoom",
              method: "POST",
              data: obj,
            })
              .then((response) => {
                console.log("Data has been sent to the server");
                alert(`Room successfully added`);
                navigate("/rooms");
              })
              .catch(() => {
                console.log("Unable to save Room");
              });
          }}
        >
          {(formik) => (
            <Paper style={paperstyle}>
              <div className="container">
                <Grid align="center">
                  <h4 className="my-2">Add Room</h4>
                </Grid>

                <Form>
                  <div className="mb-3">
                    <TextFieldCom label="Type" name="type" type="text" />
                  </div>
                  <div className="mb-3">
                    <TextFieldCom label="Price" name="price" type="text" />
                  </div>

                  <div className="mb-3">
                    <TextFieldCom
                      label="No of Beds"
                      name="noOfBeds"
                      type="text"
                    />
                  </div>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Wifi"
                      onChange={() => setWifi(!wifi)}
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Parking"
                      onChange={() => setParking(!parking)}
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Availability"
                      onChange={() => setAvailability(!availability)}
                    />
                  </FormGroup>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    style={signupBtnStyle}
                    className="my-3"
                  >
                    Add Room
                  </Button>
                </Form>
              </div>
            </Paper>
          )}
        </Formik>
      </Grid>
      <Footer />
    </>
  );
}

export default AddRoom;
