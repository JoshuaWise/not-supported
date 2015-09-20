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
	&& Modernizr.websockets
	&& Modernizr.websocketsbinary
	&& Modernizr.webworkers
	&& Modernizr.history
	&& Modernizr.canvastext
	&& Modernizr.scriptdefer
	&& Modernizr.scriptasync
	&& Modernizr.audio
	&& Modernizr.video
	&& Modernizr.inlinesvg
	&& Modernizr.requestanimationframe
	&& Modernizr.matchmedia
);

if (modern) {
	Modernizr.load([{
			test: false,
			nope: 'fallback.js'
		}
	]);
}
