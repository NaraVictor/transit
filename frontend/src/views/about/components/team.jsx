import React from "react";
import { Link } from "react-router-dom";
import asarePic from "../../../static/img/staff/asare.jpeg";
import gloriaPic from "../../../static/img/staff/gloria.jpeg";
import ruthPic from "../../../static/img/staff/ruth.jpeg";

const Team = (props) => {
	return (
		<section className="team p-5 my-5 text-center">
			<h2 className="transit-text-primary">Meet the Team</h2>

			<div className="row my-5">
				<div className="team-member col-md-3 mb-4">
					<img
						src="https://ui-avatars.com/api/?name=Kw+Aff"
						alt="team member profile"
					/>
					<span className="member-detail">
						<p>
							<strong>Kwesi Afful</strong>
						</p>
						<p>Coordinator/Leader</p>
						<div className="member-links">
							<Link to="#">
								<ion-icon name="logo-facebook"></ion-icon>
							</Link>
							<Link to="#">
								<ion-icon name="logo-twitter"></ion-icon>
							</Link>
							<Link to="#">
								<ion-icon name="mail-outline"></ion-icon>
							</Link>
						</div>
					</span>
				</div>
				<div className="team-member col-md-3 mb-4">
					<img src={asarePic} alt="team member profile" />
					<span className="member-detail">
						<p>
							<strong>Lawrence Asare</strong>
						</p>
						<p>Manager</p>
						<div className="member-links">
							<Link to="#">
								<ion-icon name="logo-facebook"></ion-icon>
							</Link>
							<Link to="#">
								<ion-icon name="logo-twitter"></ion-icon>
							</Link>
							<Link to="#">
								<ion-icon name="mail-outline"></ion-icon>
							</Link>
						</div>
					</span>
				</div>
				<div className="team-member col-md-3 mb-4">
					<img src={ruthPic} alt="team member profile" />
					<span className="member-detail">
						<p>
							<strong>Ruth A. Adah</strong>
						</p>
						<p>Manager</p>
						<div className="member-links">
							<Link to="#">
								<ion-icon name="logo-facebook"></ion-icon>
							</Link>
							<Link to="#">
								<ion-icon name="logo-twitter"></ion-icon>
							</Link>
							<Link to="#">
								<ion-icon name="mail-outline"></ion-icon>
							</Link>
						</div>
					</span>
				</div>
				<div className="team-member col-md-3 mb-4">
					<img src={gloriaPic} alt="team member profile" />
					<span className="member-detail">
						<p>
							<strong>Gloria Adoma</strong>
						</p>
						<p>Assisting Officer</p>
						<div className="member-links">
							<Link to="#">
								<ion-icon name="logo-facebook"></ion-icon>
							</Link>
							<Link to="#">
								<ion-icon name="logo-twitter"></ion-icon>
							</Link>
							<Link to="#">
								<ion-icon name="mail-outline"></ion-icon>
							</Link>
						</div>
					</span>
				</div>
			</div>
		</section>
	);
};

export default Team;
