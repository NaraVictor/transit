import SubscriptionCard from "./subscriptionCard";

const Subscriptions = () => {
	return (
		<section className="container my-5 py-5">
			<h3 className="transit-text-primary text-center">Subscription Models</h3>

			<div className="row py-5 text-center">
				<div className="col-md-4">
					<SubscriptionCard
						title="Pack 1"
						prices="GHS 80/mnth | GHS 300/6mnth | GHS 500/yr">
						<li>10 Deliveries + any logistics services per mnth</li>
						<li>Company branded polythene bags</li>
					</SubscriptionCard>
				</div>
				<div className="col-md-4">
					<SubscriptionCard
						title="Pack 2"
						prices="GHS 100/mnth | GHS 500/6mnth | GHS 800/yr">
						<li>15 Deliveries + any logistics services per month</li>
						<li>Company branded polythene bags</li>
						<li>Social media posts once a week</li>
					</SubscriptionCard>
				</div>
				<div className="col-md-4">
					<SubscriptionCard
						title="Pack 3"
						prices="GHS 150/mnth | GHS 750/6mnth | GHS 1400/yr">
						<li>20 Deliveries + any logistics services per month</li>
						<li>Company branded polythene bags</li>
						<li>Social media posts twice a week</li>
					</SubscriptionCard>
				</div>
				<div className="col-md-4">
					<SubscriptionCard
						title="Pack 4"
						prices="GHS 200/mnth | GHS 1000/6mnth | GHS 1800/yr">
						<li>30 Deliveries + any logistics services per month</li>
						<li>Company branded polythene bags</li>
						<li>Company branded cardboard boxes</li>
						<li>Social media posts twice a week</li>
						<li>Product warehousing option</li>
					</SubscriptionCard>
				</div>
				<div className="col-md-4">
					<SubscriptionCard
						title="Pack 5"
						prices="GHS 300/mnth | GHS 1500/6mnth | GHS 3000/yr">
						<li>50 Deliveries + any logistics services per month</li>
						<li>Company branded polythene bags</li>
						<li>Company branded cardboard boxes</li>
						<li>Social media posts thrice a week</li>
						<li>Product warehousing option</li>
						<li>Distribution of company marketing materials</li>
					</SubscriptionCard>
				</div>
				<div className="col-md-4">
					<SubscriptionCard
						title="Pack 6"
						prices="GHS 500/mnth | GHS 2500/6mnth | GHS 5000/yr">
						<li>Unlimited Deliveries & logistics services</li>
						<li>Company branded polythene bags</li>
						<li>Company branded cardboard boxes</li>
						<li>Social media posts (on-demand)</li>
						<li>Product warehousing option</li>
						<li>Distribution of company marketing materials</li>
					</SubscriptionCard>
				</div>
			</div>
		</section>
	);
};

export default Subscriptions;
