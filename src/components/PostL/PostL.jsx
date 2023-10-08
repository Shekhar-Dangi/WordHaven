import React from "react";
import styles from "./PostL.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "../Button/Button";
function PostL({ title, id, imageUrl }) {
  return (
    <div href={""} className={`${styles.down} post`}>
      <img className={styles.imgL} src={imageUrl} alt="Post" />
      <p className={styles.para}>{title}</p>
      <Link href={`/words/${id}`}>
        <Button color={"white"} backCol={"black"} text={"Read"} />
      </Link>
    </div>
  );
}

export default PostL;
