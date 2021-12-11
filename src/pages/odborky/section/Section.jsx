import React, { useState, useEffect } from "react";
import axios from "axios";
import OdborkaCard from "./odborka/OdborkaCard";
import { firstWord } from "../../../utils/functions";
import { Spinner } from "react-bootstrap";
import { useAuthContext } from "../../../providers/AuthProvider";

const Section = ({
  order,
  id,
  name,
  progKat,
  filterIsChecked,
  userActivities,
}) => {
  const [odborkyById, setOdborkyById] = useState([]);
  const [loading, setLoading] = useState(true);

  const { auth } = useAuthContext();

  const activeActivityId = userActivities.map((a) => a.id);
  // console.log(activeActivityId);

  useEffect(() => {
    axios
      .post("api/activities", {
        age_category_id: id,
        activity_type: progKat,
      })
      .then((res) => {
        // console.log(res.data);
        setOdborkyById(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }, [id, progKat]);

  // console.log(odborkyById);

  const filteredData = (data) => {
    if (!filterIsChecked || !auth.token) return data;
    return data.filter((aktivita) => !activeActivityId.includes(aktivita.id));
  };

  const activityCards = filteredData(odborkyById).map((aktivita) => {
    return (
      <OdborkaCard
        key={aktivita.id}
        id={aktivita.id}
        image={aktivita.img_url}
        name={aktivita.name}
        odborkyById={aktivita}
        hasActive={auth.token && activeActivityId.includes(aktivita.id)}
      />
    );
  });

  return (
    <div id={order} className="aktivity-section w-100">
      {loading ? (
        <Spinner animation="border" role="status" />
      ) : (
        <>
          <h3>{firstWord(name)}</h3>

          {filteredData(odborkyById).length ? (
            <div className="row">{activityCards}</div>
          ) : (
            <div className="row">
              <h6 style={{ marginTop: "2rem", marginBottom: "6rem" }}>
                V tejto kategórii máš už zapísané všetky aktivity
              </h6>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Section;
