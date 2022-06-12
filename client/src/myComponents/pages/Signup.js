import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import Signupform from "../Signupform";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
export const Signup = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Grid
        item
        container
        xs={12}
        justifyContent="center"
        alignItems="center"
        className={classes.container}
      >
        <Signupform />
      </Grid>
      <Footer />
    </>
  );
};
export default Signup;
