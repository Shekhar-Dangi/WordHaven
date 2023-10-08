"use client";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
function Editor({ value, setValue }) {
  return (
    <div
      onChange={() => {
        console.log(value);
      }}
      className="mb_1"
      data-color-mode="dark"
    >
      <MDEditor
        autoFocus="on"
        key={1}
        tabSize={4}
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export default Editor;
