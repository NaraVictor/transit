import React from "react";
import { Container } from "react-bootstrap";
import Slider from "./../../components/slider";
import Contact from "./components/contact";
// import FAQ from "./components/faq";
import LocateUs from "./components/locate";

const SupportPage = (props) => {
	return (
		<section className="support-page">
			<Slider>
				<Container>
					<section>
						<div className="row">
							<div className="col-md-7 col-12">
								<h1 className="text-white">
									We are obssessed with satisfying{" "}
									<span className="transit-text-secondary">YOU</span> so much
									that, we wanna get personal and serve you better!
								</h1>
							</div>
						</div>
					</section>
				</Container>
			</Slider>
			<Contact />
			<LocateUs />
			{/* <FAQ /> */}
		</section>
	);
};

export default SupportPage;
