'use strict';

module.exports = Modernizr.testStyles('#modernizr { height: 50vh; }', function (el) {
	var height = parseInt(window.innerHeight / 2, 10);
	var compStyle = parseInt(
		(window.getComputedStyle
			? getComputedStyle(el, null)
			: el.currentStyle || {})
		.height, 10);
	return Math.abs(compStyle - height) <= 1;
});
