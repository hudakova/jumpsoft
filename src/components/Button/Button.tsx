import React from "react";
import styles from "./Button.module.css";
interface ButtonProps {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  secondary?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  secondary,
  type = "button",
}) => {
  const buttonClassNames = !!secondary
    ? styles.secondary_button
    : styles.button;
  return (
    <button
      className={buttonClassNames}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
