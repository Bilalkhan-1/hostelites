import React from "react";
import { Grid, Button, Typography, Paper } from "@material-ui/core";

import "bootstrap/dist/css/bootstrap.min.css";
import useStyles from "../admin/styles";
import axios from "axios";
import { useNavigate } from "react-router";

export const UserComplaintTemplate = ({
  name,
  email,
  complainTitle,
  complainText,
  id,
}) => {
  const navigate = useNavigate();
  const classes = useStyles();
  function resolveComplain(e) {
    console.log("button is: ", e.target.id);
    let obj = {
      id: e.target.id,
    };
    axios
      .delete("http://localhost:5000/deleteComplain", {
        data: obj,
      })
      .then(function (response) {
        alert("Your complain has been deleted");
        navigate("/userHome");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Grid container item xs={12} style={{ height: "inherit" }}>
      <Paper elevation={10} className={classes.paperstyle}>
        <Grid container xs={12} className={classes.template}>
          <Grid item container xs={12}>
            <img
              alt=""
              src={require("./room.jpeg")}
              className={classes.imageForComplaint}
            />
            <Grid item container xs={10} direction="column">
              <Typography variant="body1" className={classes.nameStyle}>
                {name}
              </Typography>
              <Typography variant="caption">{email}</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent="space-between"
            className={classes.titleGrid}
          >
            <Typography variant="h5" className={classes.nameStyle}>
              {complainTitle}
            </Typography>
          </Grid>
          <Grid item container justifyContent="center" xs={12}>
            <Grid xs={8}>
              {" "}
              <Typography variant="body2" className={classes.titleGrid}>
                {complainText}
              </Typography>
            </Grid>
            <Grid
              item
              container
              justifyContent="flex-end"
              alignItems="flex-end"
              xs={4}
            >
              <button
                id={id}
                className="btn btn-danger"
                onClick={resolveComplain}
              >
                Delete
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default UserComplaintTemplate;
