import React, { useState } from "react";

import { Modal, Button } from "react-bootstrap";
import { useAuthContext } from "../../providers/AuthProvider";
//import css from "./CardModal.css";

const CardModal = ({ id, odborka, show, setClose }) => {
  const { auth } = useAuthContext();

  const { name, img_url, tasks } = odborka;

  const [isAdded, setIsAdded] = useState(false);
  const btnColor = isAdded ? "#B6DE92" : "#F2E272";
  const btnText = isAdded ? "Ukáž progres" : "Pridať odborku";

  const taskMapping = tasks.map((task) => {
    return <li key={task.id}>{task.description}</li>;
  });

  return (
    <div>
      <Modal show={show} onHide={setClose} key={id}>
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
            /* onClick={addItem} */
          >
            <strong>{btnText}</strong>
          </Button>
          <Button variant="light" onClick={setClose}>
            Zavriet
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CardModal;
