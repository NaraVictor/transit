import React from "react";
import { BrowserRouter } from "react-router-dom";
import SiteRoutes from "./routes/siteRoutes";

// 3rd party
import AOS from "aos";

// css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./static/css/styles.css";
import "../node_modules/aos/dist/aos.css";

class App extends React.Component {
	componentDidMount() {
		AOS.init();
	}

	render() {
		return (
			<BrowserRouter>
				<SiteRoutes />
			</BrowserRouter>
		);
	}
}

export default App;
