import React from "react";

// partners logos
import danara from "../../../static/img/logos/danara.png";

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
							src={danara}
							alt="partner logo"
							className="partner-logo mx-md-4 my-sm-2"
							title="Danara Digitals"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Partners;
