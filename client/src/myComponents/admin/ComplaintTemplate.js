import React from "react";
import { Grid, Button, Typography, Paper } from "@material-ui/core";

import "bootstrap/dist/css/bootstrap.min.css";
import useStyles from "./styles";

export const ComplaintTemplate = ({
  name,
  email,
  complainTitle,
  complainText,
}) => {
  const classes = useStyles();

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
    </Grid>
  );
};
export default ComplaintTemplate;
