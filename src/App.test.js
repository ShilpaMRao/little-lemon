import { render, fireEvent, screen } from "@testing-library/react";
import ReserveATable from "./components/pages/ReserveATable";
import React from "react";
import { MemoryRouter } from "react-router-dom";
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// import React from "react";
// import { render, fireEvent, screen } from "@testing-library/react";
// import ReserveATable from "./path/to/ReserveATable"; // Adjust the import path as per your project structure

describe("ReserveATable Component", () => {
  test("Renders the reservation form correctly", () => {
    render(
      <MemoryRouter>
        <ReserveATable reservationData={[]} setReservationData={() => {}} />
      </MemoryRouter>
    );

    // Test if the reservation form elements are rendered correctly
    expect(screen.getByLabelText("Choose date:")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose time:")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of guests:")).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion (optional):")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Make Your Reservation/i })
    ).toBeInTheDocument();
  });

  test("Displays validation error for empty fields on form submission", () => {
    render(
      <MemoryRouter>
        <ReserveATable reservationData={[]} setReservationData={() => {}} />
      </MemoryRouter>
    );

    // Attempt to submit the form without filling in any fields
    fireEvent.click(
      screen.getByRole("button", { name: /Make Your Reservation/i })
    );

    // Test if validation error messages are displayed for required fields
    expect(screen.getByText(/Date is required./i)).toBeInTheDocument();
    expect(screen.getByText(/Time is required./i)).toBeInTheDocument();
    expect(
      screen.getByText(/Number of guests is required./i)
    ).toBeInTheDocument();
  });

  test("Submits the form with valid data", () => {
    const mockSetReservationData = jest.fn();
    render(
      <MemoryRouter>
        <ReserveATable
          reservationData={[]}
          setReservationData={mockSetReservationData}
        />
      </MemoryRouter>
    );

    // Fill in the form with valid data
    fireEvent.change(screen.queryByLabelText("Choose date:"), {
      target: { value: "2023-07-30" },
    });
    fireEvent.change(screen.getByLabelText("Choose time:"), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests:"), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText("Occasion (optional):"), {
      target: { value: "Birthday" },
    });

    // Submit the form
    fireEvent.click(
      screen.getByRole("button", { name: /Make Your Reservation/i })
    );

    // Check if the form data is correctly submitted and the setReservationData function is called
    expect(mockSetReservationData).toHaveBeenCalledTimes(1);
    expect(mockSetReservationData).toHaveBeenCalledWith([
      {
        date: "2023-07-30",
        time: "18:00",
        guests: "4",
        occasion: "Birthday",
      },
    ]);

    // Check if the form is reset after submission
    expect(screen.getByLabelText("Choose date:")).toHaveValue("");
    expect(screen.getByLabelText("Choose time:")).toHaveValue("Choose time");
    expect(screen.getByLabelText("Number of guests:")).toHaveValue("");
    expect(screen.getByLabelText("Occasion (optional):")).toHaveValue(
      "No Occasion"
    );
  });

  // Add more test cases to cover different scenarios and functionalities of the ReserveATable component.
});
