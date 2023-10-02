"use client";
import React from "react";
import styles from "./ProfileS.module.css";
import { useSession } from "next-auth/react";

const ProfileS = ({ size, fSize }) => {
  const { data: session, status } = useSession();
  return (
    <div className={styles.container}>
      <img
        className={styles.profileImg}
        style={{ height: size }}
        src={session?.user?.image}
        alt=""
      />
      <p style={{ fontSize: fSize }} className={styles.text}>
        {session?.user?.name}
      </p>
    </div>
  );
};

export default ProfileS;
