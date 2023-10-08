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
  const [postStatus, setPostStatus] = useState(
    edit ? post.publicationStatus : "draft"
  );
  const [postType, setPostType] = useState(edit ? post.postType : "journal");
  const handleSubmit = async () => {
    const res = await fetch(`http://127.0.0.1:3000/api/words`, {
      method: edit ? "PUT" : "POST",
      body: JSON.stringify({
        id,
        title,
        content: value,
        author: session?.user,
        secret: secret || "",
        postType,
        publicationStatus: postStatus,
      }),
    });
    const data = await res.json();
    console.log(data);
    router.push(`/words/${data.id}`);
  };
  const handlePostStatus = (event) => {
    setPostStatus(event.target.value);
  };
  const handlePostType = (event) => {
    setPostType(event.target.value);
  };
  // useEffect(() => {
  //   if (!(session?.user?.email == process.env.NEXT_PUBLIC_AUTH_EMAIL)) {
  //     router.push("/");
  //   }
  // }, []);
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
      <label className={styles.label} for="visibility">
        Select Visibility:
      </label>
      <select
        value={postStatus}
        onChange={handlePostStatus}
        id="visibility"
        className={styles.minimalDropdown}
      >
        <option value="draft">Draft</option>
        <option value="public">Public</option>
      </select>
      <label className={styles.label} for="type">
        Select Type:
      </label>
      <select
        value={postType}
        onChange={handlePostType}
        id="type"
        className={styles.minimalDropdown}
      >
        <option value="journal">Journal</option>
        <option value="blog">Blog</option>
      </select>
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
