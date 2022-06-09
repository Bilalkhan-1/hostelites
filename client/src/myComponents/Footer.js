import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Footer = () => {
  const stylez = {
    backgroundColor: "#343a40",
    position: "absolute",
    bottom: -70,
    left: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  };
  return (
    <div className="card text-center bg-dark text-white" style={stylez}>
      <div className="card-body">
        <p className="my-0">contact number: 0332-8927300</p>
        <p className="my-0">Address: PUCIT new campus, West canal bank road</p>
        <p className="my-0">&copy; copyright Hostelites</p>
      </div>
    </div>
  );
};
