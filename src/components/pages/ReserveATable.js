import React from "react";
import "./ReserveATable.css";
import { Button } from "../Button";

const ReserveATable = () => {
  return (
    <>
      <div className="form-wrapper">
        {/* <h1>Make a reservation</h1> */}
        <div className="form">
          {/* <h1>Make a reservation</h1> */}
          <div className="form-data">
            <h1>Make a reservation</h1>
            <label for="res-date">Choose date : </label>
            <input type="date" id="res-date" />
          </div>
          <div className="form-data">
            <label for="res-time">Choose time : </label>
            <select id="res-time ">
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
          </div>
          <div className="form-data">
            <label for="guests">Number of guests :</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" />
          </div>
          <div className="form-data">
            <label for="occasion">Occasion : </label>
            <select id="occasion">
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
          <div className="form-data">
            <Button>Make Your reservation</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReserveATable;
