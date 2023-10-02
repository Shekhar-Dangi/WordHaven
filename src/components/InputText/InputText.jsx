import React from "react";
import styles from "./InputText.module.css";

const InputText = ({ name, label }) => {
  return (
    <>
      <label className={`tNav ${styles.labelText}`} typeof={name} id={name}>
        {label}
      </label>
      <input
        autoComplete="off"
        className={styles.txt}
        name={name}
        id={name}
        type="text"
      ></input>
    </>
  );
};

export default InputText;
