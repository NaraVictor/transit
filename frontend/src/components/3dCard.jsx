import React from "react";

const ThreeDCard = (props) => {
	const {
		title,
		imgUrl,
		imgAlt,
		text,
		rightAlign,
		topdownMargin,
		color,
		bgColor,
	} = props;

	return (
		<div data-aos="fade-up" className={`t-card-wrapper ${topdownMargin}`}>
			<div
				className={`${rightAlign ? "t-card-reverse " : "t-card "} ${bgColor}`}>
				<div
					className={`col-6 ${color ?? "text-black"} ${
						rightAlign && "order-2"
					}`}>
					<h3>
						{title}
						{/* <span class="enclosed">Cut</span>out */}
					</h3>
					<p>{text}</p>
				</div>

				<div className="col-6">
					<img src={`${imgUrl}`} alt={`${imgAlt}`} />
				</div>
			</div>
		</div>
	);
};

export default ThreeDCard;
