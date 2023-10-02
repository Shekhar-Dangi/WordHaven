import React from "react";
import styles from "./Comment.module.css";
import ProfileS from "../ProfileS/ProfileS";

const Comment = ({ obj }) => {
  return (
    <div className={styles.container}>
      <ProfileS isNew={true} obj={obj.author} />
      <p>{obj.content}</p>
    </div>
  );
};

export default Comment;
