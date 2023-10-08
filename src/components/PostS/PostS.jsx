import React from "react";
import styles from "./PostS.module.css";
import Image from "next/image";

function PostS({ title, imageUrl }) {
  return (
    <div className={"post"}>
      <img className={styles.imgS} src={imageUrl} alt="Post" />
      <p className={``}>{title}</p>
    </div>
  );
}

export default PostS;
