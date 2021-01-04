import React from "react";
import { Container } from "react-bootstrap";
import Slider from "../../components/slider";
import TailoredServices from "./components/services";
import SprintZen from "./components/sprintzen";
import Subscriptions from "./components/subscriptions";

// images
import boxes from "../../static/img/boxes.png";

const SolutionsPage = (props) => {
	return (
		<div className="solutions-page">
			<Slider>
				<Container>
					<div className="row">
						<div className="col-md-5">
							<h1 className="text-white">
								We've got a solution for everyone for all situations and needs
							</h1>
							<h4 className="transit-text-secondary">Make a wish!</h4>
						</div>
					</div>
					<img src={boxes} alt="boxes" className="solutions-hero-image" />
				</Container>
			</Slider>

			<TailoredServices />
			<SprintZen />
			<Subscriptions />
		</div>
	);
};

export default SolutionsPage;
