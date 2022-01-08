import "./styles.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/products";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UsersDetails";
import { Login } from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

        <Route
          path="/users"
          element={
            //  <Users />
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/users/:userid"
          element={
            <PrivateRoute>
              <UserDetails />
            </PrivateRoute>
          }
        ></Route>
        {/* <Route path="/users/:userid" element={<UserDetails />}></Route> */}
        <Route path="/users/admin" element={<div>Admin page</div>}></Route>

        <Route path="/product/:id" element={<Products />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<div>404 page not found</div>}></Route>
      </Routes>
    </div>
  );
}
