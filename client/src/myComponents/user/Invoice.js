import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Typography,
  Link,
} from "@material-ui/core";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { useNavigate } from "react-router-dom";

export const Invoice = () => {
  const navigate = useNavigate();

  const [userName, email, complaint] = useState("");

  const Submit = () => {
    window.print();
  };

  const linkstyle = {
    textDecoration: "none",
    cursor: "pointer",
  };

  const submitBtn = {
    backgroundColor: "black",
    color: "white",
  };
  const paperstyle = {
    padding: 20,
    height: "90%",
    width: "70vh",
    margin: "20px",
  };
  const avatarStyle = {
    backgroundColor: "black",
  };

  return (
    <Paper elevation={10} style={paperstyle} className="my-5">
      <Grid align="center">
        <Avatar style={avatarStyle}>
          <ReceiptIcon />
        </Avatar>
        <h4 className="my-2">Inovice</h4>
      </Grid>
      <div>
        <table class="print-receipt">
          <tr>
            <th>Room No.</th>
            <th>Name</th>
            <th>Bill</th>
          </tr>
          <tr>
            <td>G-12 </td>
            <td>Hostelite User </td>
            <td>10,000 Rupees</td>
          </tr>
        </table>
      </div>
      <Button
        id="print"
        type="submit"
        fullWidth
        variant="contained"
        className="hide-on-print my-5"
        style={submitBtn}
        onClick={Submit}
      >
        Print Invoice
      </Button>
    </Paper>
  );
};
