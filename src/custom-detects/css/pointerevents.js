'use strict';

module.exports = function () {
	var style = document.createElement('a').style;
	style.cssText = 'pointer-events:none';
	return style.pointerEvents === 'none';
};
