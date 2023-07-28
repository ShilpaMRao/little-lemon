import { render, fireEvent, screen } from "@testing-library/react";
import ReserveATable from "./components/pages/ReserveATable";
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("Reservation Table", () => {
  test("Submission is disabled if the all the required fields are not entered.", () => {
    const handleClick = jest.fn;
    render(<BookingForm onClick={handleClick} />);
    expect(submitButton).toHaveAttribute("disabled");
  });
});
