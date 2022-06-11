import React from "react";
import { Grid } from "@material-ui/core";
import { Footer } from "../Footer";
import TemporaryDrawer from "./TemporaryDrawer";

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
    <>
      <TemporaryDrawer />
      <Grid container item xs={12} className={classes.container}>
        <Grid container xs={12}>
          {rooms.map((room) => (
            <RoomTemplate
              title={room.title}
              price={room.price}
              avalability={room.avalability}
            />
          ))}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};
export default Rooms;
