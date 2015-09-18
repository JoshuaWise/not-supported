'use strict';

module.exports = Modernizr.testProp('boxSizing', 'border-box', true)
	&& (document.documentMode === undefined || document.documentMode > 7);
