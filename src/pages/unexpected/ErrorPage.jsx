import React from "react";
import { useLocation } from "react-router";

const ErrorPage = () => {
  const url = useLocation().pathname;

  return (
    <h3 className="text-center" style={{ marginTop: "200px" }}>
      Mrzí nás to, ale stránka <code>{url}</code> neexistuje.
    </h3>
  );
};

export default ErrorPage;
