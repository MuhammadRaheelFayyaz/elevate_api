import React, {useRef, useState} from 'react';

const FileUpload = ({className, placeholder="Drag and drop your files here, or click to browse."}) => {
    const [isDragOver, setIsDragOver] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const ref=useRef()
    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        const files = Array.from(e.dataTransfer.files);
        setSelectedFiles(files);
    };

    const handleFileInputChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files);
    };

    const handleClick=()=>{
        ref.current.click()
    }
    return (
        <div
            className={`border-dashed border-2 border-gray-400 p-4 rounded-lg text-center cursor-pointer ${
                isDragOver ? 'bg-gray-100' : ''
            } ${className}`}
            onDragEnter={handleDragEnter}
            onDragOver={(e) => e.preventDefault()}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={()=>handleClick()}
        >
            <label className="mb-2">
                <i className="fas fa-upload text-4xl"></i>
            </label>
            <p>{placeholder}</p>
            <input
                type="file"
                multiple
                className="hidden"
                ref={ref}
                onChange={handleFileInputChange}
                accept=".jpg, .jpeg, .png, .gif, .pdf" // Specify the allowed file types
            />
            {selectedFiles.length > 0 && (
                <div className="mt-4">
                    <p>Selected Files:</p>
                    <ul>
                        {selectedFiles.map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FileUpload;
