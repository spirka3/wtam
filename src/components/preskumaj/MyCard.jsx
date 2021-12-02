import React, { useState } from "react";
import { Card } from "react-bootstrap";

import CardModal from "./../modals/CardModal";

const MyCard = ({ id, odborkyById, image, name }) => {
  console.log(odborkyById);

  const [show, setShow] = useState(false);
  const closeHandler = () => setShow(false);
  const showHandler = () => setShow(true);

  return (
    <div
      className="my-card"
      style={{
        display: "inline-block",
        margin: "1%",
        cursor: "pointer",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        zIndex: "99",
      }}
    >
      <Card
        onClick={showHandler}
        style={{
          padding: "1rem",
          border: "none",
          backgroundColor: "rgba(255, 255, 255, 0)",
        }}
        className="my-card"
      >
        <Card.Img
          style={{
            padding: "1rem",
            width: "10rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          variant="top"
          src={image}
        />
        <Card.Body style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}>
          <Card.Title className="text-center card-title">{name}</Card.Title>
        </Card.Body>
      </Card>
      <CardModal
        key={id}
        id={id}
        odborka={odborkyById}
        show={show}
        setClose={closeHandler}
      />
    </div>
  );
};

export default MyCard;
