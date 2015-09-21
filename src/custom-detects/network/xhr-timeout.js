'use strict';

 module.exports = !!window.XMLHttpRequest && !!(typeof new window.XMLHttpRequest().timeout === 'number');
