var path = require('path');
var phantomjs = require('phantomjs-prebuilt');
var Promise = require('bluebird');

var scriptPath = path.join(__dirname, 'script.js');

module.exports = function (url) {
	return new Promise((resolve, reject) => {
		var program = phantomjs.exec(scriptPath, url);
		var stdout = '';
		var stderr = '';

		program.stdout.on('data', (data) => {
			stdout += data;
		});

		program.stderr.on('data', (data) => {
			stderr += data;
		});

		program.on('exit', (code) => {
			if (code === 0) {
				// convert utf-8 -> binary string because website-scraper needs binary
				resolve(new Buffer(stdout).toString('binary'));
			} else {
				reject(new Error(`Phantomjs finished with exit code ${code}. ${stderr}`));
			}
		});
	});
};
