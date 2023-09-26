import React from "react";
import styles from "./Button.module.css";
const Button = ({ backCol, color, text }) => {
  return (
    <div
      className={`${styles.button} tNav`}
      style={{ color, backgroundColor: backCol }}
    >
      {text}
    </div>
  );
};

export default Button;
