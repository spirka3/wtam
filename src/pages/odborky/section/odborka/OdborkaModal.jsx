import React, { useEffect, useState } from "react";

import { Modal, Button } from "react-bootstrap";
import { Redirect } from "react-router";

const OdborkaModal = ({ isDone, odborka, onHide, addItem, isAdded }) => {
  const [tab, setTab] = useState("");
  const [stupen, setStupen] = useState(odborka.items[0]);
  const [stupenButtonName, setStupenButtonName] = useState(
    "Zobraz Červený stupeň"
  );

  let btnColor = "";
  if (isDone) {
    btnColor = "#bec454";
  } else if (isAdded) {
    btnColor = "#e38201";
  } else {
    btnColor = "#558776";
  }

  let btnText = "";
  if (isDone) {
    btnText = "Získané";
  } else if (isAdded) {
    btnText = "Rozpracované";
  } else {
    btnText = "Pridať odborku";
  }

  const taskMapping = stupen.tasks.map((task) => {
    return <li key={task.id}>{task.description}</li>;
  });

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

  if (tab === "progress") {
    return (
      <Redirect
        push
        to={{
          pathname: "/progres",
          state: { tab: "progress" },
        }}
      />
    );
  }
  if (tab === "done") {
    return (
      <Redirect
        push
        to={{
          pathname: "/progres",
          state: { tab: "achieved" },
        }}
      />
    );
  }

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
            color: "white",
          }}
          title={!isAdded && "Po pridaní odborky môžeš začať splňať úlohy"}
          onClick={() => {
            if (isDone) {
              setTab("done");
            } else if (isAdded) {
              setTab("progress");
            } else {
              addItem(odborka.items[0].id);
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
