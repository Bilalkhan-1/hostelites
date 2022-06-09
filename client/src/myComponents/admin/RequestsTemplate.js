import React from "react";
import {
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
} from "@material-ui/core";

import useStyles from "./styles";

export const RequestsTemplate = ({ content }) => {
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
            <Typography variant="h3"> {content.name}</Typography>
          </Grid>
          <Grid item container xs={8} justifyContent="space-between">
            <List className={classes.facilities}>
              <ListItem>
                <ListItemText primary={`Room No. ${content.roomNo}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Bed No. ${content.bedNo}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={content.institute} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Phn No. ${content.phone}`} />
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            container
            xs={2}
            justifyContent="flex-end"
            alignItems="flex-end"
            className={classes.avalabilityGrid}
          >
            <Button
              id="Resolved"
              type="submit"
              variant="contained"
              className={classes.accept}
            >
              Accept
            </Button>
          </Grid>
          <Grid
            item
            container
            xs={2}
            justifyContent="flex-end"
            alignItems="flex-end"
            className={classes.avalabilityGrid}
          >
            <Button
              id="Resolved"
              type="submit"
              variant="contained"
              className={classes.reject}
            >
              Reject
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default RequestsTemplate;
