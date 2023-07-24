import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import "./NavBar.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  disabled,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1];

  return (
    <Link to="/reserveatable" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
    </Link>
  );
};
