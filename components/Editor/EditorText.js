import React, {useRef} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ value, setValue, readOnly = false }) => {
  const modules = {
    toolbar: readOnly ? [] : true,
    // syntax:true
  };

  const quillRef=useRef()

  const formats = ['code-block'];


  return (
    <div className="w-full h-full ">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={(value) => setValue(value)}
        style={{height:'calc(50vh - 32px)', border:'none'}}
        readOnly={readOnly}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default TextEditor;
