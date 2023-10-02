import React from "react";
import styles from "./page.module.css";
import ProfileS from "@/components/ProfileS/ProfileS";
import { getDate } from "@/utils/date";
import Comment from "@/components/Comment/Comment";
import TextBox from "@/components/TextBox/TextBox";
import Button from "@/components/Button/Button";

const getPost = async (id) => {
  const res = await fetch(`http://127.0.0.1:3000/api/words/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const page = async ({ params }) => {
  const id = params.id;
  const post = await getPost(id);
  const obj = {
    author: {
      name: "Iron Man",
      image:
        "https://as1.ftcdn.net/v2/jpg/03/16/64/94/1000_F_316649462_XDY0jtTHgKzIQrwCtRxCYf4bxYPhfch3.jpg",
    },
    content: "this is a good explanation!",
  };
  return (
    <div className={styles.container}>
      <h1 className={`f2 ${styles.heading}`}>{post?.title}</h1>
      <div className={styles.info}>
        <ProfileS isNew={false} obj={obj} />
        &middot; <span>{getDate(post?.date)}</span>
      </div>
      <p>{post?.content}</p>
      <h2 className={`${styles.cHead} f1half`}>Post your comment!</h2>
      <TextBox />
      <Button color={"white"} backCol={"#4A8076"} text={"Post"} />
      <h2 className={`${styles.cHead} f1half`}>Comments(4)</h2>
      <Comment obj={obj} />
    </div>
  );
};

export default page;