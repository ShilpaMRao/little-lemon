import React from "react";
import "./ReserveATable.css";
import { Button } from "../Button";
import { useState } from "react";

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const availableOccasions = [
  "Birthday",
  "Engagement",
  "Anniversary",
  "Baby Shower",
];
const ReserveATable = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  console.log("Date: ", date);
  console.log("Time : ", time);
  console.log("Guests: ", guests);
  console.log("Occasion : ", occasion);
  const handleClick = () => {
    alert(
      `Reservation Done for ${date} at ${time} for ${guests} on the occasion of ${occasion}. Looking forward to serving you!!!`
    );
  };
  return (
    <>
      <div className="form-wrapper">
        <div className="form">
          <div className="form-data">
            <h1>Make a reservation</h1>
            <label for="res-date">Choose date : </label>
            <input
              type="date"
              id="res-date"
              onBlur={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className="form-data">
            <label for="res-time">Choose time : </label>
            {/* <select
              id="res-time "
              onBlur={(e) => {
                setTime(e.target.value);
              }}
            >
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select> */}
            <select
              id="res-time "
              onBlur={(e) => {
                setTime(e.target.value);
              }}
            >
              {availableTimes.map((time, index) => (
                <option>{availableTimes[index]}</option>
              ))}
            </select>
          </div>
          <div className="form-data">
            <label for="guests">Number of guests :</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              onBlur={(e) => {
                setGuests(e.target.value);
              }}
            />
          </div>
          <div className="form-data">
            <label for="occasion">Occasion : </label>
            <select
              id="occasion"
              onBlur={(e) => {
                setOccasion(e.target.value);
              }}
            >
              {/* <option>Birthday</option>
              <option>Anniversary</option> */}
              {availableOccasions.map((occasion, index) => (
                <option>{availableOccasions[index]}</option>
              ))}
            </select>
          </div>
          <div className="form-data">
            <Button onClick={handleClick}>Make Your reservation</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReserveATable;
