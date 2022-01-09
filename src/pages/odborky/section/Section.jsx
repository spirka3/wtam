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
  const subCategories = [
    "Dobrovoľníctvo a občianstvo",
    "Príroda",
    "Šport",
    "Umenie a kultúra",
    "Zručnosti",
  ];

  const { auth } = useAuthContext();

  const [allActivities, setAllActivities] = useState([]);
  const [listedActivities, setListedActivities] = useState([]);
  const [completedIds, setCompletedIds] = useState([]);

  const [allIds, setAllIds] = useState([]);
  const [loading, setLoading] = useState(true);

  const [uncompletedIds, setUncompletedIds] = useState([]);

  const activeIds = userActivities.map((a) => a.id);

  useEffect(() => {
    const fetchData = () => {
      axios
        .post("api/activities", {
          age_category_id: id,
          activity_type: progKat,
        })
        .then((res) => {
          const sortedActivities = res.data.sort((a, b) =>
            a.name.localeCompare(b.name)
          );

          setAllActivities(sortedActivities);
          setAllIds(sortedActivities.map((a) => a.id));

          const activitiesByCheck = filterByCheckBox(sortedActivities);
          const activitiesByCheckAndText = filterByText(activitiesByCheck);

          console.log(activitiesByCheckAndText);

          const collection = collect(activitiesByCheckAndText);
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
          setCompletedIds(doneIds);
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

    console.log(activitiesByCheckAndText);

    const collection = collect(activitiesByCheckAndText);
    const groupByName = collection.groupBy("name");

    setListedActivities(groupByName.toArray());
  }, [searchText, filterIsChecked]);

  const filterByCheckBox = (activities) => {
    const uncompleted = allIds
      .filter((id) => !completedIds.includes(id))
      .filter((id) => !activeIds.includes(id));

    const checkCount =
      filterIsChecked.nezacate +
      filterIsChecked.rozpracovane +
      filterIsChecked.ziskane;

    if (checkCount === 0 || checkCount === 3 || !auth.token) {
      return activities;
    }

    if (!filterIsChecked.nezacate) {
      activities = activities.filter(
        (activity) => !uncompleted.includes(activity.id)
      );
    }

    if (!filterIsChecked.rozpracovane) {
      activities = activities.filter(
        (activity) => !activeIds.includes(activity.id)
      );
    }

    if (!filterIsChecked.ziskane) {
      activities = activities.filter(
        (activity) => !completedIds.includes(activity.id)
      );
    }

    return activities;
  };

  const filterByText = (activities) => {
    if (searchText === "") {
      return activities;
    }

    const normalizedSearchText = searchText
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");

    // if (!filterIsChecked) {
    const filtered = allActivities.filter((activity) => {
      const normalizedName = activity.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "");
      return normalizedName.includes(normalizedSearchText);
    });

    console.log(filtered);

    return filtered;
  };

  const ActivityCards = () =>
    listedActivities.map((activity) => {
      return (
        <OdborkaCard
          key={activity.items[0].id}
          odborka={activity}
          hasActive={auth.token && activeIds.includes(activity.items[0].id)}
          isDone={auth.token && completedIds.includes(activity.items[0].id)}
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

  const Subsection = ({ name, order }) => {
    const subsectionFilter = listedActivities
      .filter((a) => name.includes(a.items[0].expertske_odborky))
      .map((activity) => (
        <OdborkaCard
          key={activity.items[0].id}
          odborka={activity}
          hasActive={auth.token && activeIds.includes(activity.items[0].id)}
          isDone={auth.token && completedIds.includes(activity.items[0].id)}
        />
      ));

    if (subsectionFilter.length === 0) {
      return null;
    }

    return (
      <div id={order}>
        <h4 style={{ color: "gray" }}>
          <i>{name}</i>
        </h4>
        <div className="sub">
          {subsectionFilter.length ? subsectionFilter : <EmptyPhrase />}
        </div>
      </div>
    );
  };

  const createSubsections = subCategories.map((sub, i) => {
    return <Subsection name={sub} order={`_${i}`} />;
  });

  return (
    <div className="aktivity-section w-100" ref={refer}>
      <div id={order}>
        {loading ? (
          <Spinner animation="border" role="status" />
        ) : listedActivities.length ? (
          <div>
            <h3>{firstWord(name)}</h3>
            <div className="row">
              {name === "Skauti a skautky" && createSubsections}
              {name !== "Skauti a skautky" &&
                (listedActivities.length ? <ActivityCards /> : <EmptyPhrase />)}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Section;
