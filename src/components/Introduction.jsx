import React from 'react';

class Introduction extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.toggleMode = this.toggleMode.bind(this);
		this.returnUnsaved = this.returnUnsaved.bind(this);
		this.returnSaved = this.returnSaved.bind(this);
	}
	// conditional rendering -> if saved or not, input vs paragraph
	// 		firstName: '',
	// 		lastName: '',
	// 		email: '',
	// 		number: '',
	// 		saved: false,

	handleChange(e) {
		this.props.inputHandler(e);
	}

	toggleMode(e) {
		this.props.toggleSave(e);
	}

	returnUnsaved() {
		const { firstName, lastName, email, number } = this.props;

		return (
			<section className='introduction'>
				<label htmlFor='first-name'>First Name</label>
				<input
					type='text'
					name='first-name'
					id='firstName'
					onChange={this.handleChange}
					value={firstName}
				/>
				<label htmlFor='last-name'>Last Name</label>

				<input
					type='text'
					name='last-name'
					id='lastName'
					onChange={this.handleChange}
					value={lastName}
				/>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					name='email'
					id='email'
					onChange={this.handleChange}
					value={email}
				/>
				<label htmlFor='number'>Phone Number</label>

				<input
					type='number'
					name='number'
					id='number'
					onChange={this.handleChange}
					value={number}
				/>
				<input
					type='button'
					name='saved'
					id='saved'
					onClick={this.toggleMode}
					value='Save'
				/>
			</section>
		);
	}

	returnSaved() {
		const { firstName, lastName, email, number } = this.props;

		return (
			<section className='introduction'>
				<label htmlFor='first-name'>First Name</label>
				<input id='firstName' value={firstName} disabled readOnly />
				<label htmlFor='last-name'>Last Name</label>

				<input id='lastName' value={lastName} disabled readOnly />
				<label htmlFor='email'>Email</label>
				<input id='email' value={email} disabled readOnly />
				<label htmlFor='number'>Phone Number</label>
				<input id='number' value={number} disabled readOnly />
				<input
					type='button'
					name='saved'
					id='saved'
					onClick={this.toggleMode}
					value='Edit'
				/>
			</section>
		);
	}
	returnCompleted() {
		const { firstName, lastName, email, number } = this.props;
		return (
			<div className='complete-introduction'>
				<h1 className='complete-name'>{firstName} {lastName}</h1>
				<h2 className='complete-info'>{email} | {number}</h2>
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

export default Introduction;
