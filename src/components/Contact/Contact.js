/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from "@emotion/react";

import React from "react";

const Contact = ({ scroll, posRef }) => {
	const breakpoints = [676, 767, 991, 1199, 1600, 2140];

	const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

	//var vwh = document.documentElement.clientHeight;

	const styleContact = {
		height: "100vh",
		width: "100%",
		backgroundColor: "rgba(134, 3, 3, 0.1)",

		"& h1": {
			fontSize: "12.5vh",
			textAlign: "left",
			position: "sticky",
			top: "2vh",
			margin: "0 0 0 2vw",
			color: "rgba(134, 3, 3, 0.2)",
			//opacity: this.h1Opacity,
		},

		"& p": {
			fontSize: "32px",
		},

		"& .row-out": {
			maxWidth: "1440px",
			marginLeft: "auto",
			marginRight: "auto",
			paddingLeft: "2vw",
			height: "85.5vh",

			[mq[5]]: {
				marginRight: "350px",
			},
			[mq[4]]: {
				marginRight: "210px",
			},

			"& .body": {
				width: "100%",
			},

			"& input, textarea, label": {
				width: "80%",
				marginLeft: "auto",
				marginRight: "auto",
				textAlign: "left",
			},
		},
	};

	return (
		<div
			class="contact d-flex flex-column justify-content-center"
			ref={posRef}
			css={styleContact}
		>
			<h1>Contact</h1>
			<div class="row-out row align-items-center">
				<div class="col-md-6">
					<p>Here we are...what do you say?</p>
					<p>
						You liked what you see? Some fun idea what to do next?
					</p>
					<p>
						So feel free to send me your message...and always
						remember...keep it decent.
					</p>
					<p>Cheers, Ed Madd</p>
				</div>
				<div class="col-md-6 d-flex flex-column align-items-center">
					<div class="header d-flex align-items-center">
						<p>Contact me!</p>
					</div>
					<div class="body">
						<div class="mb-3 ms-5 me-5">
							<label for="yourName" class="form-label">
								Your name
							</label>
							<input
								type="text"
								class="form-control"
								id="yourNameInput"
								placeholder="..."
							/>
						</div>
						<div class="mb-3 ms-5 me-5">
							<label for="yourEmail" class="form-label">
								Email
							</label>
							<input
								type="email"
								class="form-control"
								id="yourEmailInput"
								placeholder="name@example.com"
							/>
						</div>
						<div class="mb-3 ms-5 me-5">
							<label
								for="exampleFormControlTextarea1"
								class="form-label"
							>
								Your message
							</label>
							<textarea
								class="form-control"
								id="exampleFormControlTextarea1"
								rows="3"
							></textarea>
						</div>
						<button class="mb-3 bttn">Send</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
