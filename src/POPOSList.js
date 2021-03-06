import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json';

// function POPOSList() {
// 	return (
// 		<div className="POPOSList">
// 			<POPOSSpace
// 				name="100 Pine Street"
// 				address="100 Pine St."
// 				image="100-pine.jpg"
// 			/>
// 			<POPOSSpace
// 				name="50 California Street"
// 				address="50 California St."
// 				image="50-california-st.jpg"
// 			/>
// 			<POPOSSpace
// 				name="101 California Street"
// 				address="101 California St."
// 				image="101-california.jpg"
// 			/>
// 			<POPOSSpace
// 				name="343 Sansome Roof Garden"
// 				address="343 Sansome Roof Garden"
// 				image="343-sansome-roof-garden.jpg"
// 			/>
// 			<POPOSSpace
// 				name="Market Street Plaza"
// 				address="525 Market Street Plaza"
// 				image="525-market-street-plaza.jpg"
// 			/>
// 			<POPOSSpace
// 				name="555 California Street"
// 				address="555 California St."
// 				image="555-california.jpg"
// 			/>
// 		</div>
// 	);
// }

function POPOSList() {
	const spaces = data.map(({ title, address, images, hours }, i) => {
		return (
			<POPOSSpace
				id={i}
				key={title}
				name={title}
				address={address}
				image={images[0]}
				hours={hours}
			/>
		);
	});

	return <div className="POPOSList">{spaces}</div>;
}
export default POPOSList;
