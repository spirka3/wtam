import React from "react";
import { Col } from "react-bootstrap";
import Section from "./section/Section";

const LeftColumn = ({ vekKat, progKat }) => {
  const allowedKat = [
    "Vĺčatá a včielky",
    // "Rangeri a rangerky",
    "Roveri a Roverky",
    "Skauti a skautky",
  ];

  const sectionsMaker = vekKat
    .filter((s) => allowedKat.includes(s.name))
    .map((section, i) => {
      return (
        <Section
          order={i}
          id={section.id}
          name={section.name}
          progKat={progKat}
        />
      );
    });

  return (
    <Col
      className="odborky"
      xs={12}
      sm={12}
      md={9}
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {sectionsMaker}
    </Col>
  );
};

export default LeftColumn;
