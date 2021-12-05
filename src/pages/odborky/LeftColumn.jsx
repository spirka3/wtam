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
    <div class="odborky col-12 col-md-8 col-lg-9 order-2 order-md-1"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {sectionsMaker}
    </div>
  );
};

export default LeftColumn;
