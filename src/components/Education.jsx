import React from 'react';

const Education = (props) => {
	const {
		id,
		schoolName,
		startTime,
		gradTime,
		subject,
		inputHandler,
		toggleSave,
		deleted,
		saved,
		complete,
	} = props;

	const returnSaved = () => {
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
						onClick={toggleSave}
					/>
					<input
						type='button'
						value='Delete'
						className='delete-education'
						onClick={deleted}
					/>
				</div>
			</form>
		);
	};

	const returnUnsaved = () => {
		return (
			<form className='education'>
				<input type='hidden' value={id} />
				<label>School Name</label>
				<input
					type='text'
					name='schoolName'
					value={schoolName}
					onChange={inputHandler}
				/>
				<label>Subject</label>
				<input
					type='text'
					name='subject'
					value={subject}
					onChange={inputHandler}
				/>
				<label>Start Date</label>
				<input
					type='date'
					name='startTime'
					value={startTime}
					onChange={inputHandler}
				/>
				<label>End Date</label>
				<input
					type='date'
					name='gradTime'
					value={gradTime}
					onChange={inputHandler}
				/>
				<input
					type='button'
					value='Save'
					className='education-button'
					onChange={inputHandler}
				/>
			</form>
		);
	};

	const returnCompleted = () => {
		return (
			<div className='complete-education'>
				<h1 className='complete-school'>{schoolName}</h1>
				<h2 className='timespan'>
					{startTime} - {gradTime}
				</h2>
				<h3 className='subject'>{subject}</h3>
			</div>
		);
	};

	return complete ? returnCompleted() : saved ? returnSaved() : returnUnsaved();
};

export default Education;
