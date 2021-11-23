import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import InProgress from "./InProgress";
import Done from "./Done";

const MyActivitiesPage = () => {
  return (
    <div className="center">
      <div>
        <Tabs
          defaultActiveKey="wolfs"
          id="uncontrolled-tab-example"
          className="mb-3 my-tabs"
        >
          <Tab eventKey="wolfs" className="my-tab" title="Rozpracované (7)">
            <InProgress />
          </Tab>
          <Tab eventKey="rangers" title="Získané (12)">
            <Done />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default MyActivitiesPage;
