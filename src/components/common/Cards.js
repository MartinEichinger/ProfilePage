/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from "@emotion/react";

import React, { Component } from "react";
import CachedIcon from "@material-ui/icons/Cached";
import TodayIcon from "@material-ui/icons/Today";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { motion } from "framer-motion";

class Cards extends Component {
	constructor(props) {
		super(props);

		this.img = this.props.content.img;
		/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
		this.styleFlipCard = {
			margin: "2vh 2vw",
			backgroundColor: "transparent",
			width: "300px",
			height: "380px",
			borderRadius: "15px",
			perspective:
				"1000px" /* Remove this if you don't want the 3D effect */,

			"&.active .flip-card-inner": {
				transform: "rotateY(180deg)",
			},

			"& .flip-card-inner .img": {
				backgroundImage: `url(${this.img})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				width: "250px",
				height: "150px",
				marginTop: "15px",
				marginLeft: "auto",
				marginRight: "auto",
				borderRadius: "5px",
				boxShadow: "0px 0px 10px black",

				"& .icon": {
					position: "absolute",
					right: "30px",
					top: "130px",
					color: "rgba(134,3,3,1)",
				},
			},

			"& .flip-card-inner h4": {
				color: "rgba(3, 134, 71, 1)",
				fontSize: "16px",
				textAlign: "left",
				marginLeft: "15px",
				marginTop: "20px",
			},

			"& .flip-card-inner h1": {
				color: "black",
				fontSize: "24px",
				textAlign: "left",
				marginLeft: "15px",
				marginTop: "15px",
				padding: "0px",
			},

			"& .flip-card-inner p": {
				color: "rgba(120,120,120,1)",
				fontSize: "18px",
				marginLeft: "15px",
				textAlign: "left",
				fontFamily: "Montserrat Alternates",
			},

			"& .flip-card-inner .flip-card-back p": {
				color: "rgba(120,120,120,1)",
				fontSize: "12px",
				margin: "5px 15px 0px 15px",
				textAlign: "left",
				fontFamily: "Montserrat Alternates",
			},

			"& .flip-card-inner .iconleft": {
				position: "absolute",
				bottom: "5px", //'15px',
				left: "5px",
				width: "24px",
				backgroundColor: "rgba(3, 134, 71, 1)",
				borderRadius: "24px",
				cursor: "pointer",
			},

			"& .flip-card-inner .iconright": {
				position: "absolute",
				bottom: "15px",
				right: "15px",
				width: "100px",
				cursor: "pointer",
				color: "rgba(120,120,120,1)",
			},
		};

		/* This container is needed to position the front and back side */
		this.styleFlipCardInner = {
			position: "relative",
			width: "100%",
			height: "100%",
			textAlign: "center",
			transition: "transform 0.8s",
			transformStyle: "preserve-3d",
		};

		/* Style the back side */
		this.styleFlipCardBack = {
			position: "absolute",
			borderRadius: "15px",
			width: "100%",
			height: "100%",
			border: "2px solid rgba(3, 134, 71, 1)",
			//-webkit-backface-visibility: hidden, /* Safari */
			backfaceVisibility: "hidden",
			backgroundColor: "#EEEEEE",
			color: "black",
			transform: "rotateY(180deg)",
		};

		/* Style the front side (fallback if image is missing) */
		this.styleFlipCardFront = {
			position: "absolute",
			borderRadius: "15px",
			border: "2px solid rgba(3, 134, 71, 1)",
			width: "100%",
			height: "100%",
			//-webkit-backface-visibility: hidden, /* Safari */
			backfaceVisibility: "hidden",
			backgroundColor: "#EEEEEE",
			color: "black",
		};
	}

	onClickRotate = (arg) => {
		//console.log("hover", arg);
		var el = document.getElementById(arg.id);
		el.classList.add("active");
		//el.children[0].classList.add('active');
	};

	onClickRotateOut = (arg) => {
		var el = document.getElementById(arg.id);
		el.classList.remove("active");
		//el.children[0].classList.remove('active');
	};

	render() {
		var {
			id,
			ref,
			type,
			cat,
			title,
			summary,
			finalDate,
			shortDesc,
			backend,
			frontend,
		} = this.props.content;

		return (
			<div css={this.styleFlipCard} className="flip-card" id={id}>
				<div className="flip-card-inner" css={this.styleFlipCardInner}>
					<div
						className="flip-card-front"
						css={this.styleFlipCardFront}
					>
						<div className="img">
							<div className="icon">
								<a href={ref} target="_blank" rel="noreferrer">
									<PlayCircleFilledIcon />
								</a>
							</div>
						</div>
						<h4>
							{type} - {cat}
						</h4>
						<h1>{title}</h1>
						<p>{summary}</p>
						<motion.div
							className="iconleft"
							onClick={() => this.onClickRotate({ id })}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<CachedIcon />
						</motion.div>
						<div className="iconright">
							<TodayIcon />
							{finalDate}
						</div>
					</div>
					<div
						className="flip-card-back"
						css={this.styleFlipCardBack}
					>
						<h1>Short description:</h1>
						<p>{shortDesc}</p>
						<h1>Used technologies:</h1>
						<p>Backend: {backend}</p>
						<p>Frontend: {frontend}</p>
						<motion.div
							className="iconleft"
							onClick={() => this.onClickRotateOut({ id })}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<CachedIcon />
						</motion.div>
					</div>
				</div>
			</div>
		);
	}
}

export default Cards;
