import React, { useState } from "react";

import { Modal, Button } from "react-bootstrap";
//import css from "./OdborkaModal.css";

const OdborkaModal = ({ odborka, onHide, addItem, isAdded }) => {
  const { name, img_url, tasks } = odborka;

  const btnColor = isAdded ? "#B6DE92" : "#F2E272";
  const btnText = isAdded ? "Ukáž progres" : "Pridať odborku";

  const taskMapping = tasks.map((task) => {
    return <li key={task.id}>{task.description}</li>;
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
        <ol>{taskMapping}</ol>
      </Modal.Body>
      <Modal.Footer>
        <div style={{ marginLeft: "0", marginRight: "auto" }}>
          {isAdded && <h6>✔ Odborka bola pridana</h6>}
        </div>
        <Button
          style={{ backgroundColor: btnColor, borderColor: btnColor }}
          onClick={() => {
            console.log("click");
            addItem();
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
