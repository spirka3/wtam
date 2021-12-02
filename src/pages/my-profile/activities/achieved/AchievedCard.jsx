import React from "react";
import { Card } from "react-bootstrap";
import MiniCarousel from "./MiniCarousel";

const AchievedCard = ({ color, title, number, url }) => {
  return (
    <Card>
      <Card.Header
        style={{
          backgroundColor: color,
          padding: ".5rem",
          color: "white",
          backgroundSize: "cover",
          backgroundImage: `url('${url}')`,
        }}
      >
        <strong>{title}</strong>
      </Card.Header>
      <Card.Body>
        <h1
          style={{
            textAlign: "center",
            fontSize: "5rem",
            marginBottom: "2rem",
          }}
        >
          {number}
        </h1>

        <hr />
        <MiniCarousel />
      </Card.Body>
      <Card.Footer
        className="text-muted"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <span>Nazov</span>
        <span>Ziskane pred 2 dnami</span>
      </Card.Footer>
    </Card>
  );
};

export default AchievedCard;
