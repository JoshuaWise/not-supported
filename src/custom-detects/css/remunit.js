'use strict';

module.exports = function() {
	var style = document.createElement('a').style;
	try {
		style.font = '3rem serif';
	}
	catch (e) {}
	return (/rem/).test(style.font);
};
