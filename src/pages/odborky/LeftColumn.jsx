import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Section from "./section/Section";
import axios from "axios";

const LeftColumn = ({ vekKat, progKat, filterIsChecked }) => {
  const allowedKat = [
    "Vĺčatá a včielky",
    // "Rangeri a rangerky",
    "Roveri a Roverky",
    "Skauti a skautky",
  ];

  const loadUserActivities = () => {
    axios
      .post("api/active", {
        user_id: 10,
      })
      .then((res) => {
        const filterActivities = res.data.filter((a) =>
          a.tasks.some((t) => t.task_state !== "splnene")
        );
        setActivities((prev) => {
          return {
            ...prev,
            active: filterActivities,
          };
        });
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  const [activities, setActivities] = useState({});

  useEffect(() => {
    loadUserActivities();
  }, []);

  // const { activities } = useActivityContext();

  const userActivities = activities.active || [];

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
