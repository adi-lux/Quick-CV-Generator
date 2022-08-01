import React from 'react';

class Introduction extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.toggleMode = this.toggleMode.bind(this);
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
				<input id='firstName' value={firstName} disabled readonly />
				<label htmlFor='last-name'>Last Name</label>

				<input id='lastName' value={lastName} disabled readonly />
				<label htmlFor='email'>Email</label>
				<input id='email' value={email} disabled readonly />
				<label htmlFor='number'>Phone Number</label>
				<input id='number' value={number} disabled readonly />
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
	render() {
		const { saved } = this.props;

		return saved ? this.returnSaved() : this.returnUnsaved();
	}
}

export default Introduction;
