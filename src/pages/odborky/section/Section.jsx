import React, { useState, useEffect } from "react";
import axios from "axios";
import OdborkaCard from "./odborka/OdborkaCard";
import { firstWord } from "../../../utils/functions";
import { Spinner } from "react-bootstrap";

const Section = ({
  order,
  id,
  name,
  progKat,
  userActivities,
  filterIsChecked,
}) => {
  const [odborkyById, setOdborkyById] = useState([]);
  const [loading, setLoading] = useState(true);

  const activeActivityId = userActivities.map((a) => a.id);

  // console.log(userActivities);
  // console.log(activeActivityId);

  useEffect(() => {
    axios
      .post("api/activities", {
        age_category_id: id,
        activity_type: progKat,
      })
      .then((res) => {
        console.log(res.data);
        setOdborkyById(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }, [id, progKat]);

  console.log(odborkyById);

  const activityCards = odborkyById
    .filter(
      (aktivita) => !filterIsChecked || !activeActivityId.includes(aktivita.id)
    )
    .map((aktivita) => {
      // console.log(aktivita);
      return (
        <OdborkaCard
          key={aktivita.id}
          id={aktivita.id}
          image={aktivita.img_url}
          name={aktivita.name}
          odborkyById={aktivita}
          hasActive={activeActivityId.includes(aktivita.id)}
        />
      );
    });

  console.log("odborka", order);

  return (
    <div id={order} className="aktivity-section">
      {loading ? (
        <Spinner animation="border" role="status" />
      ) : (
        <>
          <h3>{firstWord(name)}</h3>
          <div className="row">{activityCards}</div>
        </>
      )}
    </div>
  );
};

export default Section;
