import React from "react";
import { Header } from "./Header";
import { Grid } from "@material-ui/core";
import { Footer } from "../Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { CardActionArea } from "@mui/material";
import useStyles from "./styles";

export const UserHome = () => {
  const classes = useStyles();
  const navigate = useNavigate();

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
        <Card sx={{ maxWidth: 300 }} className={classes.cardContainer}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              width="250"
              image={require("./bookings.jpeg")}
              alt="green iguana"
              onClick={() => {
                navigate("/bookPage");
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Book A Room
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 300 }} className={classes.cardContainer}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              width="250"
              image={require("./invoive.jpeg")}
              alt="green iguana"
              onClick={() => {
                navigate("/invoice");
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Generate Invoice
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 300 }} className={classes.cardContainer}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              width="250"
              image={require("./userComplaints.jpeg")}
              alt="green iguana"
              onClick={() => {
                navigate("/userComplaints");
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Register Complaint
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 300 }} className={classes.cardContainer}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              width="250"
              image={require("./activeComplaint.jpeg")}
              alt="green iguana"
              onClick={() => {
                navigate("/activeComplaints");
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Active Complaints
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Footer />
    </>
  );
};
export default UserHome;
