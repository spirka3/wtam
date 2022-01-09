import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

import "./index.css";
import RightColumn from "./RightColumn";
import LeftColumn from "./LeftColumn";
import axios from "axios";

const OdborkyPage = () => {
  const odborky = "odborky";

  const [vekKat, setVekKat] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchText, setSearchText] = useState("");
  const [filterIsChecked, setFilterIsChecked] = useState({
    nezacate: false,
    rozpracovane: false,
    ziskane: false,
  });

  useEffect(() => {
    async function fetchData() {
      await axios
        .post("api/age_categories")
        .then((res) => {
          setVekKat(res.data);
          setLoading(false);
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
      <LeftColumn
        vekKat={vekKat}
        progKat={odborky}
        loading={loading}
        filterIsChecked={filterIsChecked}
        searchText={searchText}
      />
      <RightColumn
        filterIsChecked={filterIsChecked}
        setFilterIsChecked={setFilterIsChecked}
        setSearchText={setSearchText}
      />
    </Row>
  );
};

export default OdborkyPage;
