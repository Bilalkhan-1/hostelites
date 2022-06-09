import { createStyles, makeStyles } from "@material-ui/core/styles";
import React, { Component } from 'react';
import { render } from 'react-dom';
const styles = makeStyles(() =>
  createStyles({
    menuItem: {
      fontWeight: 400,
      borderRadius: 6,
      margin: "3px 0px",
      color: "#615f58",
      backgroundColor: "#dedcd7",
      "&:hover": {
        backgroundColor: "#586ee00f",
      },
    },

    activeMenuItem: {
      backgroundColor: "#586ee01f",
      color: "#000",
      margin: "3px 0px",
      fontWeight: 400,
      borderRadius: 6,
      "&:hover": {
        backgroundColor: "#586ee01f",
      },
    },

    workflowTitle: {
      fontWeight: 600,
      fontSize: "0.8rem",
      padding: "5px 15px",
      color: "#969180",
      textTransform: "uppercase",
    },
    colPrimary: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "50px 10px 50px 10px",
      backgroundColor: "#dedcd7",
      maxHeight: "100vh",
      overflow: "auto",
      borderRight: `1px solid #615f58`,
    },

    colSecondary: {
      display: "flex",
      justifyContent: "left",
      padding: "50px 10px 50px 10px",
      backgroundColor: "#dedcd7",
      maxHeight: "100vh",
      overflow: "auto",
    },

    menu: {
      width: "200px",
      fontSize: "0.9rem",
    },

    content: {
      width: "100%",
    },
  })
  
);
export default styles;
