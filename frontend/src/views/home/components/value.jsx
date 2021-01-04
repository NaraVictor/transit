import React from "react";
import ThreeDCard from "./../../../components/3dCard";

// images
import moto from "../../../static/svg/motor.svg";
import safe from "../../../static/svg/safe.svg";
import organized from "../../../static/svg/organized.svg";
import revenue from "../../../static/svg/revenue.svg";

const Value = (props) => {
	return (
		<section className="values">
			<div className="container text-center">
				<ThreeDCard
					title="Safe & Timely"
					text="Speed and security ensure we deliver the best experience for our
							customers everytime"
					imgUrl={safe}
				/>

				<ThreeDCard
					title="Fast and Efficient Delivery"
					text="Just say the word, relax and let's figure out the rest!"
					imgUrl={moto}
					bgColor="transit-bg-primary"
					color="text-white"
					rightAlign={true}
				/>

				<ThreeDCard
					title="Organized delivery"
					text="There is a package for everyone to meet various demands and needs"
					bgColor="bg-secondary"
					color="text-white"
					imgUrl={organized}
				/>

				<ThreeDCard
					title="Increase sales & save money"
					text="We enable you to focus on growing your business by doing the heavy lifting"
					rightAlign={true}
					imgUrl={revenue}
				/>
			</div>
		</section>
	);
};

export default Value;
