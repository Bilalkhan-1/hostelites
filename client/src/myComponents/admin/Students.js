import React from "react";
import { Grid } from "@material-ui/core";
import { Footer } from "../Footer";
import TemporaryDrawer from "./TemporaryDrawer";
import useStyles from "./styles";
import { useState } from "react";
import { useEffect } from "react";

import { StudentTemplate } from "./StudentTemplate";
import axios from "axios";
// const students = [
//   {
//     id: 1,
//     name: "Sidra Rasool",
//     roomNo: "1",
//     bedNo: "1",
//     institute: "PUCIT",
//     phone: "0300-2739234",
//   },
//   {
//     id: 2,
//     name: "Mahnoor Sajid",
//     roomNo: "2",
//     bedNo: "1",
//     institute: "PUCIT",
//     phone: "0300-2739234",
//   },
//   {
//     id: 3,
//     name: "Umar Khan",
//     roomNo: "2",
//     bedNo: "1",
//     institute: "PUCIT",
//     phone: "0300-2739234",
//   },
//   {
//     id: 4,
//     name: "Bilal Habib",
//     roomNo: "2",
//     bedNo: "1",
//     institute: "PUCIT",
//     phone: "0300-2739234",
//   },
//   {
//     id: 5,
//     name: "Mehral Qamar",
//     roomNo: "5",
//     bedNo: "1",
//     institute: "PUCIT",
//     phone: "0300-2739234",
//   },
// ];
export const Students = () => {
  const [studentsData, setStudentsData] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:5000/getUsers",
      method: "GET",
    })
      .then((response) => {
        console.log("Data has been retreived the server");
        const arr = Array.from(response.data);
        setStudentsData(arr);
        console.log("students are ", studentsData);
      })
      .catch(() => {
        console.log("Internal server error");
      });
  }, []);
  const classes = useStyles();
  return (
    <>
      <TemporaryDrawer />
      {console.log("asdasd", studentsData)}
      <Grid container item xs={12} className={classes.container}>
        <Grid container item xs={12}>
          {studentsData.map((student) => (
            <StudentTemplate content={student} />
          ))}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};
export default Students;
