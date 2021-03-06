import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ReceiptIcon from "@mui/icons-material/Receipt";
import FeedbackIcon from "@mui/icons-material/Feedback";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import classNames from "classnames";
import useStyles from "./styles";
import { useContext } from "react";
import { LoggedUser } from "../../App.js";

export default function TemporaryDrawer() {
  const { loggedUser, setLoggedUser } = useContext(LoggedUser);

  const classes = useStyles();
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  function openComplaints() {
    navigate("/userComplaints");
  }
  function openInvoice() {
    navigate("/invoice");
  }
  function openBookPage() {
    navigate("/bookPage");
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={openComplaints}>
            <ListItemIcon>
              <FeedbackIcon />
            </ListItemIcon>
            <ListItemText primary={"Complaint Form"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={openInvoice}>
            <ListItemIcon>
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary={"Invoice"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={openBookPage}>
            <ListItemIcon>
              <SingleBedIcon />
            </ListItemIcon>
            <ListItemText primary={"Book Room"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/activeComplaints");
            }}
          >
            <ListItemIcon>
              <FeedbackIcon />
            </ListItemIcon>
            <ListItemText primary={" My Complaints"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className={classes.rightSideDrawer}>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Navbar bg="dark" variant="dark">
            <Button onClick={toggleDrawer(anchor, true)}>
              <ArrowBackIosNewIcon className={classes.icon} fontSize="medium" />
            </Button>
            <div className="container-fluid">
              <Navbar.Brand
                href="/userHome"
                onClick={() => {
                  navigate("/userHome");
                }}
              >
                <img
                  alt=""
                  src={require("../resources/sign.png")}
                  width="30"
                  height="30"
                  className={classNames(
                    "d-inline-block",
                    "align-top",
                    classes.logo
                  )}
                />
                Hostelites
              </Navbar.Brand>
              <Button
                className={classes.icon}
                onClick={() => {
                  setLoggedUser([]);
                  navigate("/");
                }}
              >
                LOG OUT
              </Button>
            </div>
          </Navbar>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
