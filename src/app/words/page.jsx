"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import PostM from "@/components/PostM/PostM";
import PuffLoader from "react-spinners/PuffLoader";
import { useSession } from "next-auth/react";

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { data: session, status } = useSession();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          session.user.email == process.env.NEXT_PUBLIC_AUTH_EMAIL
            ? `http://localhost:3000/api/words/personal`
            : `http://localhost:3000/api/words`,
          {
            cache: "no-store",
          }
        );
        if (!res.ok) {
          throw new Error("Failed");
        }
        const posts = await res.json();
        console.log(posts);
        setData(posts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <PuffLoader
            color={"black"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className={styles.posts}>
          {data.length > 0 &&
            data.map((post) => (
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
      )}
    </div>
  );
};

export default Blog;
