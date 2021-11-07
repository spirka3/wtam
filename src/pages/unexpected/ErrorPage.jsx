import React from "react";
import { useLocation } from "react-router";

const ErrorPage = () => {
  const url = useLocation().pathname;

  return (
    <h4 className="text-center" style={{ marginTop: "200px" }}>
      Stranka <code>{url}</code> neexistuje ...
    </h4>
  );
};

export default ErrorPage;
