import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import InProgress from "./in-progress/InProgress";
import Achieved from "./achieved/Achieved";

import "./in-progress/index.css";

const MyActivitiesPage = () => {
  const numOfInProgress = 7; // TODO
  const numOfAchieved = 10; // TODO

  return (
    <div className="center my-activities-container">
      <div>
        <Tabs
          defaultActiveKey="progress"
          id="uncontrolled-tab-example"
          className="mb-3 my-tabs"
        >
          <Tab
            eventKey="progress"
            className="my-tab"
            title={`Rozpracované (${numOfInProgress})`}
          >
            <InProgress />
          </Tab>
          <Tab eventKey="achieved" title={`Získané (${numOfAchieved})`}>
            <Achieved />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default MyActivitiesPage;
