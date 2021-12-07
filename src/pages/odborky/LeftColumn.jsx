import React from "react";
import { Spinner } from "react-bootstrap";
import Section from "./section/Section";

const LeftColumn = ({
  vekKat,
  progKat,
  loading,
  userActivities,
  filterIsChecked,
}) => {
  const allowedKat = [
    "Vĺčatá a včielky",
    // "Rangeri a rangerky",
    "Roveri a Roverky",
    "Skauti a skautky",
  ];

  console.log(userActivities);

  const sectionsMaker = vekKat
    .filter((s) => allowedKat.includes(s.name))
    .map((section, i) => {
      return (
        <Section
          order={i}
          id={section.id}
          name={section.name}
          progKat={progKat}
          userActivities={userActivities}
          filterIsChecked={filterIsChecked}
        />
      );
    });

  return (
    <div
      className="odborky col-12 col-md-8 col-lg-9 order-2 order-md-1"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {loading ? <Spinner animation="border" role="status" /> : sectionsMaker}
    </div>
  );
};

export default LeftColumn;
