import React from "react";
import { Carousel } from "react-bootstrap";

const MiniCarousel = ({ size = 50 }) => {
  const Image = () => {
    return (
      <img
        style={{
          height: `${size}px`,
          width: `${size}px`,
          marginRight: "0.75rem",
          opacity: "0.8",
          display: "inline",
        }}
        src="https://www.skauting.sk/wp-content/uploads/2017/04/skauting-program-odborka-vlcata-42-200x180.png"
        alt="First slide"
      />
    );
  };

  return (
    <Carousel variant="dark" indicators={false} interval={null}>
      <Carousel.Item>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{
              height: `${size}px`,
              width: `${size}px`,
              marginRight: "0.75rem",
              opacity: "0.8",
              display: "inline",
            }}
            src="https://www.skauting.sk/wp-content/uploads/2017/04/skauting-program-odborka-vlcata-42-200x180.png"
            alt="First slide"
          />
          <img
            style={{
              height: `${size}px`,
              width: `${size}px`,
              marginRight: "0.75rem",
              opacity: "0.8",
              display: "inline",
            }}
            src="https://www.skauting.sk/wp-content/uploads/2017/04/skauting-program-odborka-vlcata-42-200x180.png"
            alt="First slide"
          />
          <img
            style={{
              height: `${size}px`,
              width: `${size}px`,
              marginRight: "0.75rem",
              opacity: "0.8",
              display: "inline",
            }}
            src="https://www.skauting.sk/wp-content/uploads/2017/04/skauting-program-odborka-vlcata-42-200x180.png"
            alt="First slide"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default MiniCarousel;
