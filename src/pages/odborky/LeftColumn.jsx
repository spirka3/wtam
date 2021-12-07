import React from "react";
import { Spinner } from "react-bootstrap";
import Section from "./section/Section";
import { useActivityContext } from "../../providers/ActivityProvider";

const LeftColumn = ({ vekKat, progKat, filterIsChecked }) => {
  const allowedKat = [
    "Vĺčatá a včielky",
    // "Rangeri a rangerky",
    "Roveri a Roverky",
    "Skauti a skautky",
  ];

  const { activities } = useActivityContext();

  const userActivities = activities.active;

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
      {activities.active === undefined ? (
        <Spinner animation="border" role="status" />
      ) : (
        sectionsMaker
      )}
    </div>
  );
};

export default LeftColumn;
