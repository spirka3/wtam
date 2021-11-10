import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import MiniCarousel from "./MiniCarousel";

const Done = () => {
  const MyCard = ({ color, title, number }) => {
    return (
      <Card>
        <Card.Header
          style={{
            backgroundColor: color,
            padding: ".5rem",
            color: "white",
            opacity: "0.5",
          }}
        >
          {title}
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

  return (
    <>
      <h3 style={{ marginTop: "2rem" }}>Ziskane</h3>
      <Row>
        <Col>
          <MyCard color="orange" title="Odborky" number="1" />
        </Col>
        <Col>
          <MyCard color="green" title="Vyzvy" number="3" />
        </Col>
        <Col>
          <MyCard color="blue" title="Ocenenia" number="1" />
        </Col>
      </Row>
    </>
  );
};

export default Done;
