import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import "../css/styles.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="dark" variant="dark">
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
              className="d-inline-block align-top mx-3"
            />
            Hostelites
          </Navbar.Brand>
          <Button
            className="btn btn-dark"
            onClick={() => {
              navigate("/");
            }}
          >
            LOG OUT
          </Button>
        </div>
      </Navbar>
    </>
  );
};
