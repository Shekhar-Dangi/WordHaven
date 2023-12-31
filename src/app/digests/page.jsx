"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import PostM from "@/components/PostM/PostM";
import PuffLoader from "react-spinners/PuffLoader";
import { useSession } from "next-auth/react";

const Books = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { data: session, status } = useSession();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}api/books`,
          {
            cache: "no-store",
          }
        );
        if (!res.ok) {
          throw new Error("Failed");
        }
        const books = await res.json();
        setData(books);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [session]);
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
                book={true}
                key={post._id}
                id={post._id}
                title={post.title}
                time={post.date}
                imgUrl={post.featuredImage}
                author={post.author}
                content={post.content}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Books;
