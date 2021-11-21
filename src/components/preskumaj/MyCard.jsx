import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const MyCard = ({ id, setShowCardModal, image, name }) => {
  const [hoveredCard, setHoveredCard] = useState(undefined);

  const handleMouseOver = (id) => {
    // setHoveredCard(id);
  };

  const handleMouseOut = () => {
    setHoveredCard(undefined);
  };
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
      onClick={() => setShowCardModal({})}
      onMouseOver={() => handleMouseOver(id)}
      onMouseOut={handleMouseOut}
    >
      <Card
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
          <Card.Title className="text-center">{name}</Card.Title>
          {hoveredCard === id && <Button>Hi</Button>}
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyCard;
