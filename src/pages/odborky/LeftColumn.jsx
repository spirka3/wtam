import { fakeOdborky, fakeOdborky1 } from "../../utils/fakeData";
import { Badge, Button, Card, Col } from "react-bootstrap";
import React, { useState } from "react";

const LeftColumn = ({ setShowCardModal }) => {
  const [hoveredCard, setHoveredCard] = useState(undefined);

  const handleMouseOver = (id) => {
    // setHoveredCard(id);
  };

  const handleMouseOut = () => {
    setHoveredCard(undefined);
  };

  const MyCard = ({ id }) => {
    return (
      <div
        className="my-card"
        style={{
          display: "inline-block",
          cursor: "pointer",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          zIndex: "99",
        }}
        onClick={() => setShowCardModal({})}
        onMouseOver={() => handleMouseOver(id)}
        onMouseOut={handleMouseOut}
      >
        <Card
          style={{
            padding: "1rem",
            border: "none",
            backgroundColor: "rgba(255, 255, 255, 0)",
          }}
          className="my-card"
        >
          {id % 3 === 1 && (
            <Badge bg="warning" className="my-badge">
              Bud prvy
            </Badge>
          )}
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
            {hoveredCard === id && <Button>Hi</Button>}
          </Card.Body>
        </Card>
      </div>
    );
  };

  const Section = ({ name, id }) => {
    return (
      <div id={id} style={{ marginBottom: "2.5rem" }}>
        <h2>{name}</h2>
        <p class="mb-4 mt-4 activity-description">
          U vĺčat a včielok majú mnohé odborky rozprávkový charakter (Žabí
          princ, Hobit) alebo sa už zameriavajú na konkrétne reálne oblasti, na
          ktoré neskôr nadväzujú aj skautské odborky (Táborník, Hvezdár).
          Odborky často plnia kolektívne so skupinou priateľov. Majú iba jeden
          stupeň a ich nášivka má trojuholníkový tvar a červený lem.
        </p>
        <div
          style={{
            display: "flex",
            // justifyContent: "space-between",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
          className="odborky"
        >
          {fakeOdborky.map((_, id) => (
            <MyCard id={id} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <Col xs={12} sm={12} md={9}>
      <Section id="1" name={"Vlčiacke a včielkarske odborky"} />
      <Section id="2" name={"Skauti a rangeri"} />
      <Section id="3" name={"Roveri"} />
    </Col>
  );
};

export default LeftColumn;
