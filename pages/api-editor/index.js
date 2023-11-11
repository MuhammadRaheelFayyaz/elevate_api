import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar/Navbar";

// import TextEditor from '@/components/Editor/EditorText'
const DynamicTextEditor = dynamic(
  () => import("@/components/Editor/EditorText"),
  { ssr: false } // Prevents text editor from being server-side rendered
);
export default function index() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap -mx-4">
        <div></div>
        <div></div>
        <DynamicTextEditor />
      </div>
    </div>
  );
}
