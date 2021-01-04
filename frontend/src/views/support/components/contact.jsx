import React from "react";

const Contact = (props) => {
	return (
		<section className="container my-4">
			<h3 className="transit-text-primary">Contact Us</h3>
			<div className="row mt-5 shadow rounded bg-white">
				<div className="col-md-6 col-12 order-sm-1 py-4 order-md-2 transit-bg-primary px-5">
					<h5 className="text-white clean-title pt-2">GET PERSONAL</h5>
					<div className="mt-5">
						<p>
							Call us today
							<span className="d-block">
								<i className="fas fa-phone-alt mr-2 text-white"></i>
								<a href="tel:+233550217104" className="mr-2 text-white">
									055 021 7104 |
								</a>
								<a href="tel:+2330271401162" className="text-white">
									027 140 1162
								</a>
							</span>
						</p>
						<p>
							Email
							<span className="d-block">
								<i className="fas fa-envelope-open text-white mr-2"></i>
								<a
									href="mailto:transitparcels@gmail.com"
									className="text-white">
									transitparcels@gmail.com
								</a>
							</span>
						</p>
						<p>
							Visit Us
							<span className="d-block text-white">
								<i className="fas fa-map-marker  mr-2"></i>
								Adenta, Accra Ghana
							</span>
						</p>
					</div>
				</div>
				<div className="col-md-6 col py-4">
					<h5 className="transit-text-secondary clean-title">
						SEND US A MESSAGE
					</h5>
					{/* <p>Wanna leave us a message? complete the form below</p> */}

					<form>
						<div className="form-row">
							<div className="col-md-8 col-12">
								<input
									type="text"
									placeholder="your name"
									name="name"
									id="name"
									className="d-form-control-alt  w-100 mb-3"
									required
								/>
							</div>
							<div className="col-12 col-md-4">
								<input
									type="tel"
									placeholder="phone number"
									name="phone"
									id="phone"
									className="d-form-control-alt   mr-3 w-100 mb-3"
									required
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="col-12 col-md-6">
								<input
									type="email"
									name="email"
									id="email"
									placeholder="email address"
									className="d-form-control-alt   w-100 mb-3"
								/>
							</div>
							<div className="col-12 col-md-6">
								<select
									required
									name="type"
									placeholder="select message type"
									id="type"
									className="d-form-control-alt   w-100 mb-3">
									<option value="">select msg type</option>
									<option value="general">General Msg</option>
									<option value="claim">Claim</option>
									<option value="support">Support</option>
									<option value="enquiry">Enquiry</option>
								</select>
							</div>
						</div>
						<div className="form-row">
							<div className="col">
								<textarea
									placeholder="input your message here"
									name="message"
									id="message"
									rows="6"
									required
									className="d-form-control-alt   w-100"></textarea>
							</div>
						</div>
						<button className="btn-t-primary mt-2" id="submit-contact">
							Send
							<span className="ml-2 fas fa-paper-plane"></span>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
