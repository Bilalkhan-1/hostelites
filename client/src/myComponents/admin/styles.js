import { createStyles, makeStyles } from "@material-ui/core/styles";

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
    image: {
      height: "35vh",
      width: "35vh",
      margin: "8px 5px",
      borderRadius: 5,
    },
    imageForComplaint: {
      height: 50,
      width: 50,
      margin: "3px 10px",
      borderRadius: 2,
    },
    titleGrid: {
      padding: 10,
    },
    btnStyle: {
      backgroundColor: "#369e53",
      color: "#FFFFFF",
      padding: "5px 10px",
    },
    avalability: {
      backgroundColor: "#586ee03f",
      color: "#000",
      margin: "3px 0px",
      padding: "2px 3px",
      fontWeight: 400,
      borderRadius: 6,
      "&:hover": {
        backgroundColor: "#586ee05f",
      },
    },
    avalabilityGrid: {
      padding: "0px 40px 40px 0px",
    },
    bookbtn: {
      backgroundColor: "black",
      color: "white",
      "&:hover": {
        color: "black",
        backgroundColor: "grey",
      },
    },
    facilities: {
      color: "#369e53",
    },
    nameStyle: {
      fontWeight: "bold",
    },
    paperstyle: {
      padding: 20,
      margin: "20px auto",
      backgroundColor: "white",
      borderRadius: 6,
      marginBottom: 5,
    },
    accept: {
      backgroundColor: "#369e53",
      color: "#FFFFFF",
      padding: "5px 10px",
    },
    reject: {
      backgroundColor: "#DA615D",
      color: "#FFFFFF",
      padding: "5px 10px",
    },
    template: {
      width: "130vh",
    },
    roomstemplate: {
      width: "150vh",
    },
    container: {
      display: "flex",
      height: "100vh",
      overflow: "scroll",
      paddingBottom: 110,
    },
    icon: {
      color: "#fff",
    },
    logo: {
      marginRight: 16,
      marginLeft: 0,
    },
  })
);
export default styles;
