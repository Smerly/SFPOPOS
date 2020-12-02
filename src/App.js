import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer';
import data from './sfpopos-data';

function App() {
	return (
		<div className="App">
			<Title />
			<POPOSList />
			<Footer />
		</div>
	);
}

export default App;
