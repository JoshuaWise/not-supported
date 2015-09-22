'use strict';
var M = window.Modernizr;

// Feature detects
M.addTest('cssremunit', require('./custom-detects/css/remunit'));
M.addTest('cssboxsizing', require('./custom-detects/css/boxsizing'));
M.addTest('csspointerevents', require('./custom-detects/css/pointerevents'));
M.addTest('csstransitions', require('./custom-detects/css/transitions'));
M.addTest('csslineargradient', require('./custom-detects/css/lineargradient'));
M.addTest('cssbackgroundoptions', require('./custom-detects/css/backgroundoptions'));
M.addTest('csscalc', require('./custom-detects/css/calc'));
M.addTest('requestanimationframe', require('./custom-detects/requestanimationframe'));
M.addTest('matchmedia', require('./custom-detects/matchmedia'));
M.addTest('xhrtimeout', require('./custom-detects/network/xhr-timeout'));
M.addTest('bloburls', require('./custom-detects/url/bloburls'));

// Bug detects
M.addTest('partialclasslist', require('./bug-detects/partialclasslist'));

window.NotSupported = !(M.es5
	&& M.cssremunit
	&& M.cssvwunit
	&& M.cssvhunit
	&& M.csscalc
	&& M.cssboxsizing
	&& M.csspointerevents
	&& M.userselect
	&& M.csstransitions
	&& M.cssanimations
	&& M.csstransforms3d
	&& M.csslineargradient
	&& M.cssbackgroundoptions
	&& M.flexbox
	&& M.flexwrap
	&& M.typedarrays
	&& M.blobconstructor
	&& M.bloburls
	&& M.xhrtimeout
	&& M.websockets
	&& M.websocketsbinary
	&& M.webworkers
	&& M.history
	&& M.canvastext
	&& M.dataset
	&& M.classlist
	&& M.scriptdefer
	&& M.scriptasync
	&& M.audio
	&& M.video
	&& M.progressbar
	&& M.unknownelements
	&& M.inlinesvg
	&& M.requestanimationframe
	&& M.matchmedia
);
