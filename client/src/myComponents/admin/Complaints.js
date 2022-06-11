import React from "react";
import { Grid } from "@material-ui/core";
import { Footer } from "../Footer";
import TemporaryDrawer from "./TemporaryDrawer";
import useStyles from "./styles";

import { ComplaintTemplate } from "./ComplaintTemplate";

export const Complaints = () => {
  const classes = useStyles();
  return (
    <>
      <TemporaryDrawer />
      <Grid container item xs={12} className={classes.container}>
        <Grid container item xs={12}>
          <ComplaintTemplate />
          <ComplaintTemplate />
          <ComplaintTemplate />
          <ComplaintTemplate />
          <ComplaintTemplate />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};
export default Complaints;
