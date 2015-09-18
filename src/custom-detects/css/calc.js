'use strict';

module.exports = Modernizr.testStyles('#modernizr { width: calc(40px / (1 + 3)); }', function(el) {
	var compStyle = parseInt(
		(window.getComputedStyle
			? window.getComputedStyle(el, null)
			: el.currentStyle || {})
		.width, 10);
	return compStyle >= 9 && compStyle <= 11;
});
