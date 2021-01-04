import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "../components/navbar";
import HomePage from "./../views/home/index";
import AboutPage from "./../views/about/index";
import SupportPage from "./../views/support/index";
import SolutionsPage from "./../views/solution/index";
import TrackingPage from "./../views/tracking/index";
import Footer from "./../components/footer";

const SiteRoutes = (props) => {
	return (
		<Switch>
			<div className="page-container">
				<div className="page-content">
					<NavBar />
					<Route path="/about-us" component={AboutPage} />
					<Route path="/tracking" component={TrackingPage} />
					<Route path="/support" component={SupportPage} />
					<Route path="/solutions" component={SolutionsPage} />
					<Route path="/" exact component={HomePage} />
				</div>
				<Footer />
			</div>
		</Switch>
	);
};

export default SiteRoutes;
