import React, { useState } from "react";

import { Modal, Button, Form } from "react-bootstrap";
//import css from "./OdborkaModal.css";

const OdborkaModal = ({ odborka, onHide, addItem, isAdded }) => {
  const { name, img_url, tasks } = odborka;
  const [showInput, setShowInput] = useState(false);
  const [taskId, setTaskId] = useState(null);

  const btnColor = isAdded ? "#B6DE92" : "#F2E272";
  const btnText = isAdded ? "Ukáž progres" : "Pridať odborku";

  const formInput = () => {
    if (showInput) {
      return (
        <div>
          <Form.Control
            required
            placeholder="napis kratku poznamku ku bodu, ktory chces splnit"
          />
        </div>
      );
    }
  };

  const taskMapping = tasks.map((task) => {
    return (
      <Form.Check
        type="radio"
        name={name}
        key={task.id}
        label={task.description}
        onChange={({ currentTarget: input }) => {
          console.log(task.id);
          setShowInput(input.value);
          setTaskId(task.id);
        }}
      />
    );
  });

  return (
    <>
      <Modal.Header closeButton style={{ textAlign: "center" }}>
        <Modal.Title className="mx-0">
          <img
            style={{
              display: "inline-block",
              width: "60px",
              height: "60px",
            }}
            src={img_url}
            alt="obr"
          />
          <p
            style={{
              textAlign: "center",
              marginLeft: "1rem",
              display: "inline-block",
            }}
          >
            {name}
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {taskMapping}
          {formInput()}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div style={{ marginLeft: "0", marginRight: "auto" }}>
          {isAdded && <h6>✔ Odborka bola pridana</h6>}
        </div>
        <Button
          style={{ backgroundColor: btnColor, borderColor: btnColor }}
          onClick={() => {
            console.log("click");
            addItem(taskId);
          }}
        >
          <strong>{btnText}</strong>
        </Button>
        <Button variant="light" onClick={onHide}>
          Zavriet
        </Button>
      </Modal.Footer>
    </>
  );
};

export default OdborkaModal;
