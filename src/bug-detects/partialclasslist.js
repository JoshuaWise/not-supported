'use strict';
// Depends on `Modernizr.classlist` test.

module.exports = function () {
	if (!Modernizr.classlist) {
		return false;
	}
	try {
		var testElement = document.createElement('_');
		testElement.classList.add('c1', 'c2');
		testElement.classList.toggle('c3', false);
		
		var svgSupport = !document.createElementNS || ('classList' in document.createElementNS('http://www.w3.org/2000/svg', 'g'));
		var multipleAddSupport = testElement.classList.contains('c2');
		var secondToggleArgSupport = !testElement.classList.contains('c3');
		
		return !(svgSupport && multipleAddSupport && secondToggleArgSupport);
	} catch (err) {
		return true;
	}
};
