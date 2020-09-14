import React from "react";

const Nav = () => (
	<nav className="nav">
		<ul className="nav_list">
			<li className="nav_list-item">
				<a className="nav_link" href="#Home">
					Home
				</a>
			</li>
			<li className="nav_list-item">
				<a className="nav_link" href="#About">
					About
				</a>
			</li>
			<li className="nav_list-item">
				<a className="nav_link" href="#Services">
					Services
				</a>
			</li>
			<li className="nav_list-item">
				<a className="nav_link" href="#Contact">
					Contact
				</a>
			</li>
		</ul>
	</nav>
);

export default Nav;
