const HowItWorks = () => {
	return (
		<section className="container">
			<div className="mt-5 pt-4">
				<h2 className="text-white text-center">How it works</h2>
				<div className="text-white-50 p-md-3 text-md-center">
					<div className="row how-it-works">
						<div className="col-md-4 col-12 how-group">
							<span className="number">1</span>
							<span className="step">Register with us</span>
						</div>

						<div className="col-md-4 col-12 how-group">
							<span className="number transit-text-primary">2</span>
							<span className="step">
								Schedule your daily deliveries
								<div className="text-left">
									<span className="d-block">a. Day(s) for delivery</span>
									<span>b. Time for pickup</span>
								</div>
							</span>
						</div>

						<div className="col-md-4 col-12 how-group">
							<span className="number">3</span>
							<span className="step">Call us for deliveries</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
