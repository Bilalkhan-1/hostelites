import "./myComponents/css/App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./myComponents/Home";
import Signin from "./myComponents/pages/Signin";
import { Signup } from "./myComponents/pages/Signup";
import { AdminHome } from "./myComponents/admin/AdminHome";
import { UserHome } from "./myComponents/user/UserHome";
import { Book } from "./myComponents/user/Book";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TemporaryDrawer from "./myComponents/TemporaryDrawer";
import { Rooms } from "./myComponents/admin/Rooms";
import { Requests } from "./myComponents/admin/Requests";
import { Students } from "./myComponents/admin/Students";
import { Complaints } from "./myComponents/admin/Complaints";
import { UserComplaints } from "./myComponents/user/userComplaints";
import { Invoice } from "./myComponents/user/Invoice";
import { BookPage } from "./myComponents/user/BookPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/drawer" element={<TemporaryDrawer />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminHome" element={<AdminHome />} />
        <Route path="/userHome" element={<UserHome />} />
        <Route path="/bookform" element={<Book />} />

        <Route path="/rooms" element={<Rooms />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/students" element={<Students />} />
        <Route path="/complaints" element={<Complaints />} />

        <Route path="/userComplaints" element={<UserComplaints />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/bookPage" element={<BookPage />} />
      </Routes>
    </Router>
    // <BookingForm/>
  );
}

export default App;
