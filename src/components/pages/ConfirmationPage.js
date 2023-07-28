import React from "react";
import "./ConfirmationPage.css";
import { useLocation } from "react-router-dom";

const ConfirmationPage = () => {
  const location = useLocation();
  const props = location.state;
  console.log("FormData in confirmation :", props);
  return (
    <>
      <h5 className="confirm-header">Reservation Done!!!</h5>
      <body className="confirm-body">Date : {props.date}</body>
      <body className="confirm-body">Time : {props.time}pm</body>
      <body className="confirm-body">Guests : {props.guests} guests</body>
      <body className="confirm-body">Occasion : {props.occasion}</body>
      <h4 className="subtext">Looking forward to serving you!!!</h4>
    </>
  );
};

export default ConfirmationPage;
