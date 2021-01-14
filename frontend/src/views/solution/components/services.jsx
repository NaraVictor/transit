const TailoredServices = () => {
	return (
		<section className="container my-5 text-center">
			<div className="mx-md-5 px-5">
				<div>
					<h3 className="transit-text-primary">Tailored Solutions</h3>
				</div>

				<article>
					<div className="my-5 row">
						{/* <div className="col-md-6"></div> */}
						<div className="col-12">
							<h4 className="transit-text-secondary clean-title">
								Transit Groceries
							</h4>
							<p>
								get your shopping list and call us to schedule the buy and
								delivery for you
							</p>
						</div>
						<div className="col-12 mt-4">
							<h4 className="transit-text-secondary clean-title">
								Dedicated Dispatch
							</h4>
							<p>Dispatch services customized to your needs and convenience</p>
						</div>
					</div>

					{/* <div className="my-5 row">
						<div className="col-md-6 text-md-right">
							<h4 className="transit-text-secondary clean-title">
								Transit Speed laundry
							</h4>
							<p>
								Run out of clean clothes and too busy to wash or go to the
								laundry? We are a call away. Simply call to schedule the pickup
								and delivery and stay at home relaxing and assured.
							</p>
						</div>
						<div className="col-md-6"></div>
					</div> */}

					<div>
						<h4 className="transit-text-secondary clean-title">
							Tastic Red Love
						</h4>
						<p>
							This is a surprise delivery service which is in three aspects:
						</p>

						<dl>
							<dt>Wild Uni</dt>
							<dd>
								For the adventurous university student that is willing to go the
								extra mile.
							</dd>
							<dt>Composed Worker</dt>
							<dd>
								For the worker who is composed because of work but can still
								surprise with style.
							</dd>
							<dt>Executive club</dt>
							<dd>For the one who has the will and the "bills" to impress.</dd>
						</dl>
					</div>
				</article>
			</div>
		</section>
	);
};

export default TailoredServices;
