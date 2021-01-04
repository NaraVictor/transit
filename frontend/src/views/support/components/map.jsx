import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

// import GoogleMapReact from "google-map-react";
// import { LocationPin } from "./locate";

// const mapOptions = {{
//               maxZoom: 18,
//               mapTypeControlOptions: {
//                 mapTypeIds: ['moon','satellite'],
//               }
//           }}

// const GoogleMap = ({ location, zoom }) => {
// 	return (
// 		<div className="transit-map">
// 			<GoogleMapReact
// 				bootstrapURLKeys={{ key: "AIzaSyBaZdThLZyJIbZXYMKRseM0ygYLAQSNCMc" }}
// 				defaultCenter={location}
// 				defaultZoom={zoom}
// 				layerTypes={["TrafficLayer", "TransitLayer"]}
// 				defaultOptions={{
// 					mapTypeControl: true,
// 					mapTypeControlOptions: {
// 						mapTypeIds: ["moon", "satellite"],
// 					},
// 				}}>
// 				<LocationPin
// 					lat={location.lat}
// 					lng={location.lng}
// 					text={location.address}
// 				/>
// 			</GoogleMapReact>
// 		</div>
// 	);
// };

// export default GoogleMap;

const mapStyles = {
	width: "59vw",
	height: "50vh",
};

export class MapContainer extends Component {
	state = {
		showingInfoWindow: false, // Hides or shows the InfoWindow
		activeMarker: {}, // Shows the active marker upon click
		selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
	};

	onMarkerClick = (props, marker, e) =>
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true,
		});

	onClose = (props) => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null,
			});
		}
	};

	render() {
		return (
			<div className="transit-map">
				<Map
					google={this.props.google}
					zoom={16}
					style={mapStyles}
					initialCenter={{
						lat: 5.7051532786033645,
						lng: -0.14882021281429694,
					}}>
					<Marker
						onClick={this.onMarkerClick}
						name={"Transit Parcels & Logistics Company Ltd"}
					/>
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose}>
						<div>
							<h4>{this.state.selectedPlace.name}</h4>
						</div>
					</InfoWindow>
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyBaZdThLZyJIbZXYMKRseM0ygYLAQSNCMc",
})(MapContainer);
