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
export const AdminHome = () => {
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
              image={require("./rooms.jpeg")}
              alt="green iguana"
              onClick={() => {
                navigate("/rooms");
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Rooms
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
              image={require("./requests.webp")}
              alt="green iguana"
              onClick={() => {
                navigate("/requests");
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Requests
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
              image={require("./students.jpeg")}
              alt="green iguana"
              onClick={() => {
                navigate("/students");
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Students
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
              image={require("./complaints.jpeg")}
              alt="green iguana"
              onClick={() => {
                navigate("/complaints");
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Complaints
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Footer />
    </>
  );
};
export default AdminHome;
