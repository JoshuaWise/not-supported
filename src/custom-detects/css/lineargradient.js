'use strict';

module.exports = function () {
	var css = 'background-image:linear-gradient(to top left, #9f9, white);';
	
	var elem = document.createElement('a');
	var style = elem.style;
	style.cssText = css;
	
	// IE6 returns undefined so cast to string
	return ('' + style.backgroundImage).indexOf('linear-gradient') > -1;
};
