import React, { useEffect, useState } from "react";

import { Modal, Button } from "react-bootstrap";

const OdborkaModal = ({ odborka, onHide, addItem, isAdded }) => {
  const [stupen, setStupen] = useState(odborka.items[0]);
  const [stupenButtonName, setStupenButtonName] = useState(
    "Zobraz Červený stupeň"
  );

  const btnColor = isAdded ? "#B6DE92" : "#85CBF4";
  const btnText = isAdded ? "Ukáž progres" : "Pridať odborku";

  const taskMapping = stupen.tasks.map((task) => {
    return <li key={task.id}>{task.description}</li>;
  });

  const showItem = () => {
    window.location.replace("/progres");
  };

  console.log(stupen);

  useEffect(() => {
    if (stupen.level === "Zelený") {
      setStupenButtonName("Zobraz Červený stupeň");
    } else {
      setStupenButtonName("Zobraz Zelený stupeň");
    }
  }, [stupen.level]);

  const stupenButtonHandle = () => {
    if (stupen.level === "Zelený") {
      console.log("zeleny");
      setStupen(odborka.items[1]);
    } else if (stupen.level === "Červený") {
      console.log("cerveny");
      setStupen(odborka.items[0]);
    }
  };

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
            src={stupen.img_url}
            alt="obr"
          />
          <p
            style={{
              textAlign: "center",
              marginLeft: "1rem",
              display: "inline-block",
            }}
          >
            {stupen.name}
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ol>{taskMapping}</ol>
      </Modal.Body>
      <Modal.Footer>
        <div style={{ marginLeft: "0", marginRight: "auto" }}>
          {isAdded && <h6>✔ Pridaná</h6>}
        </div>
        {odborka.items.length === 2 && (
          <Button variant="warning" onClick={stupenButtonHandle}>
            {stupenButtonName}
          </Button>
        )}
        <Button
          style={{
            backgroundColor: btnColor,
            borderColor: btnColor,
            color: "black",
          }}
          onClick={() => {
            if (isAdded) {
              showItem();
            } else {
              addItem(stupen.id);
            }
          }}
        >
          {btnText}
        </Button>
        <Button variant="light" onClick={onHide}>
          Zavrieť
        </Button>
      </Modal.Footer>
    </>
  );
};

export default OdborkaModal;
