import React from "react";
import { Row, Accordion } from "react-bootstrap";
import ProgressCard from "./ProgressCard";

const InProgress = ({ userActivities }) => {
  const progressCards = userActivities.map((aktivita) => {
    return <ProgressCard key={aktivita.id} aktivita={aktivita} />;
  });

  return (
    <Accordion>
      <Row className="mt-2 mt-md-4">{progressCards}</Row>
    </Accordion>
  );
};

export default InProgress;
