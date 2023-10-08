import React from "react";
import styles from "./Button.module.css";
const Button = ({ backCol, color, text, onClick }) => {
  return (
    <div
      className={`${styles.button} tNav`}
      style={{ color, backgroundColor: backCol }}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;
