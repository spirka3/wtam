import React from "react";
import { FaVolleyballBall, FiActivity } from "react-icons/all";

const MobileMenuFixed = () => {
  return (
    <div className="mobile-menu-fixed">
      <ul>
        <li className="text-left">
          <a href="/odborky">
            <FaVolleyballBall
              color="#ffff"
              style={{
                marginRight: "0.5rem",
                fill: "#ffff",
              }}
              size={20}
            />
            <span>Vyzvy</span>
          </a>
        </li>
        <li className="text-right">
          <a href="/progres">
            <FiActivity
              color="#ffff"
              style={{
                marginRight: "0.5rem",
                fill: "#ffff",
              }}
              size={20}
            />
            <span>Ocenenia</span>
          </a>
        </li>
        <li className="text-left">
          <a href="/odborky">
            <FaVolleyballBall
              color="#ffff"
              style={{
                marginRight: "0.5rem",
                fill: "#ffff",
              }}
              size={20}
            />
            <span>MojeAktivity</span>
          </a>
        </li>
        <li className="text-left">
          <a href="/odborky">
            <FaVolleyballBall
              color="#ffff"
              style={{
                marginRight: "0.5rem",
                fill: "#ffff",
              }}
              size={20}
            />
            <span>Odhlasit</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenuFixed;
