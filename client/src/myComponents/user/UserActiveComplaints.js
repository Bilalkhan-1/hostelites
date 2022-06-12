import React from "react";
import { Grid } from "@material-ui/core";
import { Footer } from "../Footer";
import useStyles from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import { UserComplaintTemplate } from "./UserComplaintTemplate";
import axios from "axios";
import { Header } from "./Header";
import { useContext } from "react";
import { LoggedUser } from "../../App.js";

export const Complaints = () => {
  const { loggedUser, setLoggedUser } = useContext(LoggedUser);

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
      })
      .catch(() => {
        console.log("Internal server error");
      });
  }, []);
  // let narr = complain.map((item) => {
  //   console.log(item.email, loggedUser[0].email);
  //   if (item.email == loggedUser[0].email) {
  //     console.log("hai");
  //     return item;
  //   } else {
  //     console.log("nai hai");
  //   }
  // });
  // console.log("naaarrrr: ", narr);
  const classes = useStyles();
  return (
    <>
      <Header />
      {console.log("kacnlkanclc", loggedUser)}
      <Grid container item xs={12} className={classes.container}>
        <Grid container item xs={12}>
          {complain.map((comp) => {
            if (comp.email === loggedUser[0].email) {
              return (
                <UserComplaintTemplate
                  name={comp.name}
                  email={comp.email}
                  complainTitle={comp.complainTitle}
                  complainText={comp.complainText}
                  id={comp._id}
                />
              );
            }
          })}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};
export default Complaints;
