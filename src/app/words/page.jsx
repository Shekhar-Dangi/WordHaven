import PostL from "@/components/PostL/PostL";
import PostS from "@/components/PostS/PostS";
import React from "react";
import styles from "./page.module.css";
import PostM from "@/components/PostM/PostM";
const getPosts = async () => {
  const res = await fetch(`http://127.0.0.1:3000/api/words`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const Blog = async () => {
  const data = await getPosts();
  console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {data.map((post) => (
          <PostM
            id={post._id}
            title={post.title}
            imgUrl={post.featuredImage}
            content={post.content}
            author={post.author}
            time={post.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
