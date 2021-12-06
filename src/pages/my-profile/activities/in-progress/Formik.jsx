import React, { useRef, useState } from "react";
import { Form, Input } from "../../../../components/MyForm";
import { Button, Toast, ToastBody } from "react-bootstrap";
import { IoIosAttach } from "react-icons/all";

const Formik = ({ setSubTasks, selectedTasks, setSelectedTasks }) => {
  const [uploadedFileName, setUploadedFileName] = useState();
  const inputRef = useRef();

  const [toast, setToast] = useState();

  const [isSent, setIsSent] = useState(false);

  const handleSubmit = () => {
    // TODO selectedTasks ulozit do DB
    setSubTasks((prev) => {
      const newTodo = prev.todo.filter((t) => !selectedTasks.includes(t));
      const newWait = [...prev.waiting, ...selectedTasks];
      return {
        todo: newTodo,
        waiting: newWait,
        done: prev.done,
      };
    });
    setIsSent(true);

    setTimeout(() => {
      setSelectedTasks([]);
    }, 5000);
  };

  const handleUpload = () => {
    inputRef.current?.click();
  };
  const handleDisplayFileDetails = () => {
    if (inputRef.current?.files) {
      setUploadedFileName(inputRef.current.files[0].name);
    }
  };

  return (
    <div className="p-4">
      <Form>
        <p style={{ fontWeight: "500", marginBottom: "0", margin: "0.25rem" }}>
          Úlohy ti musí overiť vedúci
        </p>
        <Input
          as="textarea"
          name="password"
          label=""
          placeholder="Napíš ako sa ti darilo, môžeš priložiť aj fotky"
          required
          style={{ minHeight: "6rem" }}
        />
      </Form>
      <div style={{ display: "flex", marginBottom: "1rem" }}>
        <Button
          onClick={handleSubmit}
          variant="success"
          style={{ height: "36px", marginRight: "1rem", width: "8rem" }}
        >
          {isSent ? "Odoslané ✔" : "Poslať vedúcemu"}
        </Button>
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
      </div>
    </div>
  );
};

export default Formik;