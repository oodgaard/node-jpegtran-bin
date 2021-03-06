/*global describe, it */
'use strict';
var fs = require('fs');
var exec = require('child_process').exec;
var assert = require('assert');
var binPath = require('../lib/jpegtran.js').path;

describe('JPEGTran rebuild', function () {
	it('it should rebuild the jpegtran binaries', function (cb) {
		this.timeout(false); // give this test time to build
		var origCTime = fs.statSync(binPath).ctime;
		exec('node build.js', {}, function (err) {
			var actualCTime = fs.statSync(binPath).ctime;
			assert(actualCTime !== origCTime);
			cb(err);
		}).path;
	});
});
