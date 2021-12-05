import React, { useState, useRef } from "react";
import { IoIosAttach } from "react-icons/all";

const UploadButton = () => {
  const [uploadedFileName, setUploadedFileName] = useState();
  const inputRef = useRef();

  const handleUpload = () => {
    inputRef.current?.click();
  };
  const handleDisplayFileDetails = () => {
    inputRef.current?.files &&
      setUploadedFileName(inputRef.current.files[0].name);
  };
  return (
    <div className="btn btn-light">
      <input
        ref={inputRef}
        onChange={handleDisplayFileDetails}
        className="d-none"
        type="file"
      />
      <div onClick={handleUpload}>
        <IoIosAttach size={20} />
        <span>{uploadedFileName ? uploadedFileName : "Vyber súbor"}</span>
      </div>
    </div>
  );
};

export default UploadButton;
