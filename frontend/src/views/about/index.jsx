import React from "react";
import Slider from "../../components/slider";
import { Container } from "react-bootstrap";
import AboutUs from "./components/aboutus";
import CoreValues from "./components/coreValues";
import Team from "./components/team";
import MissionVision from "./components/missionvision";

const AboutPage = (props) => {
	return (
		<div className="about-page">
			<Slider>
				<Container className="text-white">
					<div className="row">
						<div className="col-md-7">
							<p className="about-hero-text">
								We offer a mark of friendship and an opportunity for clients to
								be the best in their industries.
								<span className="transit-text-secondary pl-3">
									We give out our best.
								</span>
							</p>
						</div>
					</div>
				</Container>
			</Slider>

			<AboutUs />
			<MissionVision />
			<CoreValues />
			<Team />
		</div>
	);
};

export default AboutPage;
