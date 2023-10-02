"use client";
import React from "react";
import styles from "./ProfileS.module.css";
import { useSession } from "next-auth/react";

const ProfileS = ({ size, fSize, isNew, obj }) => {
  const { data: session, status } = useSession();
  return (
    <div className={styles.container}>
      <img
        className={styles.profileImg}
        style={{ height: size }}
        src={!isNew ? session?.user?.image : obj.image}
        alt=""
      />
      <p style={{ fontSize: fSize }} className={styles.text}>
        {!isNew ? session?.user?.name : obj.name}
      </p>
    </div>
  );
};

export default ProfileS;
