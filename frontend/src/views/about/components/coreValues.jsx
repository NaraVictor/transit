import React from "react";

//
import jigsaw from "../../../static/svg/JigSaw.svg";
import loyalty from "../../../static/svg/loyalty.svg";
import respect from "../../../static/svg/respect.svg";

const CoreValues = (props) => {
	return (
		<section className="core-values p-5 mb-5 text-white-50 text-center">
			<div className="container">
				<h2>Our Values</h2>
				<div className="row my-5">
					<div className="col-md-4 col-12 mb-4">
						<img src={jigsaw} alt="integrity icon" />
						<h5>Integrity</h5>
					</div>
					<div className="col-md-4 col-12 mb-4">
						<img src={loyalty} alt="integrity icon" />
						<h5>Loyalty</h5>
					</div>
					<div className="col-md-4 col-12">
						<img src={respect} alt="integrity icon" />
						<h5>Respect</h5>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CoreValues;
