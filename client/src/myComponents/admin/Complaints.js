import React from "react";
import { Grid } from "@material-ui/core";
import { Footer } from "../Footer";
import TemporaryDrawer from "./TemporaryDrawer";
import useStyles from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import { ComplaintTemplate } from "./ComplaintTemplate";
import axios from "axios";

export const Complaints = () => {
  const [complain, setComplain] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:5000/getComplains",
      method: "GET",
    })
      .then((response) => {
        console.log("Data has been retreived the server");
        const arr = Array.from(response.data);
        setComplain(arr);
        console.log("complains are: ", complain);
      })
      .catch(() => {
        console.log("Internal server error");
      });
  }, []);
  const classes = useStyles();
  return (
    <>
      <TemporaryDrawer />
      {console.log("kacnlkanclc", complain)}
      <Grid container item xs={12} className={classes.container}>
        <Grid container item xs={12}>
          {complain.map((complain) => (
            <ComplaintTemplate
              name={complain.name}
              email={complain.email}
              complainTitle={complain.complainTitle}
              complainText={complain.complainText}
              id={complain._id}
            />
          ))}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};
export default Complaints;
