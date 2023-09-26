import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} tNav`}>
      <div className={styles.left}>
        <Link className={styles.item} href="H">
          Home
        </Link>
        <Link className={styles.item} href="H">
          Posts
        </Link>
        <Link className={styles.item} href="H">
          ABOUT
        </Link>
      </div>
      <div className={`${styles.mid} tWebHead`}>WordHaven</div>
      <div className={styles.right}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <Button color="white" backCol="black" text="Login" />
      </div>
    </nav>
  );
};

export default Navbar;
