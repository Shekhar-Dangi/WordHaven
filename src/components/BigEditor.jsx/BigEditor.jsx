"use client";

import Editor from "../Editor/Editor";
import Button from "../Button/Button";
import React, { useEffect, useState } from "react";

import styles from "./BigEditor.module.css"; // Import your styles
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const BigEditor = ({ post, edit, id }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [title, setTitle] = useState(edit ? post.title : "");
  const [secret, setSecret] = useState("");
  const [value, setValue] = useState(edit ? post.content : "");
  const handleSubmit = async () => {
    const res = await fetch(`http://127.0.0.1:3000/api/words`, {
      method: edit ? "PUT" : "POST",
      body: JSON.stringify({
        id,
        title,
        content: value,
        author: session?.user,
        secret: secret || "",
      }),
    });
    const data = await res.json();
    router.push(`/words/${data.id}`);
  };
  useEffect(() => {
    if (!(session?.user?.email == process.env.NEXT_PUBLIC_AUTH_EMAIL)) {
      router.push("/");
    }
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        {edit ? "Edit a post" : "Create a New Post"}
      </h1>
      <input
        className={styles.text}
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {edit ? (
        <input
          className={styles.text}
          type="text"
          placeholder="Secret"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
        />
      ) : (
        ""
      )}
      <div className={styles.uploadSection}>
        <label htmlFor="featuredImage" className={styles.uploadLabel}>
          Upload Featured Image
        </label>
        <input
          type="file"
          id="featuredImage"
          accept="image/*"
          //   onChange={handleImageUpload}
        />
      </div>
      <div className={styles.uploadSection}>
        <label htmlFor="attachment" className={styles.uploadLabel}>
          Upload Attachments (Multiple)
        </label>
        <input
          type="file"
          id="attachment"
          accept="application/pdf,.doc,.docx"
          multiple
          //   onChange={handleAttachmentUpload}
        />
      </div>
      <Editor value={value} setValue={setValue} />
      <div className={styles.buttonContainer}>
        <Button
          color="white"
          backCol="black"
          text="Publish"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default BigEditor;
