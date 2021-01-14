/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from "@emotion/react";

import React from "react";

const Welcome = ({ scroll, posWelcome, posSkill, posRef }) => {
	const breakpoints = [676, 767, 991, 1199, 1600, 2140];

	const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

	var vwh = document.documentElement.clientHeight;

	var h1Opacity;
	posSkill -= vwh;
	if (scroll < posSkill) {
		h1Opacity = (2 * (scroll - posWelcome / 2)) / posWelcome;
	} else {
		h1Opacity = 1 - (12 * (scroll - posSkill)) / posSkill;
	}

	//console.log("welcome/postions: ", posWelcome, posSkill, scroll, h1Opacity);

	var styleWelcome = {
		height: "500vh",
		backgroundColor: "rgba(3, 103, 134, 0.1)",
		width: "100%",

		"& h1": {
			fontSize: "12.5vh",
			textAlign: "left",
			position: "sticky",
			top: "0px",
			paddingTop: "2vh",
			margin: "0 0 0 2vw",
			color: "rgba(3, 103, 134, 0.2)",
			opacity: h1Opacity,
		},

		"& .row-out": {
			maxWidth: "1440px",
			height: "485.5vh",
			marginLeft: "auto",
			marginRight: "auto",
			paddingLeft: "2vw",

			[mq[5]]: {
				marginRight: "350px",
			},
			[mq[4]]: {
				marginRight: "210px",
			},
		},

		"& .img": {
			margin: "0px",
			marginTop: vwh * 0.2,
			height: vwh * 0.6,
			background: 'url("landingpage.png") no-repeat left center',
			//backgroundSize: 'cover',
			borderRadius: "35px",

			[mq[1]]: {
				height: "40vh !important",
			},
		},

		"& .text": {
			marginLeft: "10px",
			marginRight: "20px",
			fontSize: "32px",
			textAlign: "left",
			marginTop: "50vh",
		},
	};

	var imgWindow = document.getElementById("img")?.clientWidth - 30;
	var styleFixImg, styleFixText;

	console.log("Welcome/scroll: ", scroll, posWelcome, posSkill);
	if (scroll < posSkill) {
		styleFixImg = {
			position: "sticky",
			width: imgWindow,
			top: 0.25 * vwh, //'25vh',
		};
	} else if (scroll >= posSkill) {
		styleFixImg = {
			position: "sticky",
			width: imgWindow,
			top: 0.25 * vwh - (scroll - posSkill),
		};
	}

	styleFixText = {
		"& section": {
			zIndex: "1",
			position: "relative",
		},

		"& .content": {
			position: "sticky",
			WebkitPosition: "-webkit-sticky",
			width: "100%",
			top: "50%",
		},

		"& section:nth-of-type(1)": { height: 0.5 * vwh },
		"& section:nth-of-type(2)": { height: vwh },
		"& section:nth-of-type(3)": { height: vwh },
		"& section:nth-of-type(4)": { height: vwh },
		"& section:nth-of-type(5)": { height: 0.5 * vwh },
	};

	//console.log("welcome/scroll: ",scroll, imgWindow, document.documentElement.clientHeight);

	return (
		<div css={styleWelcome} ref={posRef}>
			<h1>Welcome</h1>
			<div className="row-out row">
				<div className="col-md-6" id="img">
					<div className="img" css={styleFixImg}></div>
				</div>
				<div className="col-md-6">
					<div className="text col" css={styleFixText}>
						<section>
							<div className="content">
								<p className="mt-5">
									Hi, my name is "Ed Madd" Martin.
								</p>
							</div>
						</section>
						<section>
							<div className="content">
								<p>I'm passionate about web development.</p>
							</div>
						</section>
						<section>
							<div className="content">
								<p>
									Are you? Then check out my site and
									projects!
								</p>
							</div>
						</section>
						<section>
							<div className="content">
								<p>
									If you like what you see here, have ideas,
									interesting or funny insights related to web
									development then let me know.
								</p>
							</div>
						</section>
						<section>
							<div className="content">
								<p>I am already very curious.</p>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
