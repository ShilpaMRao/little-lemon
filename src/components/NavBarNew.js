import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Button } from "./Button";
import "./NavBar.css";
import "./Button.css";
import Cards from "./Cards";
import ReserveATable from "./pages/ReserveATable";
import ReserveATable_New from "./pages/ReserveATable_New";
import Home from "./pages/Home";
import AboutMarioAdrian from "./pages/AboutMarioAdrian";
import Login from "./pages/Login";

function NavBarNew() {
  const [reservationData, setReservationData] = useState([]);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  console.log("In NavBar :", reservationData);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="little lemon logo yellow.jpg" alt="logo" width="200px" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-links" onClick={closeMobileMenu}>
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/reserveatable"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Reservations
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/orderonline"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Order Online
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                Login
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline">Reserve a table</Button>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMarioAdrian />} />
        <Route path="/menu" element={<Cards />} />
        <Route path="/orderonline" element={<Cards />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/reserveatable"
          element={
            <ReserveATable
              reservationData={reservationData}
              setReservationData={setReservationData}
            />
          }
        />
      </Routes>
    </>
  );
}

export default NavBarNew;
