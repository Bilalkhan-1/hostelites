import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
} from "@material-ui/core";

import useStyles from "./styles";

export const StudentTemplate = ({ content }) => {
  const classes = useStyles();

  return (
    <Paper elevation={10} className={classes.paperstyle}>
      <Grid item container xs={12} className={classes.template}>
        <Grid item xs={3}>
          <img
            alt=""
            src={require("./womanProfile1.jpg")}
            className={classes.image}
          />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item container xs={8}>
          <Grid
            item
            container
            xs={12}
            justifyContent="space-between"
            className={classes.titleGrid}
          >
            <Typography variant="h3">
              {`${content.firstname} ${content.lastname}`}
            </Typography>
          </Grid>
          <Grid item container xs={12} justifyContent="space-between">
            <List className={classes.facilities}>
              <ListItem>
                <ListItemText primary={`Email: ${content.email}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={"PUCIT"} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Phn No. 0313-4046179`} />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default StudentTemplate;
