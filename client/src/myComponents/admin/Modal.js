import { Grid } from "@material-ui/core";
import React from "react";

import useStyles from "./styles";

export const Modal = ({ primaryCol, secondaryCol }) => {
  const classes = useStyles();
  return (
    <Grid container item xs={12} style={{ height: "inherit" }}>
      <Grid item xs={2} className={classes.colPrimary}>
        <Grid item xs={false} className={classes.menu}>
          {primaryCol}
        </Grid>
      </Grid>
      <Grid item xs={10} className={classes.colSecondary}>
        <Grid item xs={11} className={classes.content}>
          {secondaryCol}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Modal;
