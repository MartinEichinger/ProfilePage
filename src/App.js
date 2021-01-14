import React, { Component } from "react";

import Navigation from "./components/Navigation/Navigation";
import LandingPage from "./components/LandingPage/LandingPage";
import Welcome from "./components/Welcome/Welcome";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Learning from "./components/Learning/Learning";
import Contact from "./components/Contact/Contact";
import ArrowDown from "./components/common/ArrowDown";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { theposition: 0 };
		this.clientHeight = document.documentElement.clientHeight; //Viewable area height
		this.pos1 = 0;
		this.posWelcomeRef = React.createRef();
		this.pos2 = 0; //this.clientHeight * 1; // + 35;
		this.posSkillsRef = React.createRef();
		this.pos3 = 0; //this.clientHeight * 6; //+ 100;
		this.posProjectsRef = React.createRef();
		this.pos4 = 0; //this.clientHeight * 7;
		this.posLearningRef = React.createRef();
		this.pos5 = 0; //this.clientHeight * 7;
		this.posContactRef = React.createRef();
		this.pos6 = 0; //this.clientHeight * 7;
	}

	componentDidMount() {
		window.addEventListener("scroll", this.listenToScroll);
		this.pos2 = this.posWelcomeRef.current.offsetTop;
		this.pos3 = this.posSkillsRef.current.offsetTop;
		this.pos4 = this.posProjectsRef.current.offsetTop;
		this.pos5 = this.posLearningRef.current.offsetTop;
		this.pos6 = this.posContactRef.current.offsetTop;
	}

	listenToScroll = (event) => {
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;

		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		const rotation = (winScroll / height) * 360;

		this.setState({
			theposition: winScroll,
			rotation: rotation,
		});

		//console.log("App/Position: ", winScroll, height, parseInt(rotation));
	};

	onClick = (e) => {
		//console.log("geclicked: ", this.state.theposition, this.pos1, this.pos2, this.pos3);
		if (this.state.theposition < this.pos2) {
			window.scrollTo({
				left: 0,
				top: this.pos2,
				behavior: "smooth",
			});
		} else if (this.state.theposition < this.pos3) {
			window.scrollTo({
				left: 0,
				top: this.pos3,
				behavior: "smooth",
			});
		} else if (this.state.theposition < this.pos4) {
			window.scrollTo({
				left: 0,
				top: this.pos4,
				behavior: "smooth",
			});
		} else if (this.state.theposition < this.pos5) {
			window.scrollTo({
				left: 0,
				top: this.pos5,
				behavior: "smooth",
			});
		} else if (this.state.theposition < this.pos6) {
			window.scrollTo({
				left: 0,
				top: this.pos6,
				behavior: "smooth",
			});
		}
	};

	onClickPos = (pos) => {
		//console.log("App/onClickPos", pos);
		if (pos === 0) {
			window.scrollTo({
				left: 0,
				top: this.pos1,
				behavior: "smooth",
			});
		} else if (pos === 1) {
			window.scrollTo({
				left: 0,
				top: this.pos2,
				behavior: "smooth",
			});
		} else if (pos === 2) {
			window.scrollTo({
				left: 0,
				top: this.pos3,
				behavior: "smooth",
			});
		} else if (pos === 3) {
			window.scrollTo({
				left: 0,
				top: this.pos4,
				behavior: "smooth",
			});
		} else if (pos === 4) {
			window.scrollTo({
				left: 0,
				top: this.pos5,
				behavior: "smooth",
			});
		} else if (pos === 5) {
			window.scrollTo({
				left: 0,
				top: this.pos6,
				behavior: "smooth",
			});
		}
	};

	render() {
		console.log(
			"App/render: ",
			this.state.theposition,
			this.pos4,
			this.pos5,
			this.pos6
		);

		return (
			<div css={this.styleApp} className="App">
				<Navigation
					onClick={this.onClickPos}
					rotation={this.state.rotation}
				/>
				<LandingPage />
				<Welcome
					scroll={this.state.theposition}
					posWelcome={this.pos2}
					posSkill={this.pos3}
					posRef={this.posWelcomeRef}
				/>
				<Skills
					scroll={this.state.theposition}
					posSkill={this.pos3}
					posProjects={this.pos4}
					posRef={this.posSkillsRef}
				/>
				<Projects
					scroll={this.state.theposition}
					posProjects={this.pos4}
					posRef={this.posProjectsRef}
				/>
				<Learning
					scroll={this.state.theposition}
					posRef={this.posLearningRef}
				/>
				<Contact
					scroll={this.state.theposition}
					posRef={this.posContactRef}
				/>
				<ArrowDown onClick={this.onClick} />
			</div>
		);
	}
}

export default App;
