import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import PostL from "@/components/PostL/PostL";
import PostS from "@/components/PostS/PostS";
import { getAuthSession } from "@/utils/auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
export default async function Home() {
  function getRandomPosts(posts, num) {
    const shuffled = posts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }
  const getPosts = async () => {
    const session = await getAuthSession();
    try {
      const res = await fetch(
        session?.user?.email == process.env.NEXT_PUBLIC_AUTH_EMAIL && session
          ? `${process.env.NEXTAUTH_URL}api/words/personal`
          : `${process.env.NEXTAUTH_URL}api/words`,
        {
          cache: "no-store",
        }
      );
      return res.json();
    } catch (error) {
      console.log("fetch error : ", error);
      return null;
    }
  };
  const data = await getPosts();
  return (
    <div className={styles.header}>
      <div className={styles.topHeader}>
        <div>
          <div className="flex">
            {" "}
            <div className={`f3 tWebHead`}>ABSORBING</div>
            <div className={styles.arc}></div>
          </div>
          <div className={`tNav`}>
            Diving deep into anything I find interesting!
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <Link href={"/words"}>
            <Button color={"white"} backCol="red" text="READ" />
          </Link>
          <Link href={"/digests"}>
            <Button color={"white"} backCol="red" text="DIGESTS" />
          </Link>
        </div>
      </div>

      <div className={styles.newPostsH}>
        <h1>Recent Posts</h1>
        <div className={styles.newPosts}>
          {data != null &&
            data
              .slice(-3)
              .map((post) => (
                <PostL
                  key={post._id}
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
              getRandomPosts(data, 3).map((post) => (
                <PostL
                  key={post._id}
                  title={post.title}
                  id={post._id}
                  imageUrl={post.featuredImage}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
