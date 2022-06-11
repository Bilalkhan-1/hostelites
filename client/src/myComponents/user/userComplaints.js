import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Typography,
  Link,
} from "@material-ui/core";
import ForumIcon from "@mui/icons-material/Forum";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { SliderMarkLabel } from "@mui/material";
import { Footer } from "../Footer";
import TemporaryDrawer from "./TemporaryDrawer";
import useStyles from "./styles";

export const UserComplaints = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [userName, email, complaint] = useState("");

  const Submit = () => {
    navigate("/userHome");
  };

  const linkstyle = {
    textDecoration: "none",
    cursor: "pointer",
  };

  const submitBtn = {
    backgroundColor: "black",
    color: "white",
  };
  const paperstyle = {
    padding: 20,
    height: "70vh",
    width: "70vh auto",
    margin: "20px",
  };
  const avatarStyle = {
    backgroundColor: "black",
  };
  return (
    <>
      <TemporaryDrawer />
      <Grid
        container
        justifyContent="center"
        item
        xs={12}
        className={classes.container}
      >
        <Grid>
          <Paper elevation={10} style={paperstyle} className="my-5">
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <ForumIcon />
              </Avatar>
              <h4 className="my-2">Complaint Form</h4>
            </Grid>
            <TextField
              id="userName"
              label="Full Name"
              variant="outlined"
              className="my-2"
              fullWidth
              required
              //value={userName}
            />
            <TextField
              id="Email"
              label="Email"
              variant="outlined"
              className="my-2"
              fullWidth
              required
              //value={email}
            />
            <TextField
              id="complaint"
              label="Complaint"
              variant="outlined"
              className="my-2"
              fullWidth
              required
              //value={complaint}
            />
            <Button
              id="Submit"
              type="submit"
              fullWidth
              variant="contained"
              className="my-3"
              style={submitBtn}
              onClick={Submit}
            >
              Submit
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};
