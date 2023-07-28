import React, { useEffect, useReducer } from "react";
import "./ReserveATable.css";
import { Button } from "../Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import ConfirmationPage from "./ConfirmationPage";

const availableOccasions = [
  "No Occasion",
  "Birthday",
  "Engagement",
  "Anniversary",
  "Baby Shower",
];
const initialAvailableTimes = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];
const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_TIME":
      return state.filter((time) => time !== action.payload);
    case "SET_AVAILABLE_TIMES":
      return action.payload;
    default:
      return state;
  }
};

const BookingForm = (props) => {
  const [availableTimes, dispatch] = useReducer(reducer, initialAvailableTimes);

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });
  const isDisabled = !formData.date && !formData.time && !formData.guests;
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    const selectedTime = e.target.value;
    const selectedDate =
      e.target.name === "date" ? e.target.value : formData.date;

    const filteredTimes = initialAvailableTimes.filter((time) => {
      const isTimeAvailable = !props.reservationData.some(
        (booking) => booking.date === selectedDate && booking.time === time
      );
      return isTimeAvailable;
    });
    setFormData({ ...formData, [e.target.name]: e.target.value });
    dispatch({ type: "REMOVE_TIME", payload: selectedTime });
    console.log("Form Data : ", formData);
    // Dispatch an action to update the availableTimes state
    dispatch({ type: "SET_AVAILABLE_TIMES", payload: filteredTimes });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const validationResult = validate(formData);
    setError(validationResult);
    if (Object.keys(validationResult).length > 0) {
      return;
    }
    setSubmit(true);
    props.onAdd(formData);
    props.setReservationData([...props.reservationData, formData]);

    alert(
      `Reservation Done for ${formData.date} at ${formData.time}PM for ${formData.guests}  guests on the occasion of ${formData.occasion}.
       Looking forward to serving you!!!`
    );

    setFormData({ time: "", date: "", guests: "", occasion: "" });
    setError("");
    navigate("/confirmationpage", { state: formData });
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && submit) {
      console.log(formData);
    }
  }, [error]);
  const validate = () => {
    const error = {};
    if (!formData.date) {
      error.date = "Date is required.";
    }
    if (!formData.time) {
      error.time = "Time is required.";
    }
    if (!formData.guests) {
      error.guests = "Number of guests is required.";
    }
    return error;
  };

  // Setting today's date
  const currentDate = new Date().toISOString().split("T")[0];
  return (
    <>
      <div className="form-wrapper">
        <div className="form">
          <div className="form-data" id="form">
            <div className="form-data">
              <h1>Make a reservation</h1>
              <label htmlFor="res-date">Choose date : </label>
              <input
                type="date"
                name="date"
                id="res-date"
                required
                min={currentDate}
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            {error.date && <p>{error.date}</p>}
            <div className="form-data">
              <label htmlFor="res-time">Choose time : </label>
              <select
                id="res-time "
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
              >
                {availableTimes.map((time) => (
                  <option>{time}</option>
                ))}
              </select>
            </div>
            <p>{error.time}</p>
            <div className="form-data">
              <label htmlFor="guests">Number of guests :</label>
              <input
                type="number"
                name="guests"
                placeholder=""
                min="1"
                max="10"
                required
                id="guests"
                value={formData.guests}
                onChange={handleChange}
              />
            </div>
            <p>{error.guests}</p>
            <div className="form-data">
              <label htmlFor="occasion">Occasion (optional): </label>
              <select
                id="occasion"
                name="occasion"
                placeholder=""
                value={formData.occasion}
                onChange={handleChange}
              >
                {availableOccasions.map((occasion) => (
                  <option>{occasion}</option>
                ))}
              </select>
            </div>

            <div className="form-data">
              {/* <Link to="/confirmationpage"> */}
              <button
                className="btn--primary"
                type="submit"
                disabled={isDisabled}
                onClick={handleClick}
              >
                Make Your Reservation
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const FinalBooking = (props) => {
  return (
    <>
      <ul>
        {props.allBookingDetails.map((d) => {
          return (
            <li key={d.bookingDetails}>
              <span>
                The booking is confirmed for {d.date} at {d.time}pm for
                {d.guests} guests on the occasion of {d.occasion}.
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const ReserveATable = (props) => {
  const [allBookingDetails, updateAllBookingDetails] = useState([]);
  const addBookingDetails = (bookingDetails) => {
    updateAllBookingDetails([...allBookingDetails, bookingDetails]);
  };
  console.log(
    "in Reservation page : Reservation Data coming from NavBar: ",
    props.reservationData
  );
  return (
    <>
      <BookingForm
        reservationData={props.reservationData}
        setReservationData={props.setReservationData}
        onAdd={addBookingDetails}
        allBookingDetails={allBookingDetails}
      />

      {/* <FinalBooking
        allBookingDetails={allBookingDetails}
        props={allBookingDetails}
      /> */}
    </>
  );
};

export default ReserveATable;
