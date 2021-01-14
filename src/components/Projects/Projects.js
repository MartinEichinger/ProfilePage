/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from "@emotion/react";
import React, { Component } from "react";

import Cards from "../common/Cards";

class Projects extends Component {
	constructor(props) {
		super(props);
		this.scroll = this.props.scroll;
		this.posProjects = this.props.posProjects;
		this.posRef = this.props.posRef;

		this.breakpoints = [676, 767, 991, 1199, 1600, 2140];
		this.mq = this.breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
		this.vwh = document.documentElement.clientHeight;

		this.h1Opacity =
			(12 * (this.scroll - (this.posProjects - this.vwh / 2))) /
			this.posProjects;

		this.cards = [
			{
				id: "card1",
				ref: "...",
				type: "Website",
				img: "imageEdMadd.png",
				cat: "Real",
				title: "EdMadd.Development",
				summary: "My profile page",
				finalDate: "01/2021",
				shortDesc: "My profile page.",
				backend: "-",
				frontend: "React.js, emotion.js, react-spring, HTML, JS, CSS",
			},
			{
				id: "card2",
				ref: "https://youtu.be/A58HqTbh4iA",
				type: "Chrome Extension",
				img: "imageTranslateIt.png",
				cat: "Demo",
				title: "Translate It",
				summary:
					"Chrome extension to translate terms on the page you read",
				finalDate: "12/2020",
				shortDesc:
					"The Google Chrome extension provides the option of translating individual terms into another language via right mouse button click using Google Translate. The translated terms are displayed as a notification and also collected in the pop-up window of the Google Chrome extension. In this way, the translations can be used for later learning / consolidation of the vocabulary. The target and source language can be set in the options of the extension.",
				backend: "-",
				frontend: "Chrome extension, HTML, JS, CSS",
			},
			{
				id: "card3",
				ref: "https://youtu.be/MCzhuUK6A3A",
				type: "Web application",
				img: "imagePPlan.png",
				cat: "Demo",
				title: "PPlan",
				summary: "Ressource management tool to plan multiple teams",
				finalDate: "11/2020",
				shortDesc:
					"With this ressource management web application different teams can be created and managed. The team members can then be scheduled by project managers in their projects in a weekly chart",
				backend:
					"Django, django-rest-auth for user auth, Django REST framework to create web API",
				frontend:
					"React.js, React/Redux, react-router-dom, material-ui, axios and css-in-js lib emotion",
			},
			{
				id: "card4",
				ref: "https://youtu.be/OPd7agyAdOM",
				type: "Web application",
				img: "imageTwitterLike.png",
				cat: "Learning",
				title: "Social network",
				summary:
					"Twitter like social network website for making posts and following users",
				finalDate: "10/2020",
				shortDesc:
					"With the social network web application you can register and signin. The user can view all posts from the network and follow other users. Details are described in the video.",
				backend: "Django",
				frontend: "Django, JavaScript, CSS",
			},
			{
				id: "card5",
				ref: "https://cc-ravenous.now.sh/",
				type: "Web application",
				img: "imageRavenous.png",
				cat: "Learning",
				title: "Ravenous",
				summary: "Responsive search website build with React.js",
				finalDate: "04/2020",
				shortDesc:
					"Search website to find the best locations in the city of your choice for your search term.",
				backend: "-",
				frontend: "Yelp API, React, HTML, JavaScript, CSS",
			},
		];

		this.styleProjects = {
			height: "100vh",
			width: "100%",
			backgroundColor: "rgba(3, 134, 71, 0.1)",

			[this.mq[5]]: {
				marginRight: "350px",
			},
			[this.mq[4]]: {
				marginRight: "210px",
			},

			"& h1": {
				fontSize: "12.5vh",
				textAlign: "left",
				position: "sticky",
				top: "0",
				paddingTop: "2vh",
				margin: "0 0 0 2vw",
				color: "rgba(3, 134, 71, 0.2)",
				opacity: this.h1Opacity,
			},

			"& .row-out": {
				maxWidth: "1440px",
				marginLeft: "auto",
				marginRight: "auto",

				[this.mq[5]]: {
					marginRight: "350px",
				},
				[this.mq[4]]: {
					marginRight: "210px",
				},
			},

			"& button": {
				zIndex: 5,
				fontSize: "32px",
				borderRadius: "32px",
				border: "3px solid rgba(3, 134, 71, 0.1)",
				color: "rgba(120,120,120,1)",
				padding: "0px 20px",

				"&:hover": {
					border: "3px solid rgba(3, 134, 71, 1)",
					backgroundColor: "rgba(120,120,120,1)",
					color: "white",
					outline: "none",
				},

				"&:active": {
					border: "3px solid rgba(3, 134, 71, 1)",
					backgroundColor: "rgba(120,120,120,1)",
					color: "white",
					outline: "none",
				},

				"&:visited": {
					border: "3px solid rgba(3, 134, 71, 1)",
					backgroundColor: "rgba(120,120,120,1)",
					color: "white",
					outline: "none",
				},

				"&:focus": {
					border: "3px solid rgba(3, 134, 71, 1)",
					backgroundColor: "rgba(120,120,120,1)",
					color: "white",
					outline: "none",
				},
			},
		};
	}

	renderCards = () => {
		return this.cards.map((card) => {
			return <Cards content={card} />;
		});
	};

	render() {
		return (
			<div
				className="projects"
				css={this.styleProjects}
				ref={this.posRef}
			>
				<h1>Projects</h1>
				<div className="row-out">
					<div className="d-flex justify-content-around">
						<button>All</button>
						<button>Real</button>
						<button>Demo</button>
						<button>Learning</button>
					</div>
					<div className="cards d-flex flex-wrap">
						{this.renderCards()}
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
