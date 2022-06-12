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

function UserComplaints() {
  const [resolved, setResolved] = useState(false);

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
        <Formik
          initialValues={{
            complainTitle: "",
            complainText: "",
          }}
          onSubmit={(values) => {
            var obj = {
              name: "Bilal",
              email: "bilal@gmail.com",
              complainTitle: values.complainTitle,
              complainText: values.complainText,
              resolved: resolved,
            };
            axios({
              url: "http://localhost:5000/addComplain",
              method: "POST",
              data: obj,
            })
              .then((response) => {
                console.log("Data has been sent to the server");
                alert(`Complain registered successfully`);
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
                  <h4 className="my-2">Complain Form</h4>
                </Grid>

                <Form>
                  <div className="mb-3">
                    <TextFieldCom
                      label="Complain Title"
                      name="complainTitle"
                      type="text"
                    />
                  </div>
                  <div className="mb-3">
                    <TextFieldCom
                      label="Complain"
                      name="complainText"
                      type="text"
                      style={{ height: "300px" }}
                    />
                  </div>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    style={signupBtnStyle}
                    className="my-3"
                  >
                    Register
                  </Button>
                </Form>
              </div>
            </Paper>
          )}
        </Formik>
      </Grid>
    </>
  );
}

export default UserComplaints;
