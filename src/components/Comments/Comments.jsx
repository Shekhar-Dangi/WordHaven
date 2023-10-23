"use client";
import React, { useState } from "react";
import TextBox from "../TextBox/TextBox";
import Button from "../Button/Button";
import Comment from "../Comment/Comment";
import styles from "./Comments.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Comments = ({ comments, id }) => {
  const [value, setValue] = useState("");
  const [comms, setComms] = useState(comments);
  const postComment = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}api/words/${id}`,
        { method: "POST", body: JSON.stringify({ id, content: value }) }
      );
      const posts = await res.json();
      if (posts.done) {
        setComms((prev) => [
          ...prev,
          posts.post.comments[posts.post.comments.length - 1],
        ]);
      } else {
        toast(posts.message);
      }
      setValue("");
    } catch (error) {
      toast(error.message);
    }
  };
  const obj = {
    author: {
      name: "Iron Man",
      image:
        "https://as1.ftcdn.net/v2/jpg/03/16/64/94/1000_F_316649462_XDY0jtTHgKzIQrwCtRxCYf4bxYPhfch3.jpg",
    },
    content: "this is a good explanation!",
  };
  return (
    <div>
      <ToastContainer position="top-right" autoClose={5000} theme="light" />

      <TextBox value={value} setValue={setValue} />
      <Button
        onClick={postComment}
        color={"white"}
        backCol={"#4A8076"}
        text={"Post"}
      />
      <h2 className={`${styles.cHead} f1half`}>Comments({comms.length})</h2>

      {comms.map((comment) => (
        <Comment key={comment.date} obj={comment} />
      ))}
    </div>
  );
};

export default Comments;
