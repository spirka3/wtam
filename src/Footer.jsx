import React from "react";
import { MdOutlineEmail } from "react-icons/all";


const Footer = () => {

  return (
    <footer>
		<div className="inner-footer">
			<div class="copyright">© 2021-2022 Skautsky Program</div>
				<div class="contact">
					<MdOutlineEmail
						color="#ffff"
						style={{
						marginRight: "0.5rem",
						fill: "#ffff",
						}}
						size={20}
					/>
				<a class="mail-link" href="mailto:kontakt@scout.sk">kontakt@scout.sk</a>
			</div>
		</div>
	</footer>
  );
};

export default Footer;
