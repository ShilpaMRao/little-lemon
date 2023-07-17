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

const BookingForm = (props) => {
  const [formData, setFormData] = useState({
    time: "",
    date: "",
    guests: "",
    occasion: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAdd(formData);
    alert(
      `Reservation Done for ${formData.date} at ${formData.time} for ${formData.guests} on the occasion of ${formData.occasion}. Looking forward to serving you!!!`
    );
    setFormData({ time: "", date: "", guests: "", occasion: "" });
  };
  //   const clickHandler = () => {
  //     alert(
  //       `Reservation Done for ${formData.date} at ${formData.time} for ${formData.guests} on the occasion of ${formData.occasion}. Looking forward to serving you!!!`
  //     );
  //   };
  return (
    <>
      <div className="form-wrapper">
        <div className="form">
          <div className="form-data" id="form" onSubmit={submitHandler}>
            {/* <form id="form" onSubmit={submitHandler}> */}
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
            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

const FinalBooking = (props) => {
  console.log("Details of final Booking :", props.allBookingDetails);
  return (
    <>
      <h1>in FinalBooking</h1>
      <ul>
        {props.allBookingDetails.map((d) => {
          return (
            <li key={d.bookingDetails}>
              <span>
                The booking is confirmed for {d.date} at {d.time} for {d.guests}
                guests on the occasion of {d.occasion}.
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const ReserveATable = () => {
  //   const [date, setDate] = useState("");
  //   const [time, setTime] = useState("");
  //   const [guests, setGuests] = useState("");
  //   const [occasion, setOccasion] = useState("");

  //   const handleClick = (e) => {
  //     e.preventDefault();

  //     alert(
  //       `Reservation Done for ${date} at ${time} for ${guests} on the occasion of ${occasion}. Looking forward to serving you!!!`
  //     );
  //     setDate("");
  //     setTime("");
  //     setGuests("");
  //     setOccasion("");
  //   };
  //   return (
  //     <>
  //       <div className="form-wrapper">
  //         <div className="form" onSubmit={submitHandler}>
  //           <div className="form-data">
  //             <h1>Make a reservation</h1>
  //             <label htmlFor="res-date">Choose date : </label>
  //             <input
  //               type="date"
  //               name="date"
  //               id="res-date"
  //               value={formData.date}
  //               onChange={changeHandler}
  //             />
  //           </div>
  //           <div className="form-data">
  //             <label htmlFor="res-time">Choose time : </label>
  //             {/* <select
  //               id="res-time "
  //               onBlur={(e) => {
  //                 setTime(e.target.value);
  //               }}
  //             >
  //               <option>17:00</option>
  //               <option>18:00</option>
  //               <option>19:00</option>
  //               <option>20:00</option>
  //               <option>21:00</option>
  //               <option>22:00</option>
  //             </select> */}
  //             <select
  //               id="res-time "
  //               name="time"
  //               value={formData.time}
  //               //
  //               //   onBlur={(e) => {
  //               //     setGuests(e.target.value);
  //               //   }}
  //               onChange={changeHandler}
  //             >
  //               {availableTimes.map((time, index) => (
  //                 <option>{availableTimes[index]}</option>
  //               ))}
  //             </select>
  //           </div>
  //           <div className="form-data">
  //             <label htmlFor="guests">Number of guests :</label>
  //             <input
  //               type="number"
  //               name="guests"
  //               placeholder="1"
  //               min="1"
  //               max="10"
  //               id="guests"
  //               value={formData.guests}
  //               //   onBlur={(e) => {
  //               //     setGuests(e.target.value);
  //               //   }}
  //               onChange={changeHandler}
  //             />
  //           </div>
  //           <div className="form-data">
  //             <label htmlFor="occasion">Occasion : </label>
  //             <select
  //               id="occasion"
  //               name="occasion"
  //               value={formData.occasion}
  //               //   onBlur={(e) => {
  //               //     setGuests(e.target.value);
  //               //   }}
  //               onChange={changeHandler}
  //             >
  //               {/* <option>Birthday</option>
  //               <option>Anniversary</option> */}
  //               {availableOccasions.map((occasion, index) => (
  //                 <option>{availableOccasions[index]}</option>
  //               ))}
  //             </select>
  //           </div>
  //           <div className="form-data">
  //             <Button
  //               className="btn--primary"
  //               disabled={!time && !date && !guests && !occasion}
  //               onClick={handleClick}
  //             >
  //               Make Your reservation
  //             </Button>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );

  const [allBookingDetails, updateAllBookingDetails] = useState([]);
  const addBookingDetails = (bookingDetails) => {
    console.log("Data received:", bookingDetails);
    updateAllBookingDetails([...allBookingDetails, bookingDetails]);
  };
  console.log("updated booking details : ", allBookingDetails.occasion);
  return (
    <>
      <BookingForm onAdd={addBookingDetails} />
      <FinalBooking allBookingDetails={allBookingDetails} />
    </>
  );
};

export default ReserveATable;
