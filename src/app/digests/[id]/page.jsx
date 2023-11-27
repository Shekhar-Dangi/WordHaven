import React from "react";
import styles from "./page.module.css";
import ProfileS from "@/components/ProfileS/ProfileS";
import { getDate } from "@/utils/date";
import Comment from "@/components/Comment/Comment";
import TextBox from "@/components/TextBox/TextBox";
import Button from "@/components/Button/Button";
import { Remarkable } from "remarkable";
import hljs from "highlight.js";
import Comments from "@/components/Comments/Comments";

const getPost = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}api/books/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const page = async ({ params }) => {
  const id = params.id;

  const post = await getPost(id);
  var md = new Remarkable({
    html: true,
    highlight: function (str, lang) {
      if (lang != "markdown" && lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (err) {}
      }

      try {
        return hljs.highlightAuto(str).value;
      } catch (err) {}

      return ""; // use external default escaping
    },
  });
  return (
    <div className={`${styles.container} ${post[0]._id}`}>
      <h1 className={`f2 ${styles.heading}`}>{post[0]?.title}</h1>
      <div className={styles.info}>
        <ProfileS isNew={true} obj={post[0]?.author} />
        &middot; <span>{getDate(post[0]?.date)}</span>
      </div>
      <p
        style={{ marginBottom: "4rem" }}
        dangerouslySetInnerHTML={{ __html: md.render(post[0]?.content) }}
      ></p>
      <h2 className={`${styles.cHead} f1half`}>Post your comment!</h2>
      <Comments comments={post[0].comments} id={post[0]._id}></Comments>
    </div>
  );
};

export default page;
