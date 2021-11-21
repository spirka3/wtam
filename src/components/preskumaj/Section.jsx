import React, { useState, useEffect } from "react";
import axios from "axios";
import MyCard from "./MyCard";

const Section = ({ id, name, setShowCardModal, progKat }) => {
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

  const activityCards = odborkyById.map((aktivita) => {
    // console.log(aktivita);
    return (
      <MyCard
        key={aktivita.id}
        id={aktivita.id}
        setShowCardModal={setShowCardModal}
        image={aktivita.img_url}
        name={aktivita.name}
      />
    );
  });

  return (
    <div id={id} style={{ marginBottom: "2.5rem" }}>
      <h3>{name}</h3>
      <p style={{ width: "90%" }}></p>
      {activityCards}
    </div>
  );
};

export default Section;
