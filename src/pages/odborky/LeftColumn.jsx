import React from "react";
import { Col } from "react-bootstrap";
import Section from "../../components/preskumaj/Section";

const LeftColumn = ({ setShowCardModal, vekKat, progKat }) => {
  const sectionsMaker = vekKat.map((section) => {
    return (
      <Section
        id={section.id}
        name={section.name}
        setShowCardModal={setShowCardModal}
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
