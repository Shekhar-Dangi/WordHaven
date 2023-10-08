import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inC}>
        <Link href={""} className="cBlack f09">
          About
        </Link>
        <Link href={""} className="cBlack f09">
          Privacy
        </Link>
        <Link href={""} className="cBlack f09">
          Terms
        </Link>
        <Link href={""} className="cBlack f09">
          Social Media
        </Link>
        <Link href={""} className="cBlack f09">
          Request Help
        </Link>
        <Link href={""} className="cBlack f09">
          Apply
        </Link>
        <Link href={"/words/generate"} className="cBlack f09">
          Write
        </Link>
      </div>
    </div>
  );
};

export default Footer;
