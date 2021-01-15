/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from "@emotion/react";
import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import fadeInfadeOutFactor from "../common/Utils";

const Skills = ({ scroll, posSkill, posProjects, posRef }) => {
	const breakpoints = [676, 767, 991, 1199, 1600, 2140];

	const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

	var vwh = document.documentElement.clientHeight;

	const styleSkills = {
		height: "100vh",
		width: "100%",

		[mq[5]]: {
			marginRight: "350px",
		},
		[mq[4]]: {
			marginRight: "210px",
		},

		"& h1": {
			fontSize: "12.5vh",
			textAlign: "left",
			position: "sticky",
			top: "0px",
			paddingTop: "2vh",
			margin: "0 0 0 2vw",
			color: "rgba(3, 103, 134, 0.2)",
		},

		"& h4": {
			maxWidth: "1440px",
			margin: "0 auto",
			textAlign: "left",
			paddingTop: "5vh",
			fontSize: "3vh",
			paddingLeft: "2vw",

			[mq[5]]: {
				marginRight: "350px",
			},
			[mq[4]]: {
				marginRight: "210px",
			},
		},

		"& .row-out": {
			maxWidth: "1440px",
			marginLeft: "auto",
			marginRight: "auto",
			//marginLeft: '2vw',
			marginTop: "2.5vh",
			height: "70vh",
			paddingLeft: "2vw",

			[mq[5]]: {
				marginRight: "350px",
			},
			[mq[4]]: {
				marginRight: "210px",
			},
		},

		"& .row-in": {
			width: "100%",
			height: "60vh",
			position: "relative",
		},

		"& .col-in": {
			height: "100%",
		},

		"& .diagram": {
			height: "100%",
			//maxHeight: '795px',
			margin: "0px",
			borderRadius: "35px",
			border: "5px solid black",
			backgroundImage:
				"linear-gradient(to bottom right, white, rgba(3, 103, 134, 1))",
			zIndex: "0",
			position: "relative",
		},

		"& .rating": {
			marginBottom: "3vh",
			fontWeight: "700",
			fontSize: "4vh",
			color: "rgba(134, 3, 3, 1)",
			marginLeft: "50px",

			"& .text": {
				width: "150px",
				textAlign: "right",
			},
		},
	};

	return (
		<div className="skills" css={styleSkills} ref={posRef}>
			<motion.h1
				animate={{
					opacity: fadeInfadeOutFactor(
						scroll,
						posSkill,
						posProjects,
						vwh
					),
				}}
			>
				Skills
			</motion.h1>
			<h4>
				These are the languages, frameworks, libraries, etc. I'm working
				most...and it's getting more day by day.
			</h4>
			<div className="row-out row align-items-center justify-items-center">
				<div className="row-in row">
					<div className="col-in col-md-6">
						<div className="diagram">
							<div className="ball b1"></div>
							<div className="ball b2"></div>
							<div className="ball b3"></div>
							<div className="ball b4"></div>
							<div className="ball b5"></div>
							<div className="ball b6"></div>
							<div className="ball b7"></div>
							<div className="ball b8"></div>
							<div className="ball b9"></div>
							<div className="ball b10"></div>
						</div>
					</div>
					<div className="col-in col-md-6 align-items-right">
						<div className="rating d-flex flex-row align-items-baseline">
							<p className="text">html:</p>
							<p className="circle fill"></p>
							<p className="circle fill"></p>
							<p className="circle fill"></p>
							<p className="circle fill"></p>
							<p className="circle fill"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
						</div>
						<div className="rating d-flex flex-row align-items-baseline">
							<p className="text">css:</p>
							<p className="circle fill"></p>
							<p className="circle fill"></p>
							<p className="circle fill"></p>
							<p className="circle fill"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
						</div>
						<div className="rating d-flex flex-row align-items-baseline">
							<p className="text">js:</p>
							<p className="circle fill"></p>
							<p className="circle fill"></p>
							<p className="circle fill"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
						</div>
						<div className="rating d-flex flex-row align-items-baseline">
							<p className="text">reactjs:</p>
							<p className="circle fill"></p>
							<p className="circle fill"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
						</div>
						<div className="rating d-flex flex-row align-items-baseline">
							<p className="text">python:</p>
							<p className="circle fill"></p>
							<p className="circle fill"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
						</div>
						<div className="rating d-flex flex-row align-items-baseline">
							<p className="text">django:</p>
							<p className="circle fill"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
							<p className="circle"></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
