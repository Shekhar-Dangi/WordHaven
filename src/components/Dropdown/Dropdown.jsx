import React from "react";
import styles from "./Dropdown.module.css";
import Link from "next/link";

const Dropdown = ({ options, onClicks }) => {
  return (
    <div className={styles["dropdown-container"]}>
      <ul className={styles["dropdown-options"]}>
        {options.map((option, index) => (
          <li onClick={onClicks[index]} key={index}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
