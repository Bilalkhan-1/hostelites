import { Grid, MenuItem, Typography } from "@material-ui/core";
import { Formm } from "../Formm";
import { Signupform } from "../Signupform";
import { UserComplaints } from "./userComplaints";
import { Invoice } from "./Invoice";
import { BookPage } from "./BookPage";
import React, { useState } from "react";

import useStyles from "./styles";
import { UserModel } from "./UserModel";

export const UserModelHandler = () => {
  const classes = useStyles();

  const [currentTab, setCurrentTab] = useState(0);

  const tab = {
    0: <UserComplaints />,
    1: <Invoice />,
    2: <BookPage />,
  };

  const menuItems = () => {
    return (
      <Grid container>
        <Typography variant="h4" className={classes.workflowTitle}>
          User Home Page
        </Typography>
        <MenuItem
          className={
            currentTab === 0 ? classes.activeMenuItem : classes.menuItem
          }
          onClick={() => setCurrentTab(0)}
        >
          Complaint Form
        </MenuItem>
        <MenuItem
          className={
            currentTab === 1 ? classes.activeMenuItem : classes.menuItem
          }
          onClick={() => setCurrentTab(1)}
        >
          Invoice
        </MenuItem>
        <MenuItem
          className={
            currentTab === 2 ? classes.activeMenuItem : classes.menuItem
          }
          onClick={() => setCurrentTab(2)}
        >
          Book Room
        </MenuItem>
      </Grid>
    );
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <UserModel primaryCol={menuItems()} secondaryCol={tab[currentTab]} />
      </Grid>
    </Grid>
  );
};

export default UserModelHandler;
