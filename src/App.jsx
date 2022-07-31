import React from 'react';
import { v4 as uuid } from 'uuid';
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
			currentIntroduction: {
				firstName: '',
				lastName: '',
				email: '',
				number: '',
				saved: false,
			},
			currentEducation: {
				id: uuid(),
				schoolName: '',
				startTime: '',
				gradTime: '',
				subject: '',
				saved: false,
			},
			currentProfession: {
				id: uuid(),
				company: '',
				title: '',
				description: '',
				startTime: '',
				endTime: '',
				saved: false,
			},
			educationList: [],
			professionList: [],
		};

		this.handleIntroButton = this.handleIntroButton.bind(this);
		this.handleIntroInput = this.handleIntroInput.bind(this);
		this.handleEducationInput = this.handleEducationInput.bind(this);
		this.handleAddingEducation = this.handleAddingEducation.bind(this);
		this.handleEditingEducation = this.handleEditingEducation.bind(this);
		this.editEducation = this.editEducation.bind(this);
	}

	handleIntroButton(e) {
		const introduction = this.state.currentIntroduction;
		this.setState({
			currentIntroduction: {
				...introduction,
				saved: !introduction.saved,
			},
		});
	}

	handleIntroInput(e) {
		e.preventDefault();

		const currInput = this.state.currentIntroduction;
		this.setState({
			...this.state,
			currentIntroduction: {
				...currInput,
				[e.target.id]: e.target.value,
			},
		});
	}

	handleEducationInput(e) {
		e.preventDefault();
		const currInput = this.state.currentEducation;
		const form = e.target.form.elements;

		const [idE, schoolNameE, subjectE, startTimeE, gradTimeE] = form;
		const [id, schoolName, subject, startTime, gradTime] = [
			idE.value,
			schoolNameE.value,
			subjectE.value,
			startTimeE.value,
			gradTimeE.value,
		];
		const check = this.state.educationList.filter((item) => item.key === id);

		if (check.length > 0) {
			const eduList = this.state.educationList.map((item) => {
				if (item.key === id) {
					return (
						<Education
							key={id}
							id={id}
							schoolName={schoolName}
							subject={subject}
							startTime={startTime}
							gradTime={gradTime}
							saved={false}
							toggleSave={this.handleAddingEducation}
							inputHandler={this.handleEducationInput}
							editHandler={this.editEducation}
						/>
					);
				} else {
					return item;
				}
			});
			this.setState({
				...this.state,
				educationList: eduList,
			});
		} else {
			this.setState({
				...this.state,
				currentEducation: {
					...currInput,
					[e.target.name]: e.target.value,
				},
			});
		}
	}

	handleEditingEducation(e) {
		const form = e.target.form.elements;

		const [idE, schoolNameE, subjectE, startTimeE, gradTimeE] = form;
		const [id, schoolName, subject, startTime, gradTime] = [
			idE.value,
			schoolNameE.value,
			subjectE.value,
			startTimeE.value,
			gradTimeE.value,
		];
		const check = this.state.educationList.filter((item) => item.key === id);
		console.log(check);
		if (check.length > 0) {
			const eduList = this.state.educationList.map((item) => {
				if (item.key === id) {
					return (
						<Education
							key={id}
							id={id}
							schoolName={schoolName}
							subject={subject}
							startTime={startTime}
							gradTime={gradTime}
							saved={true}
							toggleSave={this.handleAddingEducation}
							inputHandler={this.handleEducationInput}
							editHandler={this.editEducation}
						/>
					);
				} else {
					return item;
				}
			});

			this.setState({
				...this.state,
				educationList: eduList,
			});
		}
	}

	editEducation(e) {
		// filter the element that has the id
		const form = e.target.form.elements;

		const [idE, schoolNameE, subjectE, startTimeE, gradTimeE] = form;
		const [id, schoolName, subject, startTime, gradTime] = [
			idE.value,
			schoolNameE.value,
			subjectE.value,
			startTimeE.value,
			gradTimeE.value,
		];
		const check = this.state.educationList.filter((item) => item.key === id);
		if (check.length > 0) {
			const eduList = this.state.educationList.map((item) => {
				if (item.key === id) {
					return (
						<Education
							key={id}
							id={id}
							schoolName={schoolName}
							subject={subject}
							startTime={startTime}
							gradTime={gradTime}
							saved={false}
							toggleSave={this.handleAddingEducation}
							inputHandler={this.handleEducationInput}
							editHandler={this.editEducation}
						/>
					);
				} else {
					return item;
				}
			});

			this.setState({
				...this.state,
				educationList: eduList,
			});
		}
	}
	handleAddingEducation(e) {
		e.preventDefault();
		const currState = this.state;

		const form = e.target.form.elements;
		const [idE, schoolNameE, subjectE, startTimeE, gradTimeE] = form;
		const [id, schoolName, subject, startTime, gradTime] = [
			idE.value,
			schoolNameE.value,
			subjectE.value,
			startTimeE.value,
			gradTimeE.value,
		];

		const newEducation = (
			<Education
				key={id}
				id={id}
				schoolName={schoolName}
				subject={subject}
				startTime={startTime}
				gradTime={gradTime}
				inputHandler={this.handleEducationInput}
				toggleSave={this.handleAddingEducation}
				saved={true}
				editHandler={this.editEducation}
			/>
		);

		const check = this.state.educationList.filter((item) => item.key === id);
		console.log(id, check);
		if (check.length > 0) {
			const eduList = this.state.educationList.map((item) => {
				if (item.key === id) {
					return newEducation;
				} else {
					return item;
				}
			});
			console.log(eduList);

			this.setState({
				...currState,
				educationList: eduList,
			});
		} else {
			this.setState({
				...currState,
				currentEducation: {
					id: uuid(),
					schoolName: '',
					subject: '',
					startTime: '',
					gradTime: '',
					saved: false,
				},
				educationList: this.state.educationList.concat(newEducation),
			});
		}
	}

	render() {
		const { firstName, lastName, email, number, saved } =
			this.state.currentIntroduction;
		const { id, schoolName, startTime, gradTime, subject, eduSaved } =
			this.state.currentEducation;
		const { educationList, professionList } = this.state;

		return (
			<div className='App'>
				<Header />
				<Introduction
					firstName={firstName}
					lastName={lastName}
					email={email}
					number={number}
					saved={saved}
					inputHandler={this.handleIntroInput}
					toggleSave={this.handleIntroButton}
				/>
				<section className='education-list'>
					<h1>Educational Experience</h1>

					<div className='education-part'>
						{educationList}
						<Education
							id={id}
							schoolName={schoolName}
							startTime={startTime}
							gradTime={gradTime}
							subject={subject}
							saved={eduSaved}
							inputHandler={this.handleEducationInput}
							toggleSave={this.handleAddingEducation}
							editHandler={this.editEducation}
						/>
					</div>
				</section>
				<Profession />
				<Button />
			</div>
		);
	}
}

export default App;
