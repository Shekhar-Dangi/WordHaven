import React from "react";
import styles from "./PostM.module.css";
import ProfileS from "../ProfileS/ProfileS";
import Button from "../Button/Button";
import Link from "next/link";
import { getDate } from "@/utils/date";
import { Remarkable } from "remarkable";

const PostM = ({ imgUrl, title, author, time, content, id }) => {
  const md = new Remarkable({ html: true });
  return (
    <div className={styles.container}>
      <img className={styles.img} src={imgUrl} />
      <div className={styles.textContainer}>
        <span className={`${styles.title} f1half`}>{title}</span>
        <div className={styles.details}>
          <ProfileS isNew={true} obj={author} size={"30px"} />
          <span> &middot; {getDate(time)}</span>
        </div>

        <p
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: md.render(content.slice(0, 100) + "..."),
          }}
        ></p>
        <Link href={`/words/${id}`}>
          <Button color={"white"} backCol={"black"} text={"Read More"} />
        </Link>
      </div>
    </div>
  );
};

export default PostM;
