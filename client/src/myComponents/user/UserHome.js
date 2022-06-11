import React from "react";
import { Header } from "../Header";
import { UserModelHandler } from "./UserModelHandler";
import { UserHeader } from "./UserHeader";
import { Complaints } from "./userComplaints";
import { Invoice } from "./Invoice";
import { Book } from "./Book";
import { BookPage } from "./BookPage";
import { Grid } from "@material-ui/core";
import { Footer } from "../Footer";
import TemporaryDrawer from "./TemporaryDrawer";
import useStyles from "./styles";

export const UserHome = () => {
  const classes = useStyles();

  return (
    <>
      {/* <Header /> */}
      <TemporaryDrawer />
      <Grid
        container
        justifyContent="center"
        item
        xs={12}
        className={classes.container}
      >
        {/* <Complaints /> */}
        {/* <Invoice /> */}
        <BookPage />
        {/* <UserModelHandler /> */}
      </Grid>
      <Footer />
    </>
  );
};
export default UserHome;
