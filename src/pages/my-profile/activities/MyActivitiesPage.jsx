import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import InProgress from "./InProgress";
import Done from "./Done";

const MyActivitiesPage = () => {
  return (
    <>
      <div>
        <Tabs
          defaultActiveKey="wolfs"
          id="uncontrolled-tab-example"
          className="mb-3 my-tabs"
        >
          <Tab eventKey="wolfs" title="Vĺčatá a včielky">
            <InProgress />
            <Done />
            {/*<Todo />*/}
          </Tab>
          <Tab eventKey="rangers" title="Skauti a rangeri" />
          <Tab eventKey="rovers" title="Roveri" />
        </Tabs>
      </div>
    </>
  );
};

export default MyActivitiesPage;
