import React from "react";
import logo from "../static/svg/logo.svg";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
	return (
		<nav className="p-2 t-nav">
			<input type="checkbox" id="nav-check" />
			<NavLink to="/">
				<img src={logo} alt="transit logo" style={{ maxHeight: "7vh" }} />
			</NavLink>
			<div className="nav-btn">
				<label htmlFor="nav-check">
					<span></span>
					<span></span>
					<span></span>
				</label>
			</div>
			<div className="t-nav-links">
				<NavLink
					to="/about-us"
					activeClassName="active-nav"
					className="t-nav-item">
					About
				</NavLink>
				{/* <NavLink
						to="/tracking"
						activeClassName="active-nav"
						className="t-nav-item">
						Tracking
					</NavLink> */}
				<NavLink
					to="/solutions"
					activeClassName="active-nav"
					className="t-nav-item">
					Solutions
				</NavLink>
				<NavLink
					to="/support"
					activeClassName="active-nav"
					className="t-nav-item">
					Support
				</NavLink>
				{/* <button className="btn shadow rounded menu-btn">Menu</button> */}
			</div>
			{/* <div className="t-nav-call">
					<ion-icon name="call"></ion-icon>

					<a href="tel:0550217104">0550217104</a>
				</div> */}
		</nav>
	);
};

export default NavBar;
