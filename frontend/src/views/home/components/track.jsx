import React from "react";

const Track = (props) => {
	return (
		<article className="container text-center">
			<div className="text-center">
				<input
					type="search"
					name="track"
					className="d-form-control track-input mb-3"
					id="track"
					placeholder="track item by number, reference etc..."
				/>
				<button className="btn-t-primary d-block m-auto px-4 py-2">
					Track Parcel
				</button>
			</div>
		</article>
	);
};

export default Track;
