import React from "react";

// partners logos
import danara from "../../../static/img/logos/danara.png";
import wash from "../../../static/img/logos/wash-n-go.jpg";
import zen from "../../../static/img/logos/zen-logo.jpg";

const Partners = (props) => {
	return (
		<section className="partners" id="partners">
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-12">
						<h2 className="text-white">Partners</h2>
						<p>Companies helping us provide that unique experience</p>
					</div>
					<div className="col-md-8 col-12 text-center">
						<img
							src={danara}
							alt="partner logo"
							className="partner-logo mx-md-4 my-sm-2"
							title="Danara Digitals"
						/>
						<img
							src={zen}
							alt="partner logo"
							className="partner-logo mx-md-4 my-sm-2"
							title="Zen Logistics"
						/>
						<img
							src={wash}
							alt="partner logo"
							className="partner-logo mx-md-4 my-sm-2"
							title="Wash and Go"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Partners;
