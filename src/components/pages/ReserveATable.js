import React, { useReducer } from "react";
import "./ReserveATable.css";
import { Button } from "../Button";
import { useState } from "react";

const availableOccasions = [
  "Birthday",
  "Engagement",
  "Anniversary",
  "Baby Shower",
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
  const initialAvailableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  // const [availableTimes, setAvailableTimes] = useState(initialAvailableTimes);
  const [availableTimes, dispatch] = useReducer(reducer, initialAvailableTimes);

  const [formData, setFormData] = useState({
    time: "",
    date: "",
    guests: "",
    occasion: "",
  });

  const changeHandler = (e) => {
    const selectedTime = e.target.value;
    const selectedDate =
      e.target.name === "date" ? e.target.value : formData.date;
    const filteredTimes = initialAvailableTimes.filter((time) => {
      // Check if the time is available for the selected date
      const isTimeAvailable = !props.allBookingDetails.some(
        (booking) => booking.date === selectedDate && booking.time === time
      );

      return isTimeAvailable;
    });
    dispatch({ type: "REMOVE_TIME", payload: selectedTime });
    setFormData({ ...formData, [e.target.name]: selectedTime });

    // Dispatch an action to update the availableTimes state
    dispatch({ type: "SET_AVAILABLE_TIMES", payload: filteredTimes });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAdd(formData);
    // alert(
    //   `Reservation Done for ${formData.date} at ${formData.time} for ${formData.guests} on the occasion of ${formData.occasion}. Looking forward to serving you!!!`
    // );
    setFormData({ time: "", date: "", guests: "", occasion: "" });
  };

  return (
    <>
      <div className="form-wrapper">
        <div className="form">
          <div className="form-data" id="form" onSubmit={submitHandler}>
            <div className="form-data">
              <h1>Make a reservation</h1>
              <label htmlFor="res-date">Choose date : </label>
              <input
                type="date"
                name="date"
                id="res-date"
                value={formData.date}
                onChange={changeHandler}
              />
            </div>
            <div className="form-data">
              <label htmlFor="res-time">Choose time : </label>
              <select
                id="res-time "
                name="time"
                value={formData.time}
                onChange={changeHandler}
              >
                {availableTimes.map((time, index) => (
                  <option>{availableTimes[index]}</option>
                ))}
              </select>
            </div>
            <div className="form-data">
              <label htmlFor="guests">Number of guests :</label>
              <input
                type="number"
                name="guests"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={formData.guests}
                onChange={changeHandler}
              />
            </div>
            <div className="form-data">
              <label htmlFor="occasion">Occasion : </label>
              <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={changeHandler}
              >
                {availableOccasions.map((occasion, index) => (
                  <option>{availableOccasions[index]}</option>
                ))}
              </select>
            </div>
            <div className="form-data">
              <Button className="btn--primary" onClick={submitHandler}>
                Make Your reservation
              </Button>
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

const ReserveATable = () => {
  const [allBookingDetails, updateAllBookingDetails] = useState([]);
  const addBookingDetails = (bookingDetails) => {
    updateAllBookingDetails([...allBookingDetails, bookingDetails]);
  };
  return (
    <>
      <BookingForm
        onAdd={addBookingDetails}
        allBookingDetails={allBookingDetails}
      />
      <FinalBooking allBookingDetails={allBookingDetails} />
    </>
  );
};

export default ReserveATable;
