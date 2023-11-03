import React from 'react'
import Header from '@/components/Header/Header'
import dynamic from 'next/dynamic';

// import TextEditor from '@/components/Editor/EditorText'
const DynamicTextEditor = dynamic(
    () => import('@/components/Editor/EditorText'),
    { ssr: false } // Prevents text editor from being server-side rendered
  );
export default function index() {
  return (
    <div>
        <Header/>
        <div className="flex flex-wrap -mx-4">
      <DynamicTextEditor />
      <DynamicTextEditor />
      <DynamicTextEditor />
    </div>
    </div>
  )
}
