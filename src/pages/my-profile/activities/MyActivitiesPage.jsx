import React from "react";
import { Tabs, Tab, Spinner } from "react-bootstrap";
import InProgress from "./in-progress/InProgress";
import Achieved from "./achieved/Achieved";

import "./in-progress/index.css";
import { useActivityContext } from "../../../providers/ActivityProvider";

const MyActivitiesPage = () => {
  const { activities } = useActivityContext();

  const userActivities = activities.active;
  const achievedActivities = activities.completed;

  console.log("achievedActivities", achievedActivities);

  if (userActivities === undefined || achievedActivities === undefined) {
    return (
      <div className="center my-activities-container">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  return (
    <div className="center my-activities-container mb-5">
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
