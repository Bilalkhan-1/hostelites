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
import UserComplaints from "./myComponents/user/userComplaints";
import { Invoice } from "./myComponents/user/Invoice";
import { BookPage } from "./myComponents/user/BookPage";
import AddRoom from "./myComponents/admin/AddRoom";
import { useState } from "react";
import { createContext } from "react";
import UserActiveComplaints from "./myComponents/user/UserActiveComplaints.js";
import ProtectedRoute from "./myComponents/ProtectedRoute";

const LoggedUser = createContext();
const LoggedAdmin = createContext();
function App() {
  const [adminLogin, setAdminLogin] = useState([]);
  const [loggedUser, setLoggedUser] = useState([]);
  let LoggedIn;
  let adminLoggedIn;
  if (loggedUser[0] != null) {
    LoggedIn = true;
  } else {
    LoggedIn = false;
  }
  if (adminLogin[0] != null) {
    adminLoggedIn = true;
  } else {
    adminLoggedIn = false;
  }
  return (
    <LoggedUser.Provider value={{ loggedUser, setLoggedUser }}>
      {console.log("the varriable", adminLoggedIn)}
      {console.log("data from app", loggedUser, adminLogin)}
      <LoggedAdmin.Provider value={{ adminLogin, setAdminLogin }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<ProtectedRoute isLogged={adminLoggedIn} />}>
              <Route path="/adminHome" element={<AdminHome />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/students" element={<Students />} />
              <Route path="/complaints" element={<Complaints />} />
              <Route path="/addRoom" element={<AddRoom />} />
            </Route>
            <Route element={<ProtectedRoute isLogged={LoggedIn} />}>
              <Route path="/userHome" element={<UserHome />} />
              <Route path="/bookPage" element={<BookPage />} />
              <Route path="/bookform" element={<Book />} />
              <Route path="/invoice" element={<Invoice />} />
              <Route path="/userComplaints" element={<UserComplaints />} />
              <Route
                path="/activeComplaints"
                element={<UserActiveComplaints />}
              />
            </Route>
          </Routes>
        </Router>
      </LoggedAdmin.Provider>
    </LoggedUser.Provider>
    // <BookingForm/>
    //  <Route exact path="/drawer" element={<TemporaryDrawer />} />
  );
}

export default App;
export { LoggedUser };
export { LoggedAdmin };
