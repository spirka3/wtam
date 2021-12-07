import React, { useRef, useState } from "react";
import { Form, Input } from "../../../../components/MyForm";
import { Button } from "react-bootstrap";
import { IoIosAttach } from "react-icons/all";
import axios from "axios";

const Formik = ({
  setSubTasks,
  selectedTasks,
  setSelectedTasks,
  setIsSent,
}) => {
  const [uploadedFileName, setUploadedFileName] = useState();
  const inputRef = useRef();

  const handleSubmit = () => {
    // TODO selectedTasks ulozit do DB

    for (let task of selectedTasks) {
      console.log(task.id);

      axios
        .post("api/progress", {
          user_id: 10,
          task_id: task.id,
          task_state: "nesplnene",
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });
    }

    setSubTasks((prev) => {
      const newTodo = prev.todo.filter((t) => !selectedTasks.includes(t));
      const newWait = [...prev.waiting, ...selectedTasks];
      return {
        todo: newTodo,
        waiting: newWait,
        done: prev.done,
      };
    });
    setSelectedTasks([]);
    setIsSent(true);
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
          style={{
            height: "36px",
            marginRight: "1rem",
            backgroundColor: "#85CBF4", // B6DE92 | 85CBF4
            borderColor: "#85CBF4",
            color: "black",
          }}
        >
          Poslať vedúcemu
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
