import React from "react";
import { FaVolleyballBall, FiActivity } from "react-icons/all";

const MobileMenuFixed = () => {

  return (
    <div className="mobile-menu-fixed">
		<ul>
			<li class="text-left">
				<a href="#">
				<FaVolleyballBall
					color="#ffff"
					style={{
					marginRight: "0.5rem",
					fill: "#ffff",
					}}
					size={20}
				/>
				<span>Oborky</span>
				</a>
			</li>
			<li class="text-right">
				<a href="#">
				<FiActivity
					color="#ffff"
					style={{
					marginRight: "0.5rem",
					fill: "#ffff",
					}}
					size={20}
				/>
				<span>Moje aktivity</span>
				</a>
			</li>
		</ul>
	</div>
  );
};

export default MobileMenuFixed;
