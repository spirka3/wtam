import React from "react";
import { Col, Row } from "react-bootstrap";
import AchievedCard from "./AchievedCard";

const Achieved = () => {
  return (
    <>
      <h3 style={{ marginTop: "1.15rem" }}>Ziskane</h3>
      <Row>
        <Col>
          <AchievedCard
            color="orange"
            title="Odborky"
            number="1"
            url="https://www.skauting.sk/wp-content/uploads/2017/03/skauting-program-odborky-skautske-bttn.png"
          />
        </Col>
        <Col>
          <AchievedCard
            color="green"
            title="Vyzvy"
            number="3"
            url="https://www.skauting.sk/wp-content/uploads/2017/07/skauting-program-vyzvy-bttn.png"
          />
        </Col>
        <Col>
          <AchievedCard
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

export default Achieved;
