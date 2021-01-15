/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from "@emotion/react";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";
import fadeInfadeOutFactor from "./Utils";

const ArrowDown = ({ onClick, scroll, posStart, posContact }) => {
	const [resetArrow, setResetArrow] = useState(false);

	const { x } = useSpring({
		from: { x: 0 },
		to: { x: 3 },
		config: { duration: 3000 },
		onRest: () => setResetArrow((state) => !state),
		reset: resetArrow,
	});

	var vwh = document.documentElement.clientHeight;

	const styleArrowDown = {
		color: "rgba(120,120,120,1)",
		position: "fixed",
		top: "calc(100vh - 120px)",
		left: "calc(50vw - 60px)",
		marginRight: "auto",
		zIndex: "200",
		backgroundImage: "url(ArrowDown.png)",
		backgroundRepeat: "no-repeat",
		backgroundColor: "rgba(255,255,255,0.5)",
		backgroundPosition: "50% 50%",
		width: "160px",
		height: "100px",
		cursor: "pointer",
		margin: "20px",
		borderRadius: "30px",

		"& .badge": {
			position: "relative",
			width: "300px",
			borderRadius: "60%",
			transform: "rotate(-70deg)",
		},

		"& h1 span": {
			//font: 26px Monaco, MonoSpace;
			fontSize: "24px",
			height: "80px",
			position: "absolute",
			width: "25px",
			left: "40px",
			top: "-120px",
			transformOrigin: "bottom center",
		},

		"& .char1": { transform: "rotate(-5deg)" },
		"& .char2": { transform: "rotate(25deg)" },
		"& .char3": { transform: "rotate(55deg)" },
		"& .char4": { transform: "rotate(85deg)" },
		"& .char5": { transform: "rotate(115deg)" },
		"& .char6": { transform: "rotate(145deg)" },
	};

	return (
		<motion.div
			animate={{
				opacity: fadeInfadeOutFactor(scroll, posStart, posContact, vwh),
			}}
		>
			<animated.div
				style={{
					transform: x
						.interpolate({
							range: [
								0,
								1,
								1.25,
								1.35,
								1.45,
								1.55,
								1.65,
								1.75,
								2,
								3,
							],
							output: [
								1,
								1,
								0.97,
								0.9,
								1.1,
								0.9,
								1.1,
								1.03,
								1,
								1,
							],
						})
						.interpolate((x) => `scale(${x})`),
				}}
				css={styleArrowDown}
				onClick={() => onClick("down")}
			>
				<div className="badge">
					<h1>
						<span className="char1">s</span>
						<span className="char2">c</span>
						<span className="char3">r</span>
						<span className="char4">o</span>
						<span className="char5">l</span>
						<span className="char6">l</span>
					</h1>
				</div>
			</animated.div>
		</motion.div>
	);
};

export default ArrowDown;

//<img css={styleArrowDown} src="./ArrowDown.png" />
