import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  useEffect(() => {
    // Use 'document' here or handle any DOM-related code within this useEffect
  }, []);

  return (
    <div className="w-full md:w-1/3 p-4">
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={(value) => setEditorHtml(value)}
      />
    </div>
  );
};

export default TextEditor;
