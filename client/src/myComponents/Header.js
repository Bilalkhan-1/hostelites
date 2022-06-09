import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import "./css/styles.css";
import { useNavigate } from "react-router-dom";
import { Margin } from "@mui/icons-material";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <div className="container-fluid">
          <Navbar.Brand
            href="/"
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              alt=""
              src={require("./resources/sign.png")}
              width="30"
              height="30"
              className="d-inline-block align-top mx-3"
            />
            Hostelites
          </Navbar.Brand>
        </div>
      </Navbar>
    </>
  );
};
