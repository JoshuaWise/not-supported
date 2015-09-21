'use strict';

var url = window.URL || false;
module.exports = url && 'revokeObjectURL' in url && 'createObjectURL' in url;
