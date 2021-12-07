import React, { useContext, useState, createContext, useEffect } from "react";
import axios from "axios";
import { useToastContext } from "./ToastProvider";

const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
  const { setToast } = useToastContext();

  const [toggle, setToggle] = useState();
  const [activities, setActivities] = useState({
    active: undefined,
    completed: undefined,
  });

  const loadAchievedActivities = () => {
    axios
      .post("api/completed", {
        user_id: 10,
      })
      .then((res) => {
        if (activities.completed === undefined) {
          // setToast({ message: "Získal si novú odborku", time: "Práve teraz" });
          console.log("first response", res.data);
          setActivities((prev) => {
            return {
              ...prev,
              completed: res.data,
            };
          });
          return;
        }
        if (activities.completed.length !== res.data.length) {
          console.log("NEW COMPLETED");
          setToast({ message: "Získal si novú odborku", time: "Práve teraz" });
          setActivities((prev) => {
            return {
              ...prev,
              completed: res.data,
            };
          });
        }
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  const loadUserActivities = () => {
    axios
      .post("api/active", {
        user_id: 10,
      })
      .then((res) => {
        const filterActivities = res.data.filter((a) =>
          a.tasks.some((t) => t.task_state !== "splnene")
        );
        setActivities((prev) => {
          return {
            ...prev,
            active: filterActivities,
          };
        });
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  useEffect(() => {
    setTimeout(() => {
      console.log("tick");
      loadUserActivities();
      loadAchievedActivities();
      setToggle((prev) => !prev);
    }, 3000);
  }, [toggle]);

  return (
    <ActivityContext.Provider value={{ activities, setActivities }}>
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivityContext = () => useContext(ActivityContext);
