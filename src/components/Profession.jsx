import React from 'react';

const Profession = (props) => {
	const {
		id,
		company,
		title,
		description,
		startTime,
		endTime,
		toggleSave,
		inputHandler,
		saved,
		complete,
		deleted,
	} = props;

	const returnSaved = () => {
		return (
			<form className='profession' readOnly>
				<input type='hidden' value={id} disabled />
				<label>Company</label>
				<input name='company' type='text' value={company} disabled />
				<label>Title</label>
				<input name='title' type='text' value={title} disabled />
				<label>Start Date</label>
				<input name='startTime' type='date' value={startTime} disabled />
				<label>End Date</label>
				<input name='endTime' type='date' value={endTime} disabled />
				<label>Description</label>
				<textarea name='description' value={description} disabled />
				<div className='button-wrapper'>
					<input
						type='button'
						className='save-profession-button'
						value='Edit'
						onClick={toggleSave}
					/>
					<input
						type='button'
						value='Delete'
						className='delete-profession'
						onClick={deleted}
					/>
				</div>
			</form>
		);
	};

	const returnUnsaved = () => {
		return (
			<form className='profession'>
				<input type='hidden' value={id} />
				<label>Company</label>
				<input
					name='company'
					type='text'
					value={company}
					onChange={inputHandler}
				/>
				<label>Title</label>
				<input name='title' type='text' value={title} onChange={inputHandler} />

				<label>Start Date</label>
				<input
					type='date'
					name='startTime'
					value={startTime}
					onChange={inputHandler}
				/>
				<label>End Date</label>
				<input
					name='endTime'
					type='date'
					value={endTime}
					onChange={inputHandler}
				/>
				<label>Description</label>
				<textarea
					name='description'
					value={description}
					onChange={inputHandler}
				/>
				<input
					type='button'
					className='profession-button'
					value='Save'
					onClick={toggleSave}
				/>
			</form>
		);
	};
	const returnCompleted = () => {
		return (
			<div className='complete-profession'>
				<h1 className='complete-company'>{company}</h1>
				<h2 className='prof-title'>{title}</h2>
				<h3 className='prof-timespan'>
					{startTime} - {endTime}
				</h3>
				<p className='description'>{description}</p>
			</div>
		);
	};

	return complete ? returnCompleted() : saved ? returnSaved() : returnUnsaved();
};

export default Profession;
