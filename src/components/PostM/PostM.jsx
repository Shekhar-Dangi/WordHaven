import React from "react";
import styles from "./PostM.module.css";
import ProfileS from "../ProfileS/ProfileS";
import Button from "../Button/Button";
import Link from "next/link";
import { getDate } from "@/utils/date";
import { Remarkable } from "remarkable";
import Image from "next/image";

const PostM = ({ book, imgUrl, title, author, time, content, id }) => {
  const md = new Remarkable({ html: true });
  return (
    <div id={id} className={styles.container}>
      <img alt="post image" className={styles.img} src={imgUrl} />
      <div className={styles.textContainer}>
        <span className={`${styles.title} f1half`}>{title}</span>
        <div className={styles.details}>
          {!book ? (
            <ProfileS isNew={true} obj={author} size={"30px"} />
          ) : (
            author
          )}
          <span> &middot; {getDate(time)}</span>
        </div>

        <p
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: md.render(content.slice(0, 100) + "..."),
          }}
        ></p>
        <Link href={!book ? `/words/${id}` : `/digests/${id}`}>
          <Button color={"white"} backCol={"black"} text={"Read More"} />
        </Link>
      </div>
    </div>
  );
};

export default PostM;
