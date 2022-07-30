import React from 'react';
import Button from './components/Button';
import Education from './components/Education';
import Header from './components/Header';
import Profession from './components/Profession';
import Introduction from './components/Introduction';
import './app.scss';
class App extends React.Component {
	constructor() {
		super();

		this.state = {
			introduction: {},
			educationList: [],
			professionList: [],
			currentMode: 'save',
		};
	}

	render() {
		return (
			<div className='App'>
				<Header />
				<Introduction />
				<Education />
				<Profession />
				<Button />
			</div>
		);
	}
}

export default App;
