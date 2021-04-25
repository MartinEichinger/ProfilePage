/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from "@emotion/react";
import React from "react";
import { motion } from "framer-motion";
import fadeInfadeOutFactor from "../common/Utils";

const Learning = ({ scroll, posLearning, posContact, posRef }) => {
	const breakpoints = [676, 767, 991, 1199, 1600, 2140];

	const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

	var vwh = document.documentElement.clientHeight;

	const styleLearning = {
		height: "900vh",
		width: "100%",
		margin: "0px",

		"& h1": {
			fontSize: "12.5vh",
			textAlign: "left",
			position: "sticky",
			top: "2vh",
			margin: "0 0 0 2vw",
			color: "rgba(3, 134, 71, 0.2)",
		},

		"& .row-out": {
			maxWidth: "1440px",
			height: "885.5vh",
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
			borderRadius: "35px",
			backgroundImage: "url(learning_background.png)",
			backgroundPosition: "0% 100%",
			backgroundRepeat: "no-repeat",
			zIndex: "100",
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

	if (scroll < 20776) {
		styleFixImg = {
			position: "sticky",
			width: imgWindow,
			top: 0.25 * vwh, //'25vh',
		};
	} else if (scroll >= 20776) {
		styleFixImg = {
			position: "sticky",
			width: imgWindow,
			top: 0.25 * vwh - (scroll - 20776),
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
		"& section:nth-of-type(5)": { height: vwh },
		"& section:nth-of-type(6)": { height: vwh },
		"& section:nth-of-type(7)": { height: vwh },
		"& section:nth-of-type(8)": { height: vwh },
		"& section:nth-of-type(9)": { height: 0.5 * vwh },
	};

	return (
		<div css={styleLearning} ref={posRef}>
			<motion.h1
				animate={{
					opacity: fadeInfadeOutFactor(
						scroll,
						posLearning,
						posContact,
						vwh
					),
				}}
			>
				Learning path
			</motion.h1>
			<div className="row-out row" css={styleLearning}>
				<div className="col-md-6">
					<div
						className="img"
						css={styleFixImg}
					></div>
				</div>
				<div className="col-md-6">
					<div
						className="text col"
						css={styleFixText}
					>
						<section>
							<div className="content">
								<p>
									After
									high
									school...
								</p>
							</div>
						</section>
						<section>
							<div className="content">
								<p>
									I start
									studying
									electrical
									engineering
									and
									information
									technology
									at the
									TU
									Munich...
								</p>
							</div>
						</section>
						<section>
							<div className="content">
								<p>
									As a
									freshly
									started
									test
									engineer,
									I
									program
									test
									automations
									for HiL
									test
									benches
									with
									Python...
								</p>
							</div>
						</section>
						<section>
							<div className="content">
								<p>
									As my
									career
									progressed,
									I
									quickly
									moved
									away
									from
									programming
									and took
									on more
									and more
									management
									tasks...
								</p>
							</div>
						</section>
						<section>
							<div className="content">
								<p>
									After
									several
									years, I
									return
									to
									software
									programming
									privately
									and
									learn
									HTML,
									CSS,
									JADE and
									SASS on
									my own
									to
									program
									the
									website
									for our
									sports
									club...
								</p>
							</div>
						</section>
						<section>
							<div className="content">
								<p>
									The
									enthusiasm
									remains
									and so I
									decide a
									year ago
									to
									devote
									myself
									intensively
									to the
									study of
									web
									development
									alongside
									my
									work...
								</p>
							</div>
						</section>
						<section>
							<div className="content">
								<p>
									I start
									with the
									Codecademy
									and the
									Career
									Path Web
									Development...
								</p>
							</div>
						</section>
						<section>
							<div className="content">
								<p>
									Curious
									to learn
									more
									about
									React.js,
									I take
									the
									course
									"Mastering
									React"
									by Mosh
									Hamedani...
								</p>
							</div>
						</section>
						<section>
							<div className="content">
								<p>
									For a
									more
									academic
									learning
									path, I
									then
									successfully
									completed
									the CS50
									"Computer
									Science
									for Web
									Programming"
									programme
									at
									HarvardX
									(edx.org).
									Currently
									I am
									studying
									media
									informatics
									at the
									ILS
									Fernschule...
								</p>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Learning;
