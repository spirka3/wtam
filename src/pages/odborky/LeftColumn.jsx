import { fakeOdborky } from "../../utils/fakeData";
import { Card, Col } from "react-bootstrap";
import React from "react";

const LeftColumn = ({ setShowCardModal }) => {
  const MyCard = ({ card }) => {
    return (
      <div
        className="my-card"
        style={{
          display: "inline-block",
          margin: "1%",
          cursor: "pointer",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
        onClick={() => setShowCardModal({})}
      >
        {/* TODO set card */}
        <Card
          style={{
            padding: "1rem",
            border: "none",
            backgroundColor: "rgba(255, 255, 255, 0)",
          }}
          className="my-card"
        >
          <Card.Img
            style={{
              padding: "1rem",
              width: "10rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            variant="top"
            src="https://www.skauting.sk/wp-content/uploads/2017/04/skauting-program-odborka-vlcata-43-200x180.png"
          />
          <Card.Body style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}>
            <Card.Title className="text-center">Animáčik</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  };

  const Section = ({ id }) => {
    return (
      <div id={id} style={{ marginBottom: "2.5rem" }}>
        <h3>Vlčiacke a včielkarske odborky</h3>
        <p style={{ width: "90%" }}>
          U vĺčat a včielok majú mnohé odborky rozprávkový charakter (Žabí
          princ, Hobit) alebo sa už zameriavajú na konkrétne reálne oblasti, na
          ktoré neskôr nadväzujú aj skautské odborky (Táborník, Hvezdár).
          Odborky často plnia kolektívne so skupinou priateľov. Majú iba jeden
          stupeň a ich nášivka má trojuholníkový tvar a červený lem.
        </p>
        {fakeOdborky.map(() => (
          <MyCard />
        ))}
      </div>
    );
  };

  return (
    <Col
      className="odborky"
      xs={12}
      sm={12}
      md={9}
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <Section id="1" />
      <Section id="2" />
      <Section id="3" />
    </Col>
  );
};

export default LeftColumn;
