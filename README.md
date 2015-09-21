# not-supported
`not-supported` is a script which, when placed in the `HEAD` of an HTML page, will limit that page's support to browsers that support most HTML5/CSS3/ES5 technologies. Specifically, it used Modernizr to test for these features:

* CSS `rem` unit
* CSS `vw` and `vh` units
* CSS `calc()` function
* CSS `pointer-events: none`
* CSS `user-select: none`
* CSS `box-sizing: border-box`
* CSS transitions
* CSS animations
* CSS 3d transforms
* CSS flexbox ([2015 spec](http://www.w3.org/TR/css-flexbox-1/))
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
* SVG elements inline with HTML
* `requestAnimationFrame` and `cancelAnimationFrame`
* `window.matchMedia`

It is designed to be used with [autoprefixer](https://github.com/postcss/autoprefixer), which should be set with this query:
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
