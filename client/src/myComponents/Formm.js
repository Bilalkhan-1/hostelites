import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Formik, Form, validateYupSchema } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
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

function Formm() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:5000/getUsers",
      method: "GET",
    })
      .then((response) => {
        console.log("Data has been retreived the server");
        const arr = Array.from(response.data);
        setData(arr);
        console.log("records are: ", data);
      })
      .catch(() => {
        console.log("Internal server error");
      });
  }, []);

  const signupBtnStyle = {
    backgroundColor: "black",
    color: "white",
  };
  const paperstyle = {
    padding: 20,
    height: "70vh",
    width: 450,
    margin: "20px auto",
  };
  const avatarStyle = {
    backgroundColor: "black",
  };
  const navigate = useNavigate();
  const validate = Yup.object({
    email: Yup.string()
      .email("email is invalid")
      .required("required"),
    password: Yup.string()
      .min(6, "Password must be atleast 6 characters")
      .required("password is required"),
  });

  return (
    <div className="my-5" style={{ width: 400, margin: "auto" }}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          if (
            values.email === "admin@gmail.com" &&
            values.password === "admin123"
          ) {
            navigate("/adminhome");
          } else {
            let ans = data.find((o) => {
              return o.email === values.email, o.password === values.password;
            });

            if (typeof ans !== "undefined") {
              console.log("login successfully!");
              navigate("/userhome");
            } else {
              alert("invalid username or password");
            }
          }
        }}
      >
        {(formik) => (
          <Paper style={paperstyle}>
            <div className="container">
              <Grid align="center">
                <Avatar style={avatarStyle}>
                  <LockOutlinedIcon />
                </Avatar>
                <h4 className="my-2">SIGN IN</h4>
              </Grid>

              <Form>
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

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={signupBtnStyle}
                  className="my-5"
                >
                  Sign In
                </Button>
              </Form>
            </div>
          </Paper>
        )}
      </Formik>
    </div>
  );
}

export default Formm;
