import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import MiniCarousel from "./MiniCarousel";

const Done = () => {
  const MyCard = ({ color, title, number, url }) => {
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

  return (
    <>
      <h3 style={{ marginTop: "1.15rem" }}>Ziskane</h3>
      <Row>
        <Col>
          <MyCard
            color="orange"
            title="Odborky"
            number="1"
            url="https://www.skauting.sk/wp-content/uploads/2017/03/skauting-program-odborky-skautske-bttn.png"
          />
        </Col>
        <Col>
          <MyCard
            color="green"
            title="Vyzvy"
            number="3"
            url="https://www.skauting.sk/wp-content/uploads/2017/07/skauting-program-vyzvy-bttn.png"
          />
        </Col>
        <Col>
          <MyCard
            color="blue"
            title="Ocenenia"
            number="1"
            url="https://www.skauting.sk/wp-content/uploads/2019/01/skauting-program-najvyssie-ocenenie-medvedi-skaut-bttn.png"
          />
        </Col>
      </Row>
    </>
  );
};

export default Done;
