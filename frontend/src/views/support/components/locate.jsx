// Initialize and add the map
// function initMap() {
// 	// The location of Uluru
// 	const uluru = { lat: -25.344, lng: 131.036 };
// 	// The map, centered at Uluru
// 	const map = new google.maps.Map(document.getElementById("transit-map"), {
// 		zoom: 4,
// 		center: uluru,
// 	});
// 	// The marker, positioned at Uluru
// 	const marker = new google.maps.Marker({
// 		position: uluru,
// 		map: map,
// 	});
// }

// import GoogleMap from "./map";

// const location = {
// 	address: "Transit Parcels and Logistics Company Ltd",
// 	lat: 5.7051532786033645,
// 	lng: -0.14882021281429694,
// };

// export const LocationPin = ({ text }) => (
// 	<div className="pin">
// 		<i className="fas fa-map-marker-alt fa-2x transit-text-secondary"></i>
// 		<p className="pin-text">{text}</p>
// 	</div>
// );

import GoogleApiWrapper from "./map";

const LocateUs = (props) => {
	return (
		<section className="container mt-5 pt-5">
			<h3 className="transit-text-primary">Locate Us</h3>
			{/* <p>Google Maps</p> */}
			{/* <div id="transit-map"></div> */}
			{/* <GoogleMap location={location} zoom={17} /> */}
			<GoogleApiWrapper />
		</section>
	);
};

export default LocateUs;
