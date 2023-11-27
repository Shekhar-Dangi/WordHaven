"use client";

import React, { useEffect, useState } from "react";
import Editor from "@/components/Editor/Editor";
import Button from "@/components/Button/Button";
import styles from "./page.module.css"; // Import your styles
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const GenerateWordsPage = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const [featuredImage, setFeaturedImage] = useState(null); // Use state to manage the featured image
  const [attachments, setAttachments] = useState([]); // Use state to manage attachments
  const [postStatus, setPostStatus] = useState("draft");
  const [postType, setPostType] = useState("book");
  const [bookId, setBookId] = useState(null);
  const [value, setValue] = useState("");
  const { data: session, status } = useSession();
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFeaturedImage(file);
    }
  };
  const handlePostStatus = (event) => {
    setPostStatus(event.target.value);
  };
  const handlePostType = (event) => {
    setPostType(event.target.value);
  };

  const handleAttachmentUpload = (e) => {
    // Handle attachment upload and add the selected file to the attachments array
    const file = e.target.files[0];
    if (file) {
      setAttachments([...e.target.files]);
    }
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/words", {
      method: "POST",
      body: JSON.stringify({
        title,
        content: value,
        author: session?.user,
        publicationStatus: postStatus,
        postType,
        bookId,
      }),
    });
    const data = await res.json();

    if (!postType == "book") router.push(`/words/${data.id}`);
    else router.push(`/digests/${bookId}`);
  };

  useEffect(() => {
    if (!(session?.user?.email == process.env.NEXT_PUBLIC_AUTH_EMAIL)) {
      router.push("/");
    }
  }, [router, session?.user?.email]);
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Create a New Post</h1>
      <input
        className={styles.text}
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
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
        <option value="book">Book</option>
        <option value="blog">Blog</option>
      </select>{" "}
      <br />
      <input
        className={styles.text}
        type="text"
        placeholder="Book Id"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      />
      {/* <div className={styles.uploadSection}>
        <label htmlFor="featuredImage" className={styles.uploadLabel}>
          Upload Featured Image
        </label>
        <input
          type="file"
          id="featuredImage"
          accept="image/*"
          onChange={handleImageUpload}
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
          onChange={handleAttachmentUpload}
        />
      </div> */}
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

export default GenerateWordsPage;
