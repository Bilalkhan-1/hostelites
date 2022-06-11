import React from "react";
import { Grid } from "@material-ui/core";

import { RoomTemplate } from "./RoomTemplate";
import useStyles from "./styles";
const rooms = [
  { title: "Luxury Room", price: "12,000", avalability: "Available" },
  { title: "Economic", price: "18,000", avalability: "Unavailable" },
  { title: "Eco Friendly", price: "19,000", avalability: "Available" },
  { title: "Luxury Room", price: "12,000", avalability: "Available" },
  { title: "Economic", price: "18,000", avalability: "Unavailable" },
  { title: "Eco Friendly", price: "19,000", avalability: "Available" },
];

export const Rooms = () => {
  const classes = useStyles();
  return (
    <Grid container xs={12}>
      {rooms.map((room) => (
        <RoomTemplate
          title={room.title}
          price={room.price}
          avalability={room.avalability}
        />
      ))}
    </Grid>
  );
};
export default Rooms;
