import React from "react";
import { MdOutlineEmail, CgCopyright } from "react-icons/all";

const Footer = () => {
  return (
    <footer>
      <div className="inner-footer">
        <div className="copyright">
          <CgCopyright
            color="#ffff"
            style={{
              marginRight: "0.5rem",
              fill: "#ffff",
            }}
            size={20}
          />
          2021-2022 Skautsky Program
        </div>
        <div className="contact">
          <MdOutlineEmail
            color="#ffff"
            style={{
              marginRight: "0.5rem",
              fill: "#ffff",
            }}
            size={20}
          />
          <a className="mail-link" href="mailto:kontakt@scout.sk">
            kontakt@scout.sk
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
