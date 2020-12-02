import React from 'react';
import './Title.css';
import { NavLink } from 'react-router-dom';

function Title() {
	return (
		<div>
			<h1> SFPOPOS </h1>
			<div className="Title"> San Francisco Privately Owned Public Spaces</div>
			<NavLink
				className="nav-link"
				activeClassName="nav-link-active"
				exact
				to="/"
			>
				List
			</NavLink>

			<NavLink
				className="nav-link"
				activeClassName="nav-link-active"
				to="/about"
			>
				About
			</NavLink>
		</div>
	);
}
export default Title;
