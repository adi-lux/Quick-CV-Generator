import React from 'react';

const Introduction = (props) => {
	const {
		saved,
		complete,
		firstName,
		lastName,
		email,
		number,
		inputHandler,
		toggleSave,
	} = props;

	const returnUnsaved = () => {
		return (
			<section className='introduction'>
				<label htmlFor='first-name'>First Name</label>
				<input
					type='text'
					name='first-name'
					id='firstName'
					onChange={inputHandler}
					value={firstName}
				/>
				<label htmlFor='last-name'>Last Name</label>

				<input
					type='text'
					name='last-name'
					id='lastName'
					onChange={inputHandler}
					value={lastName}
				/>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					name='email'
					id='email'
					onChange={inputHandler}
					value={email}
				/>
				<label htmlFor='number'>Phone Number</label>

				<input
					type='number'
					name='number'
					id='number'
					onChange={inputHandler}
					value={number}
				/>
				<input
					type='button'
					name='saved'
					id='saved'
					onClick={inputHandler}
					value='Save'
				/>
			</section>
		);
	};

	const returnSaved = () => {
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
					onClick={toggleSave}
					value='Edit'
				/>
			</section>
		);
	};

	const returnCompleted = () => {
		return (
			<div className='complete-introduction'>
				<h1 className='complete-name'>
					{firstName} {lastName}
				</h1>
				<h2 className='complete-info'>
					{email} | {number}
				</h2>
			</div>
		);
	};

	return complete ? returnCompleted() : saved ? returnSaved() : returnUnsaved();
};

export default Introduction;
