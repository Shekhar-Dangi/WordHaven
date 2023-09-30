import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import PostL from "@/components/PostL/PostL";
import PostS from "@/components/PostS/PostS";
export default function Home() {
  const fakeDb = [
    {
      title: "Post 1",
      imageUrl:
        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3339&q=80",
    },
    {
      title: "Post 2",
      imageUrl:
        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3339&q=80",
    },
    {
      title: "Post 3",
      imageUrl:
        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3339&q=80",
    },
    {
      title: "Post 4",
      imageUrl:
        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3339&q=80",
    },
    {
      title: "Post 5",
      imageUrl:
        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3339&q=80",
    },
    {
      title: "Post 6",
      imageUrl:
        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3339&q=80",
    },
    {
      title: "Post 7",
      imageUrl:
        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3339&q=80",
    },
    {
      title: "Post 8",
      imageUrl:
        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3339&q=80",
    },
    {
      title: "Post 9",
      imageUrl:
        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3339&q=80",
    },
  ];

  return (
    <div>
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
          <Button color={"white"} backCol="red" text="READ" />
          <Button color={"white"} backCol="red" text="WRITE" />
        </div>
      </div>

      <div className={styles.newPostsH}>
        <h1>Recent Posts</h1>
        <div className={styles.newPosts}>
          <PostL
            title="How Area is so interesting?"
            imageUrl="https://media.istockphoto.com/id/173682323/photo/says.jpg?s=612x612&w=0&k=20&c=7jnXQrYzUWNTnLhjPgimxHIbjsaHvZmAMALGVzYNARQ="
          />
          <PostL
            title="How Area is so interesting?"
            imageUrl="https://media.istockphoto.com/id/173682323/photo/says.jpg?s=612x612&w=0&k=20&c=7jnXQrYzUWNTnLhjPgimxHIbjsaHvZmAMALGVzYNARQ="
          />
          <PostL
            title="How Area is so interesting?"
            imageUrl="https://media.istockphoto.com/id/173682323/photo/says.jpg?s=612x612&w=0&k=20&c=7jnXQrYzUWNTnLhjPgimxHIbjsaHvZmAMALGVzYNARQ="
          />
        </div>
        <div className={styles.recPostsH}>
          <h1>Recommended Posts</h1>
          <div className={styles.newPosts}>
            {fakeDb.map((data) => (
              <PostS title={data.title} imageUrl={data.imageUrl} />
            ))}
          </div>
          <div className={styles.leftAlign}>
            <Button color="white" backCol="#4A8076" text={"Read More"} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
