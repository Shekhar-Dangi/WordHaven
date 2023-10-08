"use client";
import { signOut } from "next-auth/react";
import React, { useState } from "react";
import styles from "./ProfileS.module.css";
import Dropdown from "../Dropdown/Dropdown";
import { useSession } from "next-auth/react";
const ProfileS = ({ size, fSize, isNew, obj, clickable }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { data: session, status } = useSession();
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div
      className={styles["profile-container"]}
      onClick={clickable ? toggleDropdown : null}
    >
      <img
        className={styles["profile-img"]}
        style={{ height: size }}
        src={!isNew ? session?.user?.image : obj.profileImage}
        alt=""
      />
      <p style={{ fontSize: fSize }} className={styles["profile-text"]}>
        {!isNew ? session?.user?.name : obj.username}
      </p>
      {clickable && isDropdownVisible && (
        <Dropdown
          options={["Logout", "Edit Profile", "My Posts"]}
          onClicks={[signOut, signOut, signOut]}
        />
      )}
    </div>
  );
};

export default ProfileS;
