import { Link } from "react-router-dom";

const HowItWorks = () => {
	return (
		<section className="container">
			<div className="text-center mt-5 pt-4">
				<h2 className="text-white">How it works</h2>
				<p className="text-white-50 p-md-3 px-md-5">
					<Link className="transit-text-secondary mr-2" to="/">
						Register
					</Link>
					your business as a client with Transit, set the time or schedule for
					deliveries and start business or get a day, list your delivery for the
					day and call us for delivery.
				</p>
			</div>
		</section>
	);
};

export default HowItWorks;
