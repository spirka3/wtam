import React from "react";
import { BiTime } from "react-icons/all";

const EmptyPage = () => {
  return (
    <h1 className="text-center" style={{ marginTop: "12rem" }}>
      Na stránke sa ešte pracuje, prídte prosím neskôr.
      <BiTime
        size="40"
        style={{ marginTop: "-0.75rem", marginLeft: "0.75rem" }}
      />
    </h1>
  );
};

export default EmptyPage;
