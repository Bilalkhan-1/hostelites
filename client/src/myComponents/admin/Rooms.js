import React from "react";
import { Grid } from "@material-ui/core";
import { Footer } from "../Footer";
import TemporaryDrawer from "./RoomsDrawer";

import { RoomTemplate } from "./RoomTemplate";
import useStyles from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
const rooms = [
  { title: "Luxury Room", price: "12,000", avalability: "Available" },
  { title: "Economic", price: "18,000", avalability: "Unavailable" },
  { title: "Eco Friendly", price: "19,000", avalability: "Available" },
  { title: "Luxury Room", price: "12,000", avalability: "Available" },
  { title: "Economic", price: "18,000", avalability: "Unavailable" },
  { title: "Eco Friendly", price: "19,000", avalability: "Available" },
];

export const Rooms = () => {
  const [roomData, setRoomData] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:5000/getRooms",
      method: "GET",
    })
      .then((response) => {
        console.log("Data has been retreived the server");
        const arr = Array.from(response.data);
        setRoomData(arr);
        console.log("Rooms are: ", roomData);
      })
      .catch(() => {
        console.log("Internal server error");
      });
  }, []);

  const classes = useStyles();
  return (
    <>
      <TemporaryDrawer />
      <Grid container item xs={12} className={classes.container}>
        <Grid container xs={12}>
          {roomData.map((room) => (
            <RoomTemplate
              name={room.name}
              price={room.price}
              avalability={room.availability}
              noOfBeds={room.noOfBeds}
              parking={room.parking}
              wifi={room.wifi}
              id={room._id}
            />
          ))}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};
export default Rooms;
