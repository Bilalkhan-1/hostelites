import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Formik, Form, validateYupSchema } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { TextFieldCom } from "./TextFieldCom";
import axios from "axios";

import {
  Paper,
  Avatar,
  Grid,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Signupform() {
  const signupBtnStyle = {
    backgroundColor: "black",
    color: "white",
  };
  const paperstyle = {
    padding: 20,
    height: "100%",
    width: 450,
    margin: "20px auto",
  };
  const avatarStyle = {
    backgroundColor: "black",
  };
  const linkstyle = {};
  const navigate = useNavigate();
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "must be 15 characters or less")
      .required("required"),
    email: Yup.string().email("email is invalid").required("required"),
    lastName: Yup.string()
      .max(15, "must be 15 characters or less")
      .required("required"),
    password: Yup.string()
      .min(6, "Password must be atleast 6 characters")
      .required("password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "password must match")
      .required("confirm password is required"),
  });
  function signinPage() {
    navigate("/signin");
  }

  return (
    <div className="my-5" style={{ width: 400, margin: "auto" }}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          var obj = {
            firstname: values.firstName,
            lastname: values.lastName,
            emailString: values.email,
            passwordString: values.password,
          };
          axios({
            url: "http://localhost:5000/saveUser",
            method: "POST",
            data: obj,
          })
            .then((response) => {
              console.log("Data has been sent to the server");
              alert(`Sign up successful`);
            })
            .catch(() => {
              console.log("Unable to save user");
            });
        }}
      >
        {(formik) => (
          <Paper style={paperstyle}>
            <div className="container">
              <Grid align="center">
                <Avatar style={avatarStyle}>
                  <LockOutlinedIcon />
                </Avatar>
                <h4 className="my-2">SIGN UP</h4>
              </Grid>

              <Form>
                <div className="mb-3">
                  <TextFieldCom
                    label="First Name"
                    name="firstName"
                    type="text"
                  />
                </div>
                <div className="mb-3">
                  <TextFieldCom label="Last Name" name="lastName" type="text" />
                </div>
                <div className="mb-3">
                  <TextFieldCom label="Email" name="email" type="email" />
                </div>
                <div className="mb-3">
                  <TextFieldCom
                    label="Password"
                    name="password"
                    type="password"
                  />
                </div>
                <div className="mb-3">
                  <TextFieldCom
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                  />
                </div>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={signupBtnStyle}
                  className="my-3"
                >
                  Sign up
                </Button>
                <Typography>
                  <Link onClick={signinPage}>Sign in</Link> instead?
                </Typography>
              </Form>
            </div>
          </Paper>
        )}
      </Formik>
    </div>
  );
}

export default Signupform;
