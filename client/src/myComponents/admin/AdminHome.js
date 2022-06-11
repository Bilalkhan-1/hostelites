import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Rooms } from "./Rooms";
import { Requests } from "./Requests";
import { ModalHandler } from "./ModalHandler";
import { Students } from "./Students";
import { Complaints } from "./Complaints";
import { Grid } from "@material-ui/core";
import TemporaryDrawer from "./TemporaryDrawer";
import useStyles from "./styles";
export const AdminHome = () => {
  const classes = useStyles();
  return (
    <>
      {/* <Header /> */}
      <TemporaryDrawer />
      <Grid container item xs={12} className={classes.container}>
        {/* <ModalHandler /> */}
        {/* <Rooms /> */}
        {/* <Requests /> */}
        {/* <Students /> */}
        <Complaints />
      </Grid>
      <Footer />
    </>
  );
};
export default AdminHome;
