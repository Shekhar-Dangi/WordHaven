import React from "react";
import styles from "./Comment.module.css";
import ProfileS from "../ProfileS/ProfileS";
import { getDate } from "@/utils/date";

const Comment = ({ obj }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <ProfileS isNew={true} obj={obj} />
        &middot; <span>{getDate(obj?.date)}</span>
      </div>
      <p>{obj.content}</p>
    </div>
  );
};

export default Comment;
