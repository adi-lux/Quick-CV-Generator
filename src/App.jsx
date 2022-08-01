import React from 'react';
import { v4 as uuid } from 'uuid';
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
			submitted: false,
		};

		this.handleIntroButton = this.handleIntroButton.bind(this);
		this.handleIntroInput = this.handleIntroInput.bind(this);
		this.handleEducation = this.handleEducation.bind(this);
		this.handleEducationInput = this.handleEducationInput.bind(this);
		this.handleAddingEducation = this.handleAddingEducation.bind(this);
		this.deleteEducation = this.deleteEducation.bind(this);
		this.handleAddingProfession = this.handleAddingProfession.bind(this);
		this.handleProfession = this.handleProfession.bind(this);
		this.handleProfessionInput = this.handleProfessionInput.bind(this);
		this.deleteProfession = this.deleteProfession.bind(this);
		this.toggleSubmit = this.toggleSubmit.bind(this);
		this.returnComplete = this.returnComplete.bind(this);
		this.returnIncomplete = this.returnIncomplete.bind(this);
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

	handleEducation(e, mode) {
		e.preventDefault();

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
				saved={mode}
				deleted={this.deleteEducation}
				complete={this.state.submitted}
			/>
		);

		const check = this.state.educationList.filter((item) => item.key === id);

		if (check.length > 0) {
			const eduList = this.state.educationList.map((item) => {
				if (item.key === newEducation.key) {
					return newEducation;
				} else {
					return item;
				}
			});

			this.setState({
				...this.state.currentEducation,
				educationList: eduList,
			});
			return { existing: true, newEducation };
		}
		return { existing: false, newEducation };
	}

	handleEducationInput(e) {
		const { existing } = this.handleEducation(e, false);

		if (!existing) {
			this.setState({
				...this.state,
				currentEducation: {
					...this.state.currentEducation,
					[e.target.name]: e.target.value,
				},
			});
		}
	}

	handleAddingEducation(e) {
		const { existing, newEducation } = this.handleEducation(e, true);

		if (!existing) {
			this.setState({
				...this.state,
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

	deleteEducation(id) {
		this.setState({
			...this.state,
			educationList: this.state.educationList.filter((edu) => edu.key !== id),
		});
	}

	handleProfession(e, mode) {
		e.preventDefault();

		const form = e.target.form.elements;
		const [idE, companyE, titleE, startTimeE, endTimeE, descriptionE] = form;
		const [id, company, title, startTime, endTime, description] = [
			idE.value,
			companyE.value,
			titleE.value,
			startTimeE.value,
			endTimeE.value,
			descriptionE.value,
		];

		const newProfession = (
			<Profession
				key={id}
				id={id}
				company={company}
				title={title}
				description={description}
				startTime={startTime}
				endTime={endTime}
				inputHandler={this.handleProfessionInput}
				toggleSave={this.handleAddingProfession}
				saved={mode}
				deleted={this.deleteProfession}
				complete={this.state.submitted}
			/>
		);

		const check = this.state.professionList.filter((item) => item.key === id);

		if (check.length > 0) {
			const profList = this.state.professionList.map((item) => {
				if (item.key === newProfession.key) {
					return newProfession;
				} else {
					return item;
				}
			});

			this.setState({
				...this.state.currentProfession,
				professionList: profList,
			});
			return { existing: true, newProfession };
		}
		return { existing: false, newProfession };
	}

	handleProfessionInput(e) {
		const { existing } = this.handleProfession(e, false);
		if (!existing) {
			this.setState({
				...this.state,
				currentProfession: {
					...this.state.currentProfession,
					[e.target.name]: e.target.value,
				},
			});
		}
	}

	handleAddingProfession(e) {
		const { existing, newProfession } = this.handleProfession(e, true);

		if (!existing) {
			this.setState({
				...this.state,
				currentProfession: {
					id: uuid(),
					company: '',
					title: '',
					description: '',
					startTime: '',
					endTime: '',
					saved: false,
				},
				professionList: this.state.professionList.concat(newProfession),
			});
		}
	}

	deleteProfession(id) {
		this.setState({
			...this.state,
			professionList: this.state.professionList.filter(
				(prof) => prof.key !== id
			),
		});
	}

	toggleSubmit() {
		this.setState({
			...this.state,
			submitted: !this.state.submitted,
		});
	}

	returnComplete() {
		const { firstName, lastName, email, number, saved } =
			this.state.currentIntroduction;

		const { educationList, professionList } = this.state;

		const completeEducation = educationList.map((item) => {
			return (
				<Education
					key={item.key}
					id={item.key}
					schoolName={item.props.schoolName}
					subject={item.props.subject}
					startTime={item.props.startTime}
					gradTime={item.props.gradTime}
					complete={this.state.submitted}
				/>
			);
		});

		const completeProfession = professionList.map((item) => {
			return (
				<Profession
					key={item.key}
					id={item.key}
					company={item.props.company}
					title={item.props.title}
					description={item.props.description}
					startTime={item.props.startTime}
					endTime={item.props.endTime}
					complete={this.state.submitted}
				/>
			);
		});
		return (
			<div className='resume'>
				<Header />
				<Introduction
					firstName={firstName}
					lastName={lastName}
					email={email}
					number={number}
					saved={saved}
					complete={this.state.submitted}
				/>
				<section className='education-list'>{completeEducation}</section>
				<section className='profession-list'>{completeProfession}</section>
				<button className='generate-button' onClick={this.toggleSubmit}>
					Previous
				</button>
			</div>
		);
	}

	returnIncomplete() {
		const { firstName, lastName, email, number, saved } =
			this.state.currentIntroduction;
		const { id, schoolName, startTime, gradTime, subject, eduSaved } =
			this.state.currentEducation;
		const { educationList, professionList } = this.state;

		const { company, title, description, endTime } =
			this.state.currentProfession;
		const idP = this.state.currentProfession.id;
		const startTimeP = this.state.currentProfession.startTime;
		const savedP = this.state.currentProfession.saved;
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
					complete={this.state.submitted}
				/>
				<section className='education-list'>
					<h1>Educational Experience</h1>
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
						deleted={this.deleteEducation}
						complete={this.state.submitted}
					/>
				</section>
				<section className='profession-list'>
					<h1>Professional Experience</h1>
					{professionList}
					<Profession
						id={idP}
						company={company}
						title={title}
						startTime={startTimeP}
						description={description}
						endTime={endTime}
						saved={savedP}
						inputHandler={this.handleProfessionInput}
						toggleSave={this.handleAddingProfession}
						deleted={this.deleteProfession}
						complete={this.state.submitted}
					/>
				</section>
				<button className='generate-button' onClick={this.toggleSubmit}>
					Generate
				</button>
			</div>
		);
	}

	render() {
		return this.state.submitted
			? this.returnComplete()
			: this.returnIncomplete();
	}
}

export default App;
