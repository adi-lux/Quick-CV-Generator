import React from 'react';

class Education extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.toggleMode = this.toggleMode.bind(this);
		this.editItem = this.editItem.bind(this);
	}
	// currentEducation: {
	// 	id: uuid(),
	// 	schoolName: '',
	// 	startTime: '',
	// 	gradTime: '',
	// 	subject: '',
	// 	saved: false,
	// },

	handleChange(e) {
		this.props.inputHandler(e);
	}

	toggleMode(e) {
		this.props.toggleSave(e);
	}

	editItem(e) {
		this.props.editHandler(e);
	}

	returnSaved() {
		const { id, schoolName, startTime, gradTime, subject } = this.props;
		return (
			<form className='education'>
				<input type='hidden' value={id} readOnly disabled />
				<label>School Name</label>
				<input name='schoolName' value={schoolName} disabled readOnly />
				<label>Subject</label>
				<input value={subject} disabled readOnly />
				<label>Start Date</label>
				<input value={startTime} disabled readOnly />
				<label>End Date</label>
				<input value={gradTime} disabled readOnly />
				<input
					type='button'
					className='education-button'
					value='Edit Experience'
					onClick={this.handleChange}
				/>
			</form>
		);
	}

	returnUnsaved() {
		const { id, schoolName, startTime, gradTime, subject } = this.props;
		return (
			<form className='education'>
				<input type='hidden' value={id} />
				<label>School Name</label>
				<input
					type='text'
					name='schoolName'
					value={schoolName}
					onChange={this.handleChange}
				/>
				<label htmlFor={'subject-' + id}>Subject</label>
				<input
					type='text'
					name='subject'
					value={subject}
					onChange={this.handleChange}
				/>
				<label htmlFor={'startTime-' + id}>Start Date</label>
				<input
					type='date'
					name='startTime'
					value={startTime}
					onChange={this.handleChange}
				/>
				<label htmlFor={'gradTime-' + id}>End Date</label>
				<input
					type='date'
					name='gradTime'
					value={gradTime}
					onChange={this.handleChange}
				/>
				<input
					type='button'
					value='Add Experience'
					className='education-button'
					onClick={this.toggleMode}
				/>
			</form>
		);
	}

	render() {
		const { saved } = this.props;

		return saved ? this.returnSaved() : this.returnUnsaved();
	}
}

export default Education;
