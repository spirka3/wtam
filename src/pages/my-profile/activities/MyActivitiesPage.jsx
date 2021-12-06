import React, { useEffect, useState } from "react";
import { Tabs, Tab, Spinner } from "react-bootstrap";
import InProgress from "./in-progress/InProgress";
import Achieved from "./achieved/Achieved";

import "./in-progress/index.css";
import axios from "axios";

const MyActivitiesPage = () => {
  const [numOfAchieved, setNumOfAchieved] = useState(0);

  const [userActivities, setUserActivities] = useState();
  useEffect(() => {
    async function fetchData() {
      await axios
        .post("api/active", {
          user_id: 10,
        })
        .then((res) => {
          // console.log(res.data);
          setUserActivities(res.data);
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });
    }
    fetchData();
  }, []);

  if (userActivities === undefined || numOfAchieved === undefined) {
    return (
      <div className="center my-activities-container">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  return (
    <div className="center my-activities-container">
      <div class="col-12">
        <Tabs
          defaultActiveKey="progress"
          id="uncontrolled-tab-example"
          className="mb-3 my-tabs"
        >
          <Tab
            eventKey="progress"
            className="my-tab"
            title={`Rozpracované (${userActivities.length})`}
          >
            <InProgress userActivities={userActivities} />
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
