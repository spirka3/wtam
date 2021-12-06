import React, { useState, useEffect } from "react";
import axios from "axios";
import OdborkaCard from "./odborka/OdborkaCard";
import { firstWord } from "../../../utils/functions";
import { Spinner } from "react-bootstrap";

const Section = ({ order, id, name, progKat }) => {
  const [odborkyById, setOdborkyById] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await axios
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
    }
    fetchData();
  }, [id, progKat]);

  console.log(odborkyById);

  const activityCards = odborkyById.map((aktivita) => {
    // console.log(aktivita);
    return (
      <OdborkaCard
        key={aktivita.id}
        id={aktivita.id}
        image={aktivita.img_url}
        name={aktivita.name}
        odborkyById={aktivita}
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
