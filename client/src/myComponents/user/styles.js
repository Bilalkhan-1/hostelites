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
    container: {
      display: "flex",
      height: "100vh",
      overflow: "scroll",
      paddingBottom: 110,
    },
    icon: {
      color: "#fff !important",
    },
    logo: {
      marginRight: 16,
      marginLeft: 0,
    },
    rightSideDrawer: {
      backgroundColor: "#dedcd7",
    },
    cardContainer: {
      margin: "150px 10px",
    },
    paperstyle: {
      padding: 20,
      margin: "20px auto",
      backgroundColor: "white",
      borderRadius: 6,
      marginBottom: 5,
    },
    compContainer: {
      padding: 20,
      margin: "20px auto",
      backgroundColor: "white",
      borderRadius: 6,
      marginBottom: 5,
      height: 230,
    },
    imageForComplaint: {
      height: 50,
      width: 50,
      margin: "3px 10px",
      borderRadius: 2,
    },
    template: {
      width: "130vh",
    },
  })
);
export default styles;
