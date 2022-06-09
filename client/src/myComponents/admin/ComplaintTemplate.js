import React from "react";
import { Grid, Button, Typography, Paper } from "@material-ui/core";

import "bootstrap/dist/css/bootstrap.min.css";
import useStyles from "./styles";

export const ComplaintTemplate = () => {
  const classes = useStyles();

  return (
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
              {" "}
              MaheenMobeen{" "}
            </Typography>
            <Typography variant="caption"> maheenmobeen@gmail.com </Typography>
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
            {" "}
            Complaint Title
          </Typography>
        </Grid>
        <Grid item container justifyContent="center" xs={12}>
          <Grid xs={8}>
            {" "}
            <Typography variant="body2" className={classes.titleGrid}>
              {" "}
              Complaint Text Complaint Text Complaint Text Complaint Text
              Complaint Text Complaint Text Complaint Text Complaint Text
              Complaint Text Complaint Text Complaint Text Complaint Text
              Complaint Text{" "}
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent="flex-end"
            alignItems="flex-end"
            xs={4}
          >
            <Button
              id="Resolved"
              type="submit"
              variant="contained"
              className={classes.btnStyle}
            >
              Resolved
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default ComplaintTemplate;
