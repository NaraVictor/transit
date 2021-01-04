import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
	return (
		<footer className="mt-5 py-4 footer">
			<div className="container">
				<section className="row">
					<article className="col">
						<h5 className="clean-title">Transit</h5>
						<p className="text-black-50">
							We are a parcel and logistics company (Ghana, West Africa)
							obsessed over our customers satisfaction
						</p>
						<p>
							call us today
							<a href="tel:0550217104" className="transit-text-primary">
								<strong> 0550217104</strong>
							</a>
						</p>
					</article>
					<article className="col">
						<p className="clean-title">Our Company</p>
						<div>
							<Link to="/about-us" className="d-block text-black-50">
								About Transit
							</Link>
							<Link to="/support" className="text-black-50">
								Contact us
							</Link>
							<Link to="/solutions" className="d-block text-black-50">
								Solutions
							</Link>
							<Link to="/tracking" className="d-block text-black-50">
								Track Package
							</Link>
						</div>
					</article>
					<article className="col text-black-50">
						<p>Stay connected for updates and exclusives</p>
						<input
							type="email"
							placeholder="email address"
							className="d-form-control py-2 mr-3 shadow"
						/>
						<button className="btn-t-primary">Sign up!</button>
					</article>
				</section>
				<section className="row">
					<div className="col">
						<hr />
						<h5 className="d-inline mr-4 transit-text-primary">Follow us</h5>
						<a href="https://facebook.com/tparcels" className="text-black-50">
							facebook
						</a>
						<small className="fas fa-circle transit-text-secondary fa-xs mx-3"></small>
						<a
							href="https://www.instagram.com/transitparcels/"
							className="text-black-50">
							instagram
						</a>
						<hr />
					</div>
				</section>
				<p className="text-black-50 text-center">
					&copy; 2021 Transit Parcels & Logistics Company Ltd
				</p>
			</div>
		</footer>
	);
};

export default Footer;
