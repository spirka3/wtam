import React from "react";
import { FaVolleyballBall, FaMedal, AiFillCompass } from "react-icons/all";

const MobileMenuFixed = () => {
  return (
    <div className="mobile-menu-fixed">
      <ul>
        <li className="text-left pr-0">
          <a href="/odborky">
            <FaMedal
              color="#ffff"
              style={{
                marginRight: "0.5rem",
                fill: "#ffff",
              }}
              size={20}
            />
            <span>Odborky</span>
          </a>
        </li>
        <li className="text-left">
          <a href="/progres">
            <FaVolleyballBall
              color="#ffff"
              style={{
                marginRight: "0.5rem",
                fill: "#ffff",
              }}
              size={20}
            />
            <span>Moje Aktivity</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenuFixed;
