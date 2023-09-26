import React from "react";
import styles from "./PostL.module.css";
function PostL({ title, imageUrl }) {
  return (
    <div className={`${styles.down} post`}>
      <img className={styles.imgL} src={imageUrl} alt="Post" />
      <p className={``}>{title}</p>
    </div>
  );
}

export default PostL;
