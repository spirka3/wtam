import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import InProgress from "./in-progress/InProgress";
import Achieved from "./achieved/Achieved";

import "./in-progress/index.css";

const MyActivitiesPage = () => {
  const [numOfInProgress, setNumOfInProgress] = useState(0);
  const [numOfAchieved, setNumOfAchieved] = useState(0);

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
            <InProgress setNumOfInProgress={setNumOfInProgress} />
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
