import React from "react";
import { useLocation } from "react-router";
import { BiTime } from "react-icons/all";

const EmptyPage = () => {
  return (
    <h3 className="text-center" style={{ marginTop: "200px" }}>
      Na stránke sa ešte pracuje, prídte prosím neskôr.
      <BiTime
        size="40"
        style={{ marginTop: "-0.75rem", marginLeft: "0.75rem" }}
      />
    </h3>
  );
};

export default EmptyPage;
