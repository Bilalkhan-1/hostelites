import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./css/styles.css";
import { useNavigate } from "react-router-dom";

export const Body = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="jumbotron text-white jumbotron-image shadow">
        <div className="container imagetext">
          <h1 className="mb-4">HOSTELITES</h1>
          <h6 className="mb-0">
            {" "}
            Looking to avoid the hassle of multiple visits
          </h6>
          <h6 className="mb-4">
            just to get yourself a hostel room? We've got you covered.{" "}
          </h6>
          <Button
            className="btn btn-dark"
            onClick={() => {
              navigate("/signup");
            }}
          >
            SIGN UP
          </Button>
          <Button
            className="btn  mx-3 btn-dark"
            onClick={() => {
              navigate("signin");
            }}
          >
            SIGN IN
          </Button>
        </div>
      </div>
    </>
  );
};
