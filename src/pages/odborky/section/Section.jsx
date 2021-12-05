import React, { useState, useEffect } from "react";
import axios from "axios";
import OdborkaCard from "./odborka/OdborkaCard";

const Section = ({ order, id, name, progKat }) => {
  const [odborkyById, setOdborkyById] = useState([]);

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
    <div id={order} style={{ paddingTop: "5rem" }}>
      <h3>{name}</h3>
      {activityCards}
    </div>
  );
};

export default Section;
