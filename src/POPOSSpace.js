import React from 'react';
import logo from './logo.svg';
import './POPOSSpace.css';
import { Link } from 'react-router-dom';

function POPOSSpace(props) {
	const { name, image, address, hours, id } = props;
	return (
		<div className="POPOSSpace">
			<Link to={`/details/${id}`}>
				<img
					src={`${process.env.PUBLIC_URL}images/${image}`}
					width="300"
					height="300"
					alt="50 California St."
				/>
			</Link>
			<div className="POPOSSpace-text">
				<h1>
					<Link to={`/details/${id}`}>{name}</Link>
				</h1>
				<div>{address}</div>
				<div>{hours}</div>
			</div>
		</div>
	);
}

export default POPOSSpace;
