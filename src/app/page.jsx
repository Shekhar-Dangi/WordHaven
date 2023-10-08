import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import PostL from "@/components/PostL/PostL";
import PostS from "@/components/PostS/PostS";
import { getAuthSession } from "@/utils/auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
export default async function Home() {
  const getPosts = async () => {
    const session = await getAuthSession();
    console.log(session);
    const res = await fetch(
      session?.user?.email == process.env.NEXT_PUBLIC_AUTH_EMAIL && session
        ? `http://localhost:3000/api/words/personal`
        : `http://localhost:3000/api/words`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed");
    }
    return res.json();
  };
  const data = await getPosts();
  console.log(data);
  return (
    <div className={styles.header}>
      <div className={styles.topHeader}>
        <div>
          <div className="flex">
            {" "}
            <div className={`f3 tWebHead`}>WORDHAVEN</div>
            <div className={styles.arc}></div>
          </div>
          <div className={`tNav`}>EXPLORE, EXPRESS & ENGAGE</div>
        </div>
        <div className={styles.buttonGroup}>
          <Link href={"/journal"}>
            {" "}
            <Button color={"white"} backCol="red" text="JOURNAL" />
          </Link>
          <Link href={"/words"}>
            <Button color={"white"} backCol="red" text="BLOG" />
          </Link>
        </div>
      </div>

      <div className={styles.newPostsH}>
        <h1>Recent Posts</h1>
        <div className={styles.newPosts}>
          {data != null &&
            data.map((post) => (
              <PostL
                title={post.title}
                id={post._id}
                imageUrl={post.featuredImage}
              />
            ))}
        </div>
        <div className={styles.recPostsH}>
          <h1>Recommended Posts</h1>
          <div className={styles.newPosts}>
            {data != null &&
              data.map((post) => (
                <PostL
                  title={post.title}
                  id={post._id}
                  imageUrl={post.featuredImage}
                />
              ))}
          </div>
          <div className={styles.leftAlign}>
            <Button color="white" backCol="black" text={"Read More"} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
