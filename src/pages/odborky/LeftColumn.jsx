import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Section from "./section/Section";
import axios from "axios";

const LeftColumn = ({ vekKat, progKat, loading, filterIsChecked }) => {
  const allowedKat = [
    "Vĺčatá a včielky",
    // "Rangeri a rangerky",
    "Roveri a Roverky",
    "Skauti a skautky",
  ];

  const [userActivities, setUserActivities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .post("api/active", {
          user_id: 10,
        })
        .then((res) => {
          console.log(res.data);
          setUserActivities(res.data);
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });
    }
    fetchData();
  }, []);

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
