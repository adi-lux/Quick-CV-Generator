import React from 'react';

class Education extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.toggleMode = this.toggleMode.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.returnCompleted = this.returnCompleted.bind(this);
	}

	handleChange(e) {
		this.props.inputHandler(e);
	}

	toggleMode(e) {
		this.props.toggleSave(e);
	}

	deleteItem() {
		this.props.delete(this.props.id);
	}

	returnSaved() {
		const { id, schoolName, startTime, gradTime, subject } = this.props;
		return (
			<form className='education' readOnly>
				<input type='hidden' value={id} disabled />
				<label>School Name</label>
				<input name='schoolName' value={schoolName} disabled />
				<label>Subject</label>
				<input value={subject} disabled />
				<label>Start Date</label>
				<input value={startTime} disabled />
				<label>End Date</label>
				<input value={gradTime} disabled />
				<div className='button-wrapper'>
					<input
						type='button'
						className='save-education-button'
						value='Edit'
						onClick={this.handleChange}
					/>
					<input
						type='button'
						value='Delete'
						className='delete-education'
						onClick={this.deleteItem}
					/>
				</div>
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
				<label>Subject</label>
				<input
					type='text'
					name='subject'
					value={subject}
					onChange={this.handleChange}
				/>
				<label>Start Date</label>
				<input
					type='date'
					name='startTime'
					value={startTime}
					onChange={this.handleChange}
				/>
				<label>End Date</label>
				<input
					type='date'
					name='gradTime'
					value={gradTime}
					onChange={this.handleChange}
				/>
				<input
					type='button'
					value='Save'
					className='education-button'
					onClick={this.toggleMode}
				/>
			</form>
		);
	}

	returnCompleted() {
		const { schoolName, startTime, gradTime, subject } = this.props;
		return (
			<div className='complete-education'>
				<h1 className='complete-school'>{schoolName}</h1>
				<h2 className='timespan'>
					{startTime} - {gradTime}
				</h2>
				<h3 className='subject'>{subject}</h3>
			</div>
		);
	}

	render() {
		const { saved, complete } = this.props;
		return complete
			? this.returnCompleted()
			: saved
			? this.returnSaved()
			: this.returnUnsaved();
	}
}

export default Education;
