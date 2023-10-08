import React from "react";
import Editor from "@/components/Editor/Editor";
import Button from "@/components/Button/Button";
import styles from "./page.module.css"; // Import your styles
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import BigEditor from "@/components/BigEditor.jsx/BigEditor";

const page = async ({ params }) => {
  const id = params.id;
  const getPost = async (id) => {
    const res = await fetch(`http://127.0.0.1:3000/api/words/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed");
    }
    return res.json();
  };

  const post = await getPost(id);

  return <BigEditor id={id} edit={true} post={post} />;
};

export default page;
