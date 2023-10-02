import React from "react";
import styles from "./PostM.module.css";
import ProfileS from "../ProfileS/ProfileS";
import Button from "../Button/Button";
import Link from "next/link";
import { getDate } from "@/utils/date";

const PostM = ({ imgUrl, title, author, time, content, id }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={imgUrl} />
      <div className={styles.textContainer}>
        <span className={`${styles.title} f1half`}>{title}</span>
        <div className={styles.details}>
          <ProfileS size={"30px"} />
          <span> &middot; {getDate(time)}</span>
        </div>
        <p className={styles.content}>{content.slice(0, 100) + "..."}</p>
        <Link href={`/words/${id}`}>
          <Button color={"white"} backCol={"#4A8076"} text={"Read More"} />
        </Link>
      </div>
    </div>
  );
};

export default PostM;
