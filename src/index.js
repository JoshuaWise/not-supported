'use strict';

Modernizr.addTest('cssremunit', require('./custom-detects/css/remunit'));
Modernizr.addTest('cssboxsizing', require('./custom-detects/css/boxsizing'));
Modernizr.addTest('csspointerevents', require('./custom-detects/css/pointerevents'));
Modernizr.addTest('csstransitions', require('./custom-detects/css/transitions'));
Modernizr.addTest('csslineargradient', require('./custom-detects/css/lineargradient'));
Modernizr.addTest('cssbackgroundoptions', require('./custom-detects/css/backgroundoptions'));
Modernizr.addTest('csscalc', require('./custom-detects/css/calc'));
Modernizr.addTest('requestanimationframe', require('./custom-detects/requestanimationframe'));
Modernizr.addTest('matchmedia', require('./custom-detects/matchmedia'));
Modernizr.addTest('xhrtimeout', require('./custom-detects/network/xhr-timeout'));
Modernizr.addTest('bloburls', require('./custom-detects/url/bloburls'));

var modern = !!(Modernizr.es5
	&& Modernizr.cssremunit
	&& Modernizr.cssvwunit
	&& Modernizr.cssvhunit
	&& Modernizr.csscalc
	&& Modernizr.cssboxsizing
	&& Modernizr.csspointerevents
	&& Modernizr.userselect
	&& Modernizr.csstransitions
	&& Modernizr.cssanimations
	&& Modernizr.csstransforms3d
	&& Modernizr.csslineargradient
	&& Modernizr.cssbackgroundoptions
	&& Modernizr.flexbox
	&& Modernizr.flexwrap
	&& Modernizr.typedarrays
	&& Modernizr.blobconstructor
	&& Modernizr.bloburls
	&& Modernizr.xhrtimeout
	&& Modernizr.websockets
	&& Modernizr.websocketsbinary
	&& Modernizr.webworkers
	&& Modernizr.history
	&& Modernizr.canvastext
	&& Modernizr.dataset
	&& Modernizr.classlist
	&& Modernizr.scriptdefer
	&& Modernizr.scriptasync
	&& Modernizr.audio
	&& Modernizr.video
	&& Modernizr.progressbar
	&& Modernizr.unknownelements
	&& Modernizr.inlinesvg
	&& Modernizr.requestanimationframe
	&& Modernizr.matchmedia
);

if (modern) {
	Modernizr.addTest('partialclasslist', require('./bug-detects/partialclasslist'));
	
	Modernizr.load([{
			test: Modernizr.partialclasslist,
			nope: '../src/polyfills/classlist.js',
			complete: function () {
				// record completion
			}
		}
	]);
}
