import React, { useState } from "react";
import "./BookingDetails.css";
import { useScrollTrigger } from "@material-ui/core";

const formatDateToDDMMYYYY = (dateString) => {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
const BookingDetails = (props) => {
  console.log("in Bookings page : ", props.reservationData);
  return (
    <>
      <div className="bookings-header">
        <h1>Booking Details</h1>
      </div>
      <div className="bookings-table">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {props.reservationData.map((reservation, index) => (
              <tr key={index}>
                <td>{reservation.date}</td>
                <td>{reservation.time}pm</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookingDetails;
