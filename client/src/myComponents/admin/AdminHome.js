import React from "react";
import { Header } from "../Header";
import { Rooms } from "./Rooms";
import { Requests } from "./Requests";
import { Students } from "./Students";
import { Complaints } from "./Complaints";
import { Grid } from "@material-ui/core";
import { ModalHandler } from "./ModalHandler";
import { Footer } from "../Footer";
import TemporaryDrawer from "./TemporaryDrawer";
import useStyles from "./styles";
export const AdminHome = () => {
  const classes = useStyles();
  return (
    <>
      {/* <Header /> */}
      {/* <TemporaryDrawer /> */}
      <Grid container item xs={12} className={classes.container}>
        {/* <ModalHandler /> */}
        <Rooms />
        {/* <Requests /> */}
        {/* <Students /> */}
        {/* <Complaints /> */}
      </Grid>
      {/* <Footer /> */}
    </>
  );
};
export default AdminHome;
