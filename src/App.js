import React, { Component } from "react";

import Navigation from "./components/Navigation/Navigation";
import LandingPage from "./components/LandingPage/LandingPage";
import Welcome from "./components/Welcome/Welcome";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Learning from "./components/Learning/Learning";
import Contact from "./components/Contact/Contact";
import ArrowDown from "./components/common/ArrowDown";
import ArrowUp from "./components/common/ArrowUp";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { theposition: 0 };
		this.clientHeight = document.documentElement.clientHeight; //Viewable area height
		//this.pos1 = 0;
		this.posWelcomeRef = React.createRef();
		//this.pos2 = 0;
		this.posSkillsRef = React.createRef();
		//this.pos3 = 0;
		this.posProjectsRef = React.createRef();
		//this.pos4 = 0; //this.clientHeight * 7;
		this.posLearningRef = React.createRef();
		//this.pos5 = 0; //this.clientHeight * 7;
		this.posContactRef = React.createRef();
		//this.pos6 = 0; //this.clientHeight * 7;
		//this.pos7 = 20000;

		this.vwh = document.documentElement.clientHeight;
	}

	componentDidMount() {
		console.log("App/compDidMount");
		window.addEventListener("scroll", this.listenToScroll);
		//this.pos2 = this.posWelcomeRef.current.offsetTop;
		//this.pos3 = this.posSkillsRef.current.offsetTop;
		//this.pos4 = this.posProjectsRef.current.offsetTop;
		//this.pos5 = this.posLearningRef.current.offsetTop;
		//this.pos6 = this.posContactRef.current.offsetTop;
		this.setState({
			pos1: 0,
			pos2: this.posWelcomeRef.current.offsetTop,
			pos3: this.posSkillsRef.current.offsetTop,
			pos4: this.posProjectsRef.current.offsetTop,
			pos5: this.posLearningRef.current.offsetTop,
			pos6: this.posContactRef.current.offsetTop,
			pos7: 30000,
		});
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

	onClick = (dir) => {
		var { theposition, pos1, pos2, pos3, pos4, pos5, pos6 } = this.state;

		console.log("geclicked: ", theposition, pos1, pos2, pos3, dir);

		if (dir === "up") theposition -= 1;

		if (theposition < pos2) {
			window.scrollTo({
				left: 0,
				top: dir === "down" ? pos2 : pos1,
				behavior: "smooth",
			});
		} else if (theposition < pos3) {
			window.scrollTo({
				left: 0,
				top: dir === "down" ? pos3 : pos2,
				behavior: "smooth",
			});
		} else if (theposition < pos4) {
			window.scrollTo({
				left: 0,
				top: dir === "down" ? pos4 : pos3,
				behavior: "smooth",
			});
		} else if (theposition < pos5) {
			window.scrollTo({
				left: 0,
				top: dir === "down" ? pos5 : pos4,
				behavior: "smooth",
			});
		} else if (theposition < pos6) {
			window.scrollTo({
				left: 0,
				top: dir === "down" ? pos6 : pos5,
				behavior: "smooth",
			});
		}
	};

	onClickPos = (pos) => {
		var { pos1, pos2, pos3, pos4, pos5, pos6 } = this.state;

		//console.log("App/onClickPos", pos);
		if (pos === 0) {
			window.scrollTo({
				left: 0,
				top: pos1,
				behavior: "smooth",
			});
		} else if (pos === 1) {
			window.scrollTo({
				left: 0,
				top: pos2,
				behavior: "smooth",
			});
		} else if (pos === 2) {
			window.scrollTo({
				left: 0,
				top: pos3,
				behavior: "smooth",
			});
		} else if (pos === 3) {
			window.scrollTo({
				left: 0,
				top: pos4,
				behavior: "smooth",
			});
		} else if (pos === 4) {
			window.scrollTo({
				left: 0,
				top: pos5,
				behavior: "smooth",
			});
		} else if (pos === 5) {
			window.scrollTo({
				left: 0,
				top: pos6,
				behavior: "smooth",
			});
		}
	};

	render() {
		//console.log(
		//	"App/render: ",
		//	this.state.theposition,
		//	this.pos4,
		//	this.pos5,
		//	this.pos6
		//);
		var { pos1, pos2, pos3, pos4, pos5, pos6, pos7 } = this.state;

		return (
			<div css={this.styleApp} className="App">
				<ArrowUp
					onClick={this.onClick}
					scroll={this.state.theposition}
					posWelcome={pos2}
					posEnd={pos7}
				/>
				<Navigation
					onClick={this.onClickPos}
					rotation={this.state.rotation}
				/>
				<LandingPage />
				<Welcome
					scroll={this.state.theposition}
					posWelcome={pos2}
					posSkill={pos3}
					posRef={this.posWelcomeRef}
				/>
				<Skills
					scroll={this.state.theposition}
					posSkill={pos3}
					posProjects={pos4}
					posRef={this.posSkillsRef}
				/>
				<Projects
					scroll={this.state.theposition}
					posProjects={pos4}
					posLearning={pos5}
					posRef={this.posProjectsRef}
				/>
				<Learning
					scroll={this.state.theposition}
					posLearning={pos5}
					posContact={pos6}
					posRef={this.posLearningRef}
				/>
				<Contact
					scroll={this.state.theposition}
					posContact={pos6}
					posEnd={pos7}
					posRef={this.posContactRef}
				/>
				<ArrowDown
					onClick={this.onClick}
					scroll={this.state.theposition}
					posStart={pos1}
					posContact={pos6}
				/>
			</div>
		);
	}
}

export default App;
