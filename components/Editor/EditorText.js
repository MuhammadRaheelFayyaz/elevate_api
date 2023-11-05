import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({value, setValue, readOnly=false}) => {
  const [editorHtml, setEditorHtml] = useState('');

  useEffect(() => {
    // Use 'document' here or handle any DOM-related code within this useEffect
  }, []);

  const modules = {
    toolbar: readOnly ? [] : true, // Hide the toolbar when read-only
  };

  return (
    <div className="w-full h-full ">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={(value) => setValue(value)}
        style={{height:'calc(50vh - 32px) '}}
        readOnly={readOnly}
        modules={modules}
      />
    </div>
  );
};

export default TextEditor;
