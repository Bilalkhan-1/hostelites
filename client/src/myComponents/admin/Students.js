import React from "react";
import { Grid } from "@material-ui/core";

import { StudentTemplate } from "./StudentTemplate";
const students = [
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
export const Students = () => {
  return (
    <Grid container item xs={12}>
      {students.map((student) => (
        <StudentTemplate content={student} />
      ))}
    </Grid>
  );
};
export default Students;
