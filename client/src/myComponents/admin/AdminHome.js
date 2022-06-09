import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { ModalHandler } from "./ModalHandler";
import TemporaryDrawer from "../TemporaryDrawer";
import useStyles from "./styles";
export const AdminHome = () => {
  const classes = useStyles();
  return (
    <>
      {/* <Header /> */}
      <TemporaryDrawer />
      <ModalHandler />
      <Footer />
    </>
  );
};
export default AdminHome;
