import React, { useState, useEffect } from "react";
import axios from "axios";
import OdborkaCard from "./odborka/OdborkaCard";
import { firstWord } from "../../../utils/functions";
import { Spinner } from "react-bootstrap";
import { useAuthContext } from "../../../providers/AuthProvider";
import { collect } from "collect.js";

const Section = ({
  refer,
  order,
  id,
  name,
  progKat,
  filterIsChecked,
  userActivities,
  searchText,
}) => {
  const { auth } = useAuthContext();

  const [allActivities, setAllActivities] = useState([]);
  const [listedActivities, setListedActivities] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [loading, setLoading] = useState(true);

  const activeIds = userActivities.map((a) => a.id);

  useEffect(() => {
    const fetchData = () => {
      axios
        .post("api/activities", {
          age_category_id: id,
          activity_type: progKat,
        })
        .then((res) => {
          console.log(res.data);
          const sortedActivities = res.data.sort((a, b) =>
            a.name.localeCompare(b.name)
          );

          setAllActivities(sortedActivities);

          const filtered = sortedActivities.filter(
            (activity) => !auth.user || !activeIds.includes(activity.id)
          );
          // const collection = collect(filtered);
          const collection = collect(sortedActivities);
          const groupByName = collection.groupBy("name");
          setListedActivities(groupByName.toArray());

          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });

      axios
        .post("api/completed", {
          user_id: 10,
        })
        .then((res) => {
          const doneIds = res.data.map((a) => a.id);
          setCompleted(doneIds);
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });
    };

    fetchData();
  }, [id, progKat]);

  useEffect(() => {
    const activitiesByCheck = filterByCheckBox(allActivities);
    const activitiesByCheckAndText = filterByText(activitiesByCheck);

    setListedActivities(activitiesByCheckAndText);
  }, [searchText, filterIsChecked]);

  const filterByCheckBox = (activities) => {
    const collection = collect(activities);
    const groupByName = collection.groupBy("name");

    if (!filterIsChecked || !auth.token) {
      return groupByName.toArray();
    }

    const filtered = activities.filter(
      (activity) => !activeIds.includes(activity.id)
    );

    const collectFiltered = collect(filtered);
    const groupByNameFiltered = collectFiltered.groupBy("name");

    return groupByNameFiltered.toArray();
  };

  const filterByText = (activities) => {
    if (searchText === "") {
      return activities;
    }

    const normalizedSearchText = searchText
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");

    if (!filterIsChecked) {
      const filtered = allActivities.filter((activity) => {
        const normalizedName = activity.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/\p{Diacritic}/gu, "");
        return normalizedName.includes(normalizedSearchText);
      });
      const collectfiltered = collect(filtered);
      const filteredGroupByName = collectfiltered.groupBy("name");
      return filteredGroupByName.toArray();
    }

    const filteredChecked = allActivities.filter(
      (activity) => !activeIds.includes(activity.id)
    );
    const filtered = filteredChecked.filter((activity) => {
      const normalizedName = activity.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "");
      return normalizedName.includes(normalizedSearchText);
    });

    const collectfiltered = collect(filtered);
    const filteredGroupByName = collectfiltered.groupBy("name");

    return filteredGroupByName.toArray();
  };

  const ActivityCards = () =>
    listedActivities.map((activity) => {
      return (
        <OdborkaCard
          key={activity.items[0].id}
          odborka={activity}
          hasActive={auth.token && activeIds.includes(activity.items[0].id)}
          isDone={auth.token && completed.includes(activity.items[0].id)}
        />
      );
    });

  const EmptyPhrase = () => {
    let phrase = "";
    if (searchText === "") {
      phrase = "V tejto kategórii máš už zapísané všetky aktivity";
    } else {
      phrase = "Nenašla sa žiadna zhoda s vyhľadávaným textom";
    }
    return (
      <h6 style={{ marginTop: "2rem", marginBottom: "6rem" }}>{phrase}</h6>
    );
  };

  return (
    <div className="aktivity-section w-100" ref={refer}>
      <div id={order}>
        {loading ? (
          <Spinner animation="border" role="status" />
        ) : (
          <div>
            <h3>{firstWord(name)}</h3>
            <div className="row">
              {listedActivities.length ? <ActivityCards /> : <EmptyPhrase />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
