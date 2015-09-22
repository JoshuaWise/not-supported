# not-supported

`not-supported` is a front-end script which does 2 things:

* Provides a very opinionated and sculpted build of [Modernizr](https://modernizr.com/), which you can access through `window.Modernizr`
* Provides `window.NotSupported` which is a Boolean, indicating if any of the Modernizr tests failed.

More broadly, `not-supported` aims to allow web developers to use many of the newer HTML5/CSS3/ES5 features, without worrying about browser compatibility. You're expected to redirect your users to another page when `NotSupported === true` (but you can really do whatever you want).

The build of Modernizr that is provided does **NOT** add classes to the HTML element. The philosophy behind `not-supported` is not to respond to outdated browsers with a lesser experience, but to simply say "sorry, your browser is outdated and isn't supported."

This approach also differs from scripts that "redirect if IE8", because this one uses feature detection, meaning that non-standard browsers are handled the same way as any other browser. We do not discriminate which browser you choose, just that your browser can handle modern protocol.

## Required Features

In order for `NotSupported` to be `true`, the browser must support **all** of the following features:

* CSS `rem` unit
* CSS `vw` and `vh` units
* CSS `calc()` function (test fails for Android 4.x, which doesn't support `*` and `/` operators)
* CSS `pointer-events: none`
* CSS `user-select: none` (vendor prefixes are accepted)
* CSS `box-sizing: border-box`
* CSS `linear-gradient()` (must support "to <side>" syntax)
* CSS `background-position` and `background-size` (must support edge offsets, and use in shorthand)
* CSS transitions
* CSS animations (vendor prefixes are accepted)
* CSS 3d transforms (vendor prefixes are accepted)
* CSS flexbox ([2015 spec](http://www.w3.org/TR/css-flexbox-1/), vendor prefixes are accepted)
* ECMAScript 5
* Typed Arrays
* Blob Constructor
* Blob URLs
* XMLHttpRequest `.timeout` and `.ontimeout`
* Websockets
* Web Workers
* History API
* `element.dataset`
* `element.classList`
* HTML5 Canvas
* `async` and `defer` attributes on `<script>` tags
* HTML5 `<audio>` and `<video>` elements
* HTML5 `<progress>` element
* HTML5 unknown/unrecognized elements
* SVG elements inline with HTML
* `requestAnimationFrame` and `cancelAnimationFrame`
* `window.matchMedia`

*Unless otherwise noted, the feature must be supported without vendor prefixes*

## Major Browser Support

You might look at the list above and think "wow, I'd be cutting my user base in half!" Well, you'd be wrong. Most people are surprised at how good browser support is these days.

Here's a rundown of which major browsers will get a `NotSupported === false`.
* Chrome >= 29		(98.3% of Chrome users)
* Firefox >= 29		(94.3% of Firefox users)
* Safari >= 7		(74.5% of Safari users, rising rapidly)
* IE/Edge >= 11		(69.2% of IE/Edge users)

*All usage data was retreived from [StatCounter](http://gs.statcounter.com/), usage in the United States, August 2015.*

## Autoprefixer

`not-supported` is designed to be used with [autoprefixer](https://github.com/postcss/autoprefixer), which should be set with this query:
```
"
	chrome >= 29,
	ff >= 29,
	safari >= 7,
	ie >= 11,
	edge >= 1,
	opera >= 15,
	and_chr >= 44,
	and_ff >= 40,
	android >= 40,
	ios >= 7,
	ie_mob >= 11,
	op_mob >= 30
"
```

## Known Bugs in Supported Browsers

`not supported` is designed to give developers the best experience possible by removing the burden of dealing with outdated browsers. However, even the most recent browsers contains some bugs in the features listed above.

Here is a **non-exhaustive** list of some bugs that you still may encounter. This list is intended as a reference for when you experience issues in a supported browser.

#### CSS 3d Transforms

* [IE11 doesn't support `transform-style: preserve-3d`.](https://msdn.microsoft.com/library/hh673529(v=vs.85).aspx#the_ms_transform_style_property)
* Firefox doesn't recognize the `perspective` property on the `<body>` element.

#### CSS Animations

* IE11 doesn't support `@keyframes` rules inside media queries.
* [IE11 on Windows 7 has a bug where `transform: translate()` values are always interpreted as px units, when used in a `@keyframes` rule.](http://codepen.io/flxsource/pen/jPYWoE)

#### CSS `pointer-events: none`

* IE11 deson't recognize it on `<a>` tags unless `display` is set to `block` or `inline-block`.

#### CSS `vw` and `vh` units

* Chrome versions < 34 and Safari/iOS Safari 7 don't support these units on border widths, `box-shadow`, `transform`, or in `calc()`.
* iOS 7 Safari sets these units to 0 if the page has been left and is returned to after 60 seconds. It will also recalculate widths set in `vh` as `vw`, and heights set in `vw` as `vh`, when orientation changes. (workarounds: [1](https://gist.github.com/pburtchaell/e702f441ba9b3f76f587), [2](https://gist.github.com/BenMorel/e9e34c08360ebbbd0634))
* IE11 has unexpected behavior when using `vw` in 3d transforms.

#### CSS `rem` unit

* IE11 doesn't support `rem` in `line-height` on pseudo-elements.

#### CSS `calc()`

* [IE11 doesn't support `calc()` in `box-shadow` or `transform` properties.](https://connect.microsoft.com/IE/feedback/details/814380/)
* [IE11 doesn't transition properties whose values are set with `calc()`.](http://connect.microsoft.com/IE/feedback/details/762719/css3-calc-bug-inside-transition-or-transform)
* IE Edge (and possibly IE11) doesn't support `calc()` in the `flex` shorthand property.
* Safari 7 and iOS Safari 7 don't support `vw` or `vh` in `calc()`.
* [Firefox doesn't support `calc()` in `line-height`.](https://bugzilla.mozilla.org/show_bug.cgi?id=594933)

#### CSS Flexbox

* Various flexbox-related bugs can be found [here](https://github.com/philipwalton/flexbugs).
* [IE11 doesn't wrap long paragraphs of text.](http://jsfiddle.net/y1do9cx8/1/)

#### History API

* [IE/Edge doesn't fire `popstate` event when the url's hash value changes.](https://connect.microsoft.com/IE/Feedback/Details/1528993)

#### Blob URLs

* [Safari has an issue with opening blob URLs in new tabs when type is `application/octet-stream`.](http://jsfiddle.net/24FhL/)
* [Chrome on iOS has an issue with opening blob URLs in new tabs.](http://stackoverflow.com/questions/24485077/how-to-open-blob-url-on-chrome-ios)

#### Typed Arrays

* IE11 Mobile doesn't support `Uint8ClampedArray`.

#### Websockets

* Firefox versions <= 37 do not support Websockets inside of Web Workers.

