import React from "react";
import { Grid } from "@material-ui/core";

import { RequestsTemplate } from "./RequestsTemplate";

const requests = [
  {
    id: 1,
    name: "Sidra Rasool",
    roomNo: "1",
    bedNo: "1",
    institute: "PUCIT",
    phone: "0300-2739234",
  },
  {
    id: 2,
    name: "Mahnoor Sajid",
    roomNo: "2",
    bedNo: "1",
    institute: "PUCIT",
    phone: "0300-2739234",
  },
  {
    id: 3,
    name: "Umar Khan",
    roomNo: "2",
    bedNo: "1",
    institute: "PUCIT",
    phone: "0300-2739234",
  },
  {
    id: 4,
    name: "Bilal Habib",
    roomNo: "2",
    bedNo: "1",
    institute: "PUCIT",
    phone: "0300-2739234",
  },
  {
    id: 5,
    name: "Mehral Qamar",
    roomNo: "5",
    bedNo: "1",
    institute: "PUCIT",
    phone: "0300-2739234",
  },
];

export const Requests = () => {
  return (
    <Grid container item xs={12}>
      {requests.map((request) => (
        <RequestsTemplate content={request} />
      ))}
    </Grid>
  );
};
export default Requests;
