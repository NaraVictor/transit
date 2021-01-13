import React from "react";
import ParcelOnlineIcon from "./../../../components/svg/parcelOnlineIcon";
import { Link } from "react-router-dom";
import ParcelExpressIcon from "./../../../components/svg/parcelExpressIcon";
import TwentyFourHours from "../../../components/svg/24hrs";
import FortyEightHours from "./../../../components/svg/48hrs";
import Rocket from "./../../../components/svg/rocket";

// svg
import surprise from "../../../static/svg/surprise-delivery.svg";
import laundry from "../../../static/svg/laundry.svg";
import moving from "../../../static/svg/moving.svg";

const Services = (props) => {
	return (
		<section className="services-section">
			<div className="container text-center">
				<h2 className="py-5 transit-text-primary">Services</h2>

				<div className="row service">
					<div data-aos="fade-right" className="col-md-3 offset-md-3">
						<ParcelExpressIcon />
					</div>
					<div
						data-aos="fade-up"
						className="col-md-4 text-md-left ml-md-5 justify-content-center align-self-center">
						<h5>Parcel Express</h5>
						<p>
							This is our flagship services for all clients: This service is to
							all clients.
						</p>
					</div>
				</div>
				<hr />
				<div className="row service d-flex">
					<div
						data-aos="fade-left"
						className="order-md-4 col-md-3 col-12 offset-md-1">
						<ParcelOnlineIcon />
					</div>
					<div
						data-aos="fade-up"
						className="col-md-4 offset-md-2 col-12 text-md-right justify-content-center align-self-center order-md-1">
						<h5>Parcel Online Express</h5>
						<p>
							This service will focus on clients who have online businesses.
							Based on Clients Lists, calls or SMS services will be used to
							reach out to clients. Now, this service works for same day
							deliveries and next day deliveries.
						</p>
					</div>
				</div>
				<hr />
				<div className="row service">
					<div data-aos="fade-right" className="col-md-3 offset-md-3">
						<TwentyFourHours />
					</div>
					<div
						data-aos="fade-up"
						className="col-md-4 justify-content-center align-self-center  text-md-left ml-md-5">
						<h5>Same Day Delivery</h5>
						<dl>
							<dt>Normal</dt>
							<p>Receive or have your package delivered by close of day. </p>
							<dt>Double Express</dt>
							<p>Jump ahead of the pack for an urgent delivery</p>
						</dl>
					</div>
				</div>
				<hr />
				<div className="row service d-flex">
					<div data-aos="fade-left" className="col-md-3 offset-md-1 order-md-3">
						<FortyEightHours />
					</div>
					<div
						data-aos="fade-up"
						className="col-md-4 offset-md-2 justify-content-center align-self-center text-md-right">
						<h5>Next Day Delivery</h5>
						<p>
							Relax and deliver/receive your parcels the following day. Packages
							will be stored in a warehouse and delivery plans made for the set
							day.
							<span className="badge rounded-pill bg-success text-white ml-2">
								Discounts available
							</span>
						</p>
					</div>
				</div>
				<hr />
				<div className="row service">
					<div data-aos="fade-right" className="col-md-3  offset-md-3">
						<Rocket />
					</div>
					<div
						data-aos="fade-up"
						className="col-md-4 justify-content-center align-self-center text-md-left ml-md-5">
						<h5>Double Express</h5>
						<p>
							Yes, not all can wait for the same day deliveries schedule. So, a
							really fast delivery service (instant) is that package for you
						</p>
					</div>
				</div>
				<hr />
				<div className="row service d-flex">
					<div data-aos="fade-left" className="col-md-3 offset-md-1 order-md-3">
						<img src={surprise} alt="surprise delivery svg" />
					</div>
					<div
						data-aos="fade-up"
						className="col-md-4 offset-md-2 justify-content-center align-self-center text-md-right">
						<h5>Surprise Delivery</h5>
						<p>
							It could be that special someone that you want to impress or an
							unannounced delivery service. Our surprise delivery package is
							that service for you
						</p>
					</div>
				</div>
				<hr />
				<div className="row service">
					<div data-aos="fade-right" className="col-md-3  offset-md-3">
						<img src={laundry} alt="speed laundry svg" />
					</div>
					<div
						data-aos="fade-up"
						className="col-md-4 justify-content-center align-self-center text-md-left ml-md-5">
						<h5>Speed Laundry</h5>
						<p>
							Run out of clean clothes and too busy to wash or go to the
							laundry? We are a call away. Simply call to schedule the pickup
							and delivery and stay at home relaxing and assured.
						</p>
					</div>
				</div>
				<hr />
				<div className="row service d-flex">
					<div data-aos="fade-left" className="col-md-3 offset-md-1 order-md-3">
						<img src={moving} alt="Moving laundry svg" />
					</div>
					<div
						data-aos="fade-up"
						className="col-md-4 offset-md-2 justify-content-center align-self-center text-md-right">
						<h5>Moving Service</h5>
						<p>
							The moving service is designed for heavy logistics delivery and/or
							relocation. Moving to a new apartment, office, etc? We've got it
							sorted
						</p>
					</div>
				</div>
				<Link to="/solutions" className="btn-t-secondary">
					More services
					<span className="fas fa-arrow-right pl-2"></span>
				</Link>
			</div>
		</section>
	);
};

export default Services;
