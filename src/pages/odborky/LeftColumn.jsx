import React, { useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import Section from "./section/Section";
import axios from "axios";
import { animateScroll } from "react-scroll";

const LeftColumn = ({ vekKat, progKat, filterIsChecked, searchText }) => {
  const allowedKat = [
    "Vĺčatá a včielky",
    "Roveri a Roverky",
    "Skauti a skautky",
  ];

  const myRef0 = useRef(null);
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);

  const refs = [myRef0, myRef1, myRef2];

  useEffect(() => {
    setTimeout(() => {
      animateScroll.scrollTo(myRef1, {
        container: myRef1,
        offset: -70,
        duration: 400,
        smooth: true,
      });
    }, 400);
  }, [myRef2.current]);

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

  const userActivities = activities.active || [];

  const sectionsMaker = vekKat
    .filter((s) => allowedKat.includes(s.name))
    .map((section, i) => {
      return (
        <Section
          order={i}
          refer={refs[i]}
          id={section.id}
          name={section.name}
          progKat={progKat}
          userActivities={userActivities}
          filterIsChecked={filterIsChecked}
          searchText={searchText}
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
        marginBottom: "9rem",
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
