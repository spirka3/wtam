import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

import "./index.css";
import RightColumn from "./RightColumn";
import LeftColumn from "./LeftColumn";
import axios from "axios";

const OdborkyPage = () => {
  const odborky = "odborky";

  const [vekKat, setVekKat] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .post("api/age_categories")
        .then((res) => {
          console.log(res.data);
          setVekKat(res.data);
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });
    }
    fetchData();
  }, []);

  return (
    <Row>
      <LeftColumn vekKat={vekKat} progKat={odborky} />
      <RightColumn />
    </Row>
  );
};

export default OdborkyPage;
