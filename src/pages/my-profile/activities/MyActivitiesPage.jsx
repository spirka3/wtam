import React, { useEffect, useState } from "react";
import { Tabs, Tab, Spinner } from "react-bootstrap";
import InProgress from "./in-progress/InProgress";
import Achieved from "./achieved/Achieved";

import "./in-progress/index.css";
import axios from "axios";
import { useToastContext } from "../../../providers/ToastProvider";

const MyActivitiesPage = () => {
  const { setToast } = useToastContext();

  const [achievedActivities, setAchievedActivities] = useState();
  const [userActivities, setUserActivities] = useState();
  const [toggle, setToggle] = useState();

  const loadAchievedActivities = () => {
    axios
      .post("api/completed", {
        user_id: 10,
      })
      .then((res) => {
        if (achievedActivities === undefined) {
          console.log("first response", res.data);
          setAchievedActivities(res.data);
          return;
        }
        if (achievedActivities.length !== res.data.length) {
          console.log("NEW COMPLETED");
          setToast({ message: "Získal si novú odborku", time: "Práve teraz" });
          setAchievedActivities(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  const loadUserActivities = () => {
    axios
      .post("api/active", {
        user_id: 10,
      })
      .then((res) => {
        const filterActivities = res.data.filter((a) =>
          a.tasks.some((t) => t.task_state !== "splnene")
        );
        setUserActivities(filterActivities);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  useEffect(() => {
    setTimeout(() => {
      console.log("tick");
      loadUserActivities();
      loadAchievedActivities();
      setToggle((prev) => !prev);
    }, 3000);
  }, [toggle]);

  if (userActivities === undefined || achievedActivities === undefined) {
    return (
      <div className="center my-activities-container">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  return (
    <div className="center my-activities-container">
      <div className="col-12">
        <Tabs
          defaultActiveKey="progress"
          id="uncontrolled-tab-example"
          className={`mb-3 my-tabs`}
        >
          <Tab
            eventKey="progress"
            className="my-tab"
            title={`Rozpracované (${userActivities.length})`}
          >
            <InProgress userActivities={userActivities} />
          </Tab>
          <Tab
            eventKey="achieved"
            title={`Získané (${achievedActivities.length})`}
          >
            <Achieved achievedActivities={achievedActivities} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default MyActivitiesPage;
