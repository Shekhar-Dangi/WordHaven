"use client";
import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import { useSession } from "next-auth/react";
import ProfileS from "../ProfileS/ProfileS";

const Navbar = () => {
  const { data: session, status } = useSession();
  return (
    <nav className={`${styles.navbar} tNav`}>
      <div className={styles.left}>
        <Link className={styles.item} href="/">
          Home
        </Link>
        <Link className={styles.item} href="/words">
          Posts
        </Link>
        <Link className={styles.item} href="/digests">
          Digests
        </Link>
        <Link
          className={styles.item}
          href="https://main--incredible-empanada-2c926a.netlify.app/"
        >
          Portfolio
        </Link>
      </div>
      <Link href={"/"} className={`cBlack ${styles.mid} tWebHead`}>
        <img style={{ height: "50px", width: "50px" }} src="/logo.png" />
      </Link>
      <div className={styles.right}>
        <i className="fa-solid fa-magnifying-glass"></i>

        {status == "unauthenticated" ? (
          <Link href="/auth">
            {" "}
            <Button color="white" backCol="black" text="Login" />
          </Link>
        ) : (
          <ProfileS
            clickable={true}
            size={"40px"}
            fSize={"1rem"}
            isNew={false}
            src={session?.user?.image}
            text={session?.user?.name}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
