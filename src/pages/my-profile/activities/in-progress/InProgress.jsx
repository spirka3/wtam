import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Accordion } from "react-bootstrap";
import ProgressCard from "./ProgressCard";

const InProgress = () => {
  const [userActivities, setUserActivities] = useState([]);

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

  const progressCards = userActivities.map((aktivita) => {
    return (
      <ProgressCard
        key={aktivita.id}
        aktivita={aktivita}
        now={10}
        label={`1/10`}
      />
    );
  });

  return (
    <Accordion>
      <Row className="mt-2 mt-md-4">{progressCards}</Row>
    </Accordion>
  );
};

export default InProgress;
