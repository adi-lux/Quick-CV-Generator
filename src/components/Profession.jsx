import React from 'react';

class Profession extends React.Component {
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
		const { id, company, title, description, startTime, endTime } = this.props;
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
						onClick={this.handleChange}
					/>
					<input
						type='button'
						value='Delete'
						className='delete-profession'
						onClick={this.deleteItem}
					/>
				</div>
			</form>
		);
	}

	returnUnsaved() {
		const { id, company, title, description, startTime, endTime } = this.props;
		return (
			<form className='profession'>
				<input type='hidden' value={id} />
				<label>Company</label>
				<input
					name='company'
					type='text'
					value={company}
					onChange={this.handleChange}
				/>
				<label>Title</label>
				<input
					name='title'
					type='text'
					value={title}
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
					name='endTime'
					type='date'
					value={endTime}
					onChange={this.handleChange}
				/>
				<label>Description</label>
				<textarea
					name='description'
					value={description}
					onChange={this.handleChange}
				/>
				<input
					type='button'
					className='profession-button'
					value='Save'
					onClick={this.toggleMode}
				/>
			</form>
		);
	}
	returnCompleted() {
		const { company, title, description, startTime, endTime } = this.props;
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

export default Profession;
