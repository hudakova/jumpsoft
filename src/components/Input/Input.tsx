import React from "react";
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  onChange,
  value,
  error,
}) => (
  <div className={styles.input_wrapper}>
    {error && <label className={styles.label}>{"Zadajte aspon 3 znaky"}</label>}

    <input
      className={error ? styles.error_input : styles.input}
      type={type}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Input;
