import React from "react";

const Tasks = (props) => {
	return (
		<div className="text-center my-5 pb-5">
			<section className="container">
				<h3 className="text-white pt-5">Quick Tasks</h3>
				<div className="text-white-50 tasks  pt-5 row pb-5">
					<div className="task col-md-6 b-right">
						<p>Request Delivery</p>
					</div>
					<div className="task col-md-6">
						<p>Drop Off Package</p>
					</div>
					<div className="task col-12 b-top">
						<p>Get a Quote</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Tasks;
