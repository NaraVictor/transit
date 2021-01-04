const SubscriptionCard = (props) => {
	return (
		<div className="s-card">
			<div className="s-card-side s-card-front">
				<div className="s-card-title">
					<i className="fas fa-box-open fa-2x"></i>
					<h4 className="s-card-heading clean-title transit-text-primary">
						{props.title}
					</h4>
					<p className="mb-0 transit-text-secondary">{props.prices}</p>
				</div>

				<div className="s-card-details">
					<ul>{props.children}</ul>
				</div>
			</div>
		</div>
	);
};

export default SubscriptionCard;
