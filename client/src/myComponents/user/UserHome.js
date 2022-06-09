import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { UserModelHandler } from "./UserModelHandler";
import {UserHeader} from "./UserHeader"
import {Complaints} from "./Complaints"

export const UserHome = () => {
  return (
    <>
      <Header />
      <UserModelHandler />
      <Footer />
    </>
  );
};
export default UserHome;
