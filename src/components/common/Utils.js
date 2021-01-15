const fadeInfadeOutFactor = (scroll, posIn, posOut, vwh) => {
	var factor = 0;
	var diffAbsIn = posIn - (1 / 2) * vwh;
	var diffAbsOut = posOut - (1 / 2) * vwh;
	var diffRel = (1 / 2) * vwh;
	if (scroll > diffAbsOut) {
		factor = 1 - (scroll - diffAbsOut) / diffRel;
	} else if (scroll > diffAbsIn) {
		factor = (scroll - diffAbsIn) / diffRel;
	} else {
		factor = 0;
	}
	//console.log("Utils/factor: ", factor, scroll, posIn, posOut, vwh);
	return factor;
};

export default fadeInfadeOutFactor;
