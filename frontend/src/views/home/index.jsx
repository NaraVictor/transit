import React from "react";
import Track from "./components/track";
import Tasks from "./components/tasks";
import Services from "./components/services";
import Value from "./components/value";
import Partners from "./components/partners";
import { Container } from "react-bootstrap";
import HowItWorks from "./components/how";

//images
import cardbox from "../../static/img/cardbox.png";

const HomePage = (props) => {
	return (
		<div className="mb-5 pb-1">
			<Container>
				<section className="home-hero row pt-3">
					<div className="home-hero-text col-md-6">
						<h3 className="transit-text-secondary">
							We've got all your parcel & logistics needs covered
						</h3>
						<a href="tel:+233550217104" className="btn-t-primary">
							Lets Talk
						</a>
					</div>
					<span className="col-md-4">
						<img src={cardbox} alt="" className="home-hero-img" />
					</span>
				</section>
			</Container>

			<section className="tasks-section bg-dark py-5 mt-4">
				<Track />
				<HowItWorks />
				<Tasks />
			</section>

			<Services />
			<Value />
			<Partners />
		</div>
	);
};

export default HomePage;
